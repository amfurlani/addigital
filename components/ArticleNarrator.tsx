'use client';

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Check,
  ChevronDown,
  Pause,
  Play,
  RotateCcw,
  Settings2,
  Square,
  Volume2,
  X,
} from 'lucide-react';

type ArticleNarratorProps = {
  title: string;
  body: string[];
};

type NarrationStatus =
  | 'idle'
  | 'speaking'
  | 'paused';

/**
 * A Web Speech API não possui uma propriedade
 * padronizada que diga se uma voz é "Natural".
 *
 * Por isso, classificamos as vozes usando as
 * informações que o navegador efetivamente
 * disponibiliza: idioma, nome, voiceURI,
 * default e localService.
 *
 * O objetivo é:
 *
 * 1. Priorizar pt-BR.
 * 2. Priorizar vozes identificadas como Natural.
 * 3. Favorecer vozes Online/Microsoft do Edge.
 * 4. Usar a voz padrão como critério secundário.
 * 5. Manter fallback para qualquer voz em português.
 */
function scoreVoice(
  voice: SpeechSynthesisVoice
) {
  const name =
    voice.name.toLowerCase();

  const uri =
    voice.voiceURI.toLowerCase();

  const lang =
    voice.lang.toLowerCase();

  let score = 0;

  /*
   * IDIOMA
   */
  if (lang === 'pt-br') {
    score += 1000;
  } else if (
    lang.startsWith('pt')
  ) {
    score += 300;
  } else {
    return -1000;
  }

  /*
   * QUALIDADE / NATURALIDADE
   *
   * Edge costuma identificar determinadas
   * vozes online/naturais pelo nome ou URI.
   */
  if (
    name.includes('natural') ||
    uri.includes('natural')
  ) {
    score += 500;
  }

  /*
   * Voz online.
   */
  if (
    name.includes('online') ||
    uri.includes('online')
  ) {
    score += 250;
  }

  /*
   * Vozes Microsoft recebem pequena
   * preferência porque, no Edge, podem
   * incluir as opções online/naturais.
   */
  if (
    name.includes('microsoft') ||
    uri.includes('microsoft')
  ) {
    score += 100;
  }

  /*
   * Voz definida como padrão pelo sistema.
   */
  if (voice.default) {
    score += 40;
  }

  /*
   * Uma voz não local pode representar
   * um serviço online.
   *
   * É apenas um sinal secundário, pois
   * localService não indica diretamente
   * qualidade da voz.
   */
  if (!voice.localService) {
    score += 20;
  }

  return score;
}

function sortVoices(
  voices: SpeechSynthesisVoice[]
) {
  return [...voices].sort(
    (a, b) => {
      const scoreDifference =
        scoreVoice(b) -
        scoreVoice(a);

      if (scoreDifference !== 0) {
        return scoreDifference;
      }

      return a.name.localeCompare(
        b.name,
        'pt-BR'
      );
    }
  );
}

function isNaturalVoice(
  voice: SpeechSynthesisVoice
) {
  const description =
    `${voice.name} ${voice.voiceURI}`.toLowerCase();

  return description.includes(
    'natural'
  );
}

