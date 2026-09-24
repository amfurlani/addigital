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

  const sessionRef = useRef(0);

  const userScrollingRef = useRef(false);

  const scrollTimerRef =
    useRef<ReturnType<typeof setTimeout> | null>(
      null
    );

  const totalBlocks = body.length;

  const progress =
    currentIndex >= 0 && totalBlocks > 0
      ? ((currentIndex + 1) / totalBlocks) *
        100
      : 0;

  const updateStatus = useCallback(
    (nextStatus: NarrationStatus) => {
      statusRef.current = nextStatus;
      setStatus(nextStatus);
    },
    []
  );

  const updateCurrentIndex = useCallback(
    (index: number) => {
      currentIndexRef.current = index;
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

      if (index < 0) return;

      const element =
        document.querySelector<HTMLElement>(
          `[data-narration-index="${index}"]`
        );

      if (!element) return;

      element.classList.add(
        'is-narrating'
      );

      /*
       * Só acompanha automaticamente quando
       * o usuário não está rolando manualmente.
       */
      if (!userScrollingRef.current) {
        const rect =
          element.getBoundingClientRect();

        const topLimit = 110;
        const bottomLimit =
          window.innerHeight - 150;

        const isComfortablyVisible =
          rect.top >= topLimit &&
          rect.bottom <= bottomLimit;

        if (!isComfortablyVisible) {
          element.scrollIntoView({
            behavior: 'smooth',
            block: 'center',
          });
        }
      }
    },
    []
  );

  const stopNarration = useCallback(() => {
    if (
      'speechSynthesis' in window
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
   * Carrega somente vozes em português,
   * priorizando pt-BR.
   */
  useEffect(() => {
    if (
      !('speechSynthesis' in window)
    ) {
      return;
    }

    const synth =
      window.speechSynthesis;

    function loadVoices() {
      const available =
        synth.getVoices();

      const portuguese =
        available.filter((voice) =>
          voice.lang
            .toLowerCase()
            .startsWith('pt')
        );

      const ordered = [
        ...portuguese.filter(
          (voice) =>
            voice.lang.toLowerCase() ===
            'pt-br'
        ),
        ...portuguese.filter(
          (voice) =>
            voice.lang.toLowerCase() !==
            'pt-br'
        ),
      ];

      setVoices(ordered);

      setSelectedVoice((current) => {
        if (
          current &&
          ordered.some(
            (voice) =>
              voice.voiceURI === current
          )
        ) {
          return current;
        }

        const brazilian =
          ordered.find(
            (voice) =>
              voice.lang.toLowerCase() ===
              'pt-br'
          );

        return (
          brazilian?.voiceURI ||
          ordered[0]?.voiceURI ||
          ''
        );
      });
    }

    loadVoices();

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
   * Detecta rolagem deliberada do usuário.
   *
   * Durante um pequeno período, o narrador
   * deixa de reposicionar automaticamente
   * a página.
   */
  useEffect(() => {
    function handleManualScroll() {
      userScrollingRef.current = true;

      if (scrollTimerRef.current) {
        clearTimeout(
          scrollTimerRef.current
        );
      }

      scrollTimerRef.current =
        setTimeout(() => {
          userScrollingRef.current = false;
        }, 2500);
    }

    window.addEventListener(
      'wheel',
      handleManualScroll,
      { passive: true }
    );

    window.addEventListener(
      'touchmove',
      handleManualScroll,
      { passive: true }
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

      if (scrollTimerRef.current) {
        clearTimeout(
          scrollTimerRef.current
        );
      }
    };
  }, []);

  /*
   * Cancela a narração ao sair da página.
   */
  useEffect(() => {
    return () => {
      sessionRef.current += 1;

      if (
        'speechSynthesis' in window
      ) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  const speakBlock = useCallback(
    (
      index: number,
      session: number
    ) => {
      if (
        !('speechSynthesis' in window)
      ) {
        return;
      }

      if (
        session !== sessionRef.current
      ) {
        return;
      }

      if (index >= body.length) {
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

      const voice = voices.find(
        (item) =>
          item.voiceURI === selectedVoice
      );

      if (voice) {
        utterance.voice = voice;
        utterance.lang = voice.lang;
      } else {
        utterance.lang = 'pt-BR';
      }

      utterance.rate = rate;
      utterance.pitch = 1;
      utterance.volume = 1;

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

      utterance.onerror = (event) => {
        /*
         * "canceled" e "interrupted"
         * acontecem normalmente quando
         * reiniciamos ou encerramos a fala.
         */
        if (
          event.error === 'canceled' ||
          event.error === 'interrupted'
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
      rate,
      selectedVoice,
      updateCurrentIndex,
      updateStatus,
      voices,
    ]
  );

  const startNarration = useCallback(
    (startIndex = 0) => {
      if (
        !('speechSynthesis' in window)
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

      updateStatus('speaking');

      /*
       * Na leitura iniciada do começo,
       * pronunciamos o título antes do
       * primeiro bloco do artigo.
       */
      if (startIndex === 0) {
        const titleUtterance =
          new SpeechSynthesisUtterance(
            title
          );

        const voice = voices.find(
          (item) =>
            item.voiceURI ===
            selectedVoice
        );

        if (voice) {
          titleUtterance.voice = voice;
          titleUtterance.lang =
            voice.lang;
        } else {
          titleUtterance.lang =
            'pt-BR';
        }

        titleUtterance.rate = rate;
        titleUtterance.pitch = 1;
        titleUtterance.volume = 1;

        titleUtterance.onend = () => {
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

        titleUtterance.onerror = (
          event
        ) => {
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
      rate,
      selectedVoice,
      speakBlock,
      title,
      updateStatus,
      voices,
    ]
  );

  function handleMainPlay() {
    if (status === 'paused') {
      window.speechSynthesis.resume();

      updateStatus('speaking');
      return;
    }

    if (
      status === 'speaking' &&
      currentIndex >= 0
    ) {
      startNarration(currentIndex);
      return;
    }

    startNarration(0);
  }

  function handlePause() {
    if (status !== 'speaking') {
      return;
    }

    window.speechSynthesis.pause();

    updateStatus('paused');
  }

  function handleRestart() {
    startNarration(0);
  }

  function handleVoiceChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    const nextVoice =
      event.target.value;

    setSelectedVoice(nextVoice);

    /*
     * A nova voz será aplicada quando
     * a leitura for reiniciada.
     */
    if (status !== 'idle') {
      stopNarration();
    }
  }

  function handleRateChange(
    nextRate: number
  ) {
    setRate(nextRate);

    /*
     * Alterar a velocidade durante uma
     * utterance não é confiável entre
     * navegadores. Reiniciamos do bloco
     * atual quando necessário.
     */
    if (
      status !== 'idle' &&
      currentIndex >= 0
    ) {
      const restartIndex =
        currentIndex;

      window.speechSynthesis.cancel();

      sessionRef.current += 1;

      const session =
        sessionRef.current;

      updateStatus('speaking');

      setTimeout(() => {
        speakBlock(
          restartIndex,
          session
        );
      }, 0);
    }
  }

  const isActive =
    status !== 'idle';

  return (
    <>
      <section className="article-listen-card">
        <div className="article-listen-copy">
          <span className="article-listen-eyebrow">
            <Volume2 size={16} />
            NARRAÇÃO
          </span>

          <div>
            <h2>Ouça este artigo</h2>

            <p>
              Acompanhe a leitura enquanto
              o texto é destacado na página.
            </p>
          </div>
        </div>

        <button
          type="button"
          className="article-listen-start"
          onClick={handleMainPlay}
        >
          {status === 'paused' ? (
            <Play size={18} />
          ) : status ===
            'speaking' ? (
            <RotateCcw size={18} />
          ) : (
            <Play size={18} />
          )}

          {status === 'paused'
            ? 'Continuar'
            : status === 'speaking'
              ? 'Reiniciar trecho'
              : 'Ouvir artigo'}
        </button>
      </section>

      {isActive && (
        <div
          className="narrator-floating-wrap"
          role="region"
          aria-label="Controles da narração"
        >
          <div className="narrator-floating-player">
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
              <div className="narrator-now-playing">
                <span className="narrator-pulse">
                  <Volume2 size={15} />
                </span>

                <div>
                  <strong>
                    {status === 'paused'
                      ? 'Narração pausada'
                      : 'Ouvindo artigo'}
                  </strong>

                  <span>
                    Trecho{' '}
                    {Math.max(
                      currentIndex + 1,
                      1
                    )}{' '}
                    de {totalBlocks}
                  </span>
                </div>
              </div>

              <div className="narrator-floating-controls">
                <button
                  type="button"
                  className="narrator-icon-button"
                  onClick={
                    status === 'paused'
                      ? handleMainPlay
                      : handlePause
                  }
                  aria-label={
                    status === 'paused'
                      ? 'Continuar narração'
                      : 'Pausar narração'
                  }
                >
                  {status === 'paused' ? (
                    <Play size={18} />
                  ) : (
                    <Pause size={18} />
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
                  <Square size={15} />
                </button>
              </div>
            </div>

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
                    <X size={16} />
                  </button>
                </div>

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
                    ].map((option) => (
                      <button
                        type="button"
                        key={option}
                        onClick={() =>
                          handleRateChange(
                            option
                          )
                        }
                        className={
                          rate === option
                            ? 'is-selected'
                            : undefined
                        }
                      >
                        {rate ===
                          option && (
                          <Check
                            size={13}
                          />
                        )}

                        {option}×
                      </button>
                    ))}
                  </div>
                </div>

                {voices.length > 0 && (
                  <label className="narrator-setting-group">
                    <span className="narrator-setting-label">
                      Voz
                    </span>

                    <select
                      value={
                        selectedVoice
                      }
                      onChange={
                        handleVoiceChange
                      }
                    >
                      {voices.map(
                        (voice) => (
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
                            }{' '}
                            ·{' '}
                            {
                              voice.lang
                            }
                          </option>
                        )
                      )}
                    </select>
                  </label>
                )}
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