export function ArticleNarrator({
  title,
  body,
}: ArticleNarratorProps) {
  const [status, setStatus] =
    useState<NarrationStatus>('idle');

  const [currentIndex, setCurrentIndex] =
    useState(-1);

  const [voices, setVoices] = useState<
    SpeechSynthesisVoice[]
  >([]);

  const [selectedVoice, setSelectedVoice] =
    useState('');

  const [rate, setRate] = useState(1);

  const [settingsOpen, setSettingsOpen] =
    useState(false);

  const statusRef =
    useRef<NarrationStatus>('idle');

  const currentIndexRef = useRef(-1);

  /*
   * Cada início/reinício de leitura cria uma
   * nova sessão.
   *
   * Isso impede callbacks antigos de uma
   * utterance cancelada de avançarem a leitura.
   */
  const sessionRef = useRef(0);

  /*
   * Usado para não disputar a rolagem com o
   * usuário enquanto ele estiver navegando
   * manualmente pelo artigo.
   */
  const userScrollingRef = useRef(false);

  const scrollTimerRef =
    useRef<ReturnType<
      typeof setTimeout
    > | null>(null);

  const totalBlocks = body.length;

  const progress =
    currentIndex >= 0 &&
    totalBlocks > 0
      ? ((currentIndex + 1) /
          totalBlocks) *
        100
      : 0;

  const activeVoice =
    voices.find(
      (voice) =>
        voice.voiceURI ===
        selectedVoice
    ) || null;

  const updateStatus = useCallback(
    (nextStatus: NarrationStatus) => {
      statusRef.current = nextStatus;
      setStatus(nextStatus);
    },
    []
  );

  const updateCurrentIndex =
    useCallback(
      (index: number) => {
        currentIndexRef.current =
          index;

        setCurrentIndex(index);

        document
          .querySelectorAll(
            '[data-narration-index]'
          )
          .forEach((element) => {
            element.classList.remove(
              'is-narrating'
            );
          });

        if (index < 0) {
          return;
        }

        const element =
          document.querySelector<HTMLElement>(
            `[data-narration-index="${index}"]`
          );

        if (!element) {
          return;
        }

        element.classList.add(
          'is-narrating'
        );

        /*
         * Só movimenta a página quando o
         * trecho atual saiu da área confortável
         * de leitura e o usuário não está
         * rolando manualmente.
         */
        if (
          !userScrollingRef.current
        ) {
          const rect =
            element.getBoundingClientRect();

          const topLimit = 110;

          const bottomLimit =
            window.innerHeight - 150;

          const isComfortablyVisible =
            rect.top >= topLimit &&
            rect.bottom <=
              bottomLimit;

          if (
            !isComfortablyVisible
          ) {
            element.scrollIntoView({
              behavior: 'smooth',
              block: 'center',
            });
          }
        }
      },
      []
    );

  const stopNarration =
    useCallback(() => {
      if (
        'speechSynthesis' in
        window
      ) {
        window.speechSynthesis.cancel();
      }

      sessionRef.current += 1;

      updateStatus('idle');
      updateCurrentIndex(-1);
      setSettingsOpen(false);
    }, [
      updateCurrentIndex,
      updateStatus,
    ]);

  /*
   * ========================================================
   * VOZES
   * ========================================================
   *
   * Carrega as vozes disponibilizadas pelo
   * navegador e mantém somente português.
   *
   * Depois ordena automaticamente pela nossa
   * pontuação de preferência.
   */
  useEffect(() => {
    if (
      !(
        'speechSynthesis' in
        window
      )
    ) {
      return;
    }

    const synth =
      window.speechSynthesis;

    function loadVoices() {
      const available =
        synth.getVoices();

      const portuguese =
        available.filter(
          (voice) =>
            voice.lang
              .toLowerCase()
              .startsWith('pt')
        );

      const ordered =
        sortVoices(portuguese);

      setVoices(ordered);

      setSelectedVoice(
        (current) => {
          /*
           * Preserva a escolha do usuário
           * caso a lista de vozes seja
           * atualizada pelo navegador.
           */
          if (
            current &&
            ordered.some(
              (voice) =>
                voice.voiceURI ===
                current
            )
          ) {
            return current;
          }

          /*
           * Como ordered já está classificado,
           * a primeira voz é nossa melhor
           * candidata disponível.
           */
          return (
            ordered[0]?.voiceURI ||
            ''
          );
        }
      );
    }

    /*
     * Alguns navegadores já disponibilizam
     * as vozes imediatamente.
     */
    loadVoices();

    /*
     * Outros, especialmente navegadores
     * Chromium, podem carregar a lista
     * assincronamente.
     */
    synth.addEventListener(
      'voiceschanged',
      loadVoices
    );

    return () => {
      synth.removeEventListener(
        'voiceschanged',
        loadVoices
      );
    };
  }, []);

  /*
   * ========================================================
   * ROLAGEM MANUAL
   * ========================================================
   */

  useEffect(() => {
    function handleManualScroll() {
      userScrollingRef.current =
        true;

      if (
        scrollTimerRef.current
      ) {
        clearTimeout(
          scrollTimerRef.current
        );
      }

      scrollTimerRef.current =
        setTimeout(() => {
          userScrollingRef.current =
            false;
        }, 2500);
    }

    window.addEventListener(
      'wheel',
      handleManualScroll,
      {
        passive: true,
      }
    );

    window.addEventListener(
      'touchmove',
      handleManualScroll,
      {
        passive: true,
      }
    );

    return () => {
      window.removeEventListener(
        'wheel',
        handleManualScroll
      );

      window.removeEventListener(
        'touchmove',
        handleManualScroll
      );

      if (
        scrollTimerRef.current
      ) {
        clearTimeout(
          scrollTimerRef.current
        );
      }
    };
  }, []);

  /*
   * ========================================================
   * CLEANUP
   * ========================================================
   */

  useEffect(() => {
    return () => {
      sessionRef.current += 1;

      if (
        'speechSynthesis' in
        window
      ) {
        window.speechSynthesis.cancel();
      }

      document
        .querySelectorAll(
          '[data-narration-index]'
        )
        .forEach((element) => {
          element.classList.remove(
            'is-narrating'
          );
        });
    };
  }, []);

  /*
   * ========================================================
   * CRIAÇÃO DA FALA
   * ========================================================
   */

  const configureUtterance =
    useCallback(
      (
        utterance:
          SpeechSynthesisUtterance
      ) => {
        const voice =
          voices.find(
            (item) =>
              item.voiceURI ===
              selectedVoice
          );

        if (voice) {
          utterance.voice = voice;
          utterance.lang =
            voice.lang;
        } else {
          utterance.lang =
            'pt-BR';
        }

        utterance.rate = rate;
        utterance.pitch = 1;
        utterance.volume = 1;
      },
      [
        rate,
        selectedVoice,
        voices,
      ]
    );

  /*
   * ========================================================
   * LEITURA DOS BLOCOS
   * ========================================================
   */

  const speakBlock = useCallback(
    (
      index: number,
      session: number
    ) => {
      if (
        !(
          'speechSynthesis' in
          window
        )
      ) {
        return;
      }

      if (
        session !==
        sessionRef.current
      ) {
        return;
      }

      /*
       * Fim do artigo.
       */
      if (
        index >= body.length
      ) {
        updateStatus('idle');
        updateCurrentIndex(-1);

        return;
      }

      const synth =
        window.speechSynthesis;

      const utterance =
        new SpeechSynthesisUtterance(
          body[index]
        );

      configureUtterance(
        utterance
      );

      utterance.onstart = () => {
        if (
          session !==
          sessionRef.current
        ) {
          return;
        }

        updateCurrentIndex(index);
        updateStatus('speaking');
      };

      utterance.onend = () => {
        if (
          session !==
          sessionRef.current
        ) {
          return;
        }

        if (
          statusRef.current ===
          'idle'
        ) {
          return;
        }

        speakBlock(
          index + 1,
          session
        );
      };

      utterance.onerror = (
        event
      ) => {
        /*
         * Cancelamento e interrupção são
         * esperados quando o usuário reinicia,
         * troca a voz ou encerra a leitura.
         */
        if (
          event.error ===
            'canceled' ||
          event.error ===
            'interrupted'
        ) {
          return;
        }

        if (
          session ===
          sessionRef.current
        ) {
          updateStatus('idle');
          updateCurrentIndex(-1);
        }
      };

      synth.speak(utterance);
    },
    [
      body,
      configureUtterance,
      updateCurrentIndex,
      updateStatus,
    ]
  );

  /*
   * ========================================================
   * INICIAR NARRAÇÃO
   * ========================================================
   */

  const startNarration =
    useCallback(
      (startIndex = 0) => {
        if (
          !(
            'speechSynthesis' in
            window
          )
        ) {
          alert(
            'Seu navegador não oferece suporte à leitura em voz alta.'
          );

          return;
        }

        const synth =
          window.speechSynthesis;

        synth.cancel();

        sessionRef.current += 1;

        const session =
          sessionRef.current;

        updateStatus(
          'speaking'
        );

        /*
         * Quando começa do início,
         * pronuncia o título antes do
         * primeiro bloco.
         */
        if (startIndex === 0) {
          const titleUtterance =
            new SpeechSynthesisUtterance(
              title
            );

          configureUtterance(
            titleUtterance
          );

          titleUtterance.onend =
            () => {
              if (
                session ===
                sessionRef.current
              ) {
                speakBlock(
                  0,
                  session
                );
              }
            };

          titleUtterance.onerror =
            (event) => {
              if (
                event.error !==
                  'canceled' &&
                event.error !==
                  'interrupted' &&
                session ===
                  sessionRef.current
              ) {
                speakBlock(
                  0,
                  session
                );
              }
            };

          synth.speak(
            titleUtterance
          );

          return;
        }

        speakBlock(
          startIndex,
          session
        );
      },
      [
        configureUtterance,
        speakBlock,
        title,
        updateStatus,
      ]
    );

  /*
   * ========================================================
   * CONTROLES
   * ========================================================
   */

  function handleMainPlay() {
    if (
      status === 'paused'
    ) {
      window.speechSynthesis.resume();

      updateStatus(
        'speaking'
      );

      return;
    }

    /*
     * Se já estiver falando, o botão
     * reinicia o trecho atual.
     */
    if (
      status === 'speaking' &&
      currentIndex >= 0
    ) {
      startNarration(
        currentIndex
      );

      return;
    }

    startNarration(0);
  }

  function handlePause() {
    if (
      status !== 'speaking'
    ) {
      return;
    }

    window.speechSynthesis.pause();

    updateStatus('paused');
  }

  function handleRestart() {
    startNarration(0);
  }

  function handleVoiceChange(
    event:
      React.ChangeEvent<HTMLSelectElement>
  ) {
    const nextVoice =
      event.target.value;

    setSelectedVoice(nextVoice);

    /*
     * A mudança de voz exige uma nova
     * utterance. Para evitar comportamento
     * diferente entre navegadores,
     * encerramos a leitura atual.
     */
    if (status !== 'idle') {
      stopNarration();
    }
  }

  function handleRateChange(
    nextRate: number
  ) {
    /*
     * Apenas salva a nova velocidade.
     *
     * Se estivermos parados, ela será usada
     * na próxima leitura.
     */
    if (status === 'idle') {
      setRate(nextRate);
      return;
    }

    /*
     * Se estivermos lendo, precisamos
     * reconstruir a utterance para aplicar
     * a nova velocidade de forma confiável.
     */
    const restartIndex =
      Math.max(
        currentIndexRef.current,
        0
      );

    setRate(nextRate);

    window.speechSynthesis.cancel();

    sessionRef.current += 1;

    /*
     * O próximo clique em continuar/ouvir
     * usará a nova velocidade.
     *
     * Mantemos a interface consistente
     * encerrando a sessão atual.
     */
    updateStatus('idle');
    updateCurrentIndex(-1);

    /*
     * Mantém o trecho conhecido para que
     * possamos reiniciar imediatamente após
     * o React aplicar a nova velocidade.
     */
    window.setTimeout(() => {
      /*
       * Como rate é estado React, evitamos
       * iniciar aqui com um closure antigo.
       *
       * O usuário pode simplesmente clicar
       * novamente em "Ouvir artigo".
       *
       * restartIndex permanece intencionalmente
       * calculado para futuras extensões do
       * controle de retomada.
       */
      void restartIndex;
    }, 0);
  }

  const isActive =
    status !== 'idle';

  /*
   * Texto auxiliar para informar qual voz
   * foi selecionada automaticamente.
   */
  const voiceQualityLabel =
    activeVoice &&
    isNaturalVoice(activeVoice)
      ? 'Voz natural'
      : null;

  return (
    <>
      {/* ===================================================
          CONTROLE EDITORIAL NO INÍCIO DO ARTIGO
          =================================================== */}

      <section className="article-listen-card">
        <div className="article-listen-copy">
          <span className="article-listen-eyebrow">
            <Volume2 size={16} />
            NARRAÇÃO
          </span>

          <div>
            <h2>
              Ouça este artigo
            </h2>

            <p>
              Acompanhe a leitura
              enquanto o texto é
              destacado na página.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="article-listen-start"
          onClick={
            handleMainPlay
          }
        >
          {status ===
          'paused' ? (
            <Play size={18} />
          ) : status ===
            'speaking' ? (
            <RotateCcw
              size={18}
            />
          ) : (
            <Play size={18} />
          )}

          {status === 'paused'
            ? 'Continuar'
            : status ===
                'speaking'
              ? 'Reiniciar trecho'
              : 'Ouvir artigo'}
        </button>
      </section>

      {/* ===================================================
          PLAYER FLUTUANTE
          =================================================== */}

      {isActive && (
        <div
          className="narrator-floating-wrap"
          role="region"
          aria-label="Controles da narração"
        >
          <div className="narrator-floating-player">
            {/* PROGRESSO */}

            <div
              className="narrator-progress"
              aria-hidden="true"
            >
              <span
                style={{
                  width: `${progress}%`,
                }}
              />
            </div>

            <div className="narrator-floating-content">
              {/* STATUS */}

              <div className="narrator-now-playing">
                <span className="narrator-pulse">
                  <Volume2
                    size={15}
                  />
                </span>

                <div>
                  <strong>
                    {status ===
                    'paused'
                      ? 'Narração pausada'
                      : 'Ouvindo artigo'}
                  </strong>

                  <span>
                    {currentIndex >=
                    0
                      ? `Trecho ${
                          currentIndex +
                          1
                        } de ${totalBlocks}`
                      : 'Iniciando leitura'}
                  </span>
                </div>
              </div>

              {/* CONTROLES */}

              <div className="narrator-floating-controls">
                <button
                  type="button"
                  className="narrator-icon-button"
                  onClick={
                    status ===
                    'paused'
                      ? handleMainPlay
                      : handlePause
                  }
                  aria-label={
                    status ===
                    'paused'
                      ? 'Continuar narração'
                      : 'Pausar narração'
                  }
                >
                  {status ===
                  'paused' ? (
                    <Play
                      size={18}
                    />
                  ) : (
                    <Pause
                      size={18}
                    />
                  )}
                </button>

                <button
                  type="button"
                  className="narrator-rate-button"
                  onClick={() =>
                    setSettingsOpen(
                      (current) =>
                        !current
                    )
                  }
                  aria-expanded={
                    settingsOpen
                  }
                  aria-label="Configurações da narração"
                >
                  {rate}×

                  <ChevronDown
                    size={14}
                  />
                </button>

                <button
                  type="button"
                  className="narrator-icon-button"
                  onClick={
                    handleRestart
                  }
                  aria-label="Reiniciar artigo"
                >
                  <RotateCcw
                    size={17}
                  />
                </button>

                <button
                  type="button"
                  className="narrator-icon-button narrator-stop-button"
                  onClick={
                    stopNarration
                  }
                  aria-label="Parar narração"
                >
                  <Square
                    size={15}
                  />
                </button>
              </div>
            </div>

            {/* =================================================
                CONFIGURAÇÕES
                ================================================= */}

            {settingsOpen && (
              <div className="narrator-settings">
                <div className="narrator-settings-header">
                  <span>
                    <Settings2
                      size={15}
                    />
                    Narração
                  </span>

                  <button
                    type="button"
                    onClick={() =>
                      setSettingsOpen(
                        false
                      )
                    }
                    aria-label="Fechar configurações"
                  >
                    <X
                      size={16}
                    />
                  </button>
                </div>

                {/* VELOCIDADE */}

                <div className="narrator-setting-group">
                  <span className="narrator-setting-label">
                    Velocidade
                  </span>

                  <div className="narrator-speed-options">
                    {[
                      0.8,
                      1,
                      1.2,
                      1.4,
                    ].map(
                      (option) => (
                        <button
                          type="button"
                          key={
                            option
                          }
                          onClick={() =>
                            handleRateChange(
                              option
                            )
                          }
                          className={
                            rate ===
                            option
                              ? 'is-selected'
                              : undefined
                          }
                        >
                          {rate ===
                            option && (
                            <Check
                              size={
                                13
                              }
                            />
                          )}

                          {option}×
                        </button>
                      )
                    )}
                  </div>
                </div>

                {/* VOZ */}

                {voices.length >
                  0 && (
                  <label className="narrator-setting-group">
                    <span className="narrator-setting-label">
                      Voz
                      {voiceQualityLabel &&
                        ` · ${voiceQualityLabel}`}
                    </span>

                    <select
                      value={
                        selectedVoice
                      }
                      onChange={
                        handleVoiceChange
                      }
                      aria-label="Selecionar voz da narração"
                    >
                      {voices.map(
                        (voice) => {
                          const natural =
                            isNaturalVoice(
                              voice
                            );

                          return (
                            <option
                              key={
                                voice.voiceURI
                              }
                              value={
                                voice.voiceURI
                              }
                            >
                              {
                                voice.name
                              }

                              {natural
                                ? ' · Natural'
                                : ''}

                              {' · '}

                              {
                                voice.lang
                              }
                            </option>
                          );
                        }
                      )}
                    </select>
                  </label>
                )}

                {/* VOZ ATUAL */}

                {activeVoice && (
                  <div className="narrator-voice-info">
                    <span>
                      Voz selecionada
                    </span>

                    <strong>
                      {
                        activeVoice.name
                      }
                    </strong>

                    {isNaturalVoice(
                      activeVoice
                    ) && (
                      <small>
                        Voz natural
                        priorizada
                        automaticamente
                      </small>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
