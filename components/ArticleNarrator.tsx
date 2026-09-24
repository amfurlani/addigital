'use client';

import {
  useEffect,
  useRef,
  useState,
} from 'react';
import {
  Volume2,
  Pause,
  Play,
  Square,
} from 'lucide-react';

type ArticleNarratorProps = {
  title: string;
  body: string[];
};

export function ArticleNarrator({
  title,
  body,
}: ArticleNarratorProps) {
  const [isSpeaking, setIsSpeaking] =
    useState(false);

  const [isPaused, setIsPaused] =
    useState(false);

  const [voices, setVoices] = useState<
    SpeechSynthesisVoice[]
  >([]);

  const [selectedVoice, setSelectedVoice] =
    useState('');

  const [rate, setRate] = useState(1);

  const utteranceRef =
    useRef<SpeechSynthesisUtterance | null>(
      null
    );

  const text = `${title}. ${body.join('. ')}`;

  /*
   * Carrega as vozes disponíveis no navegador.
   *
   * Alguns navegadores disponibilizam as vozes
   * imediatamente; outros disparam voiceschanged
   * depois do carregamento da página.
   */
  useEffect(() => {
    if (!('speechSynthesis' in window)) {
      return;
    }

    const synth = window.speechSynthesis;

    function loadVoices() {
      const availableVoices =
        synth.getVoices();

      /*
       * Prioriza português do Brasil.
       * Se não houver pt-BR, aceita outras
       * vozes em português.
       */
      const portugueseVoices =
        availableVoices.filter((voice) =>
          voice.lang
            .toLowerCase()
            .startsWith('pt')
        );

      const sortedVoices = [
        ...portugueseVoices.filter(
          (voice) =>
            voice.lang
              .toLowerCase() === 'pt-br'
        ),
        ...portugueseVoices.filter(
          (voice) =>
            voice.lang
              .toLowerCase() !== 'pt-br'
        ),
      ];

      setVoices(sortedVoices);

      setSelectedVoice((current) => {
        if (current) return current;

        const brazilianVoice =
          sortedVoices.find(
            (voice) =>
              voice.lang
                .toLowerCase() === 'pt-br'
          );

        return (
          brazilianVoice?.voiceURI ||
          sortedVoices[0]?.voiceURI ||
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

      synth.cancel();
    };
  }, []);

  function handlePlay() {
    if (!('speechSynthesis' in window)) {
      alert(
        'Seu navegador não oferece suporte à leitura em voz alta.'
      );
      return;
    }

    const synth = window.speechSynthesis;

    if (isPaused) {
      synth.resume();

      setIsPaused(false);
      setIsSpeaking(true);

      return;
    }

    synth.cancel();

    const utterance =
      new SpeechSynthesisUtterance(text);

    utterance.lang = 'pt-BR';
    utterance.rate = rate;
    utterance.pitch = 1;
    utterance.volume = 1;

    const voice = voices.find(
      (item) =>
        item.voiceURI === selectedVoice
    );

    if (voice) {
      utterance.voice = voice;
      utterance.lang = voice.lang;
    }

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;

    synth.speak(utterance);

    setIsSpeaking(true);
    setIsPaused(false);
  }

  function handlePause() {
    if (!isSpeaking) return;

    window.speechSynthesis.pause();

    setIsPaused(true);
    setIsSpeaking(false);
  }

  function handleStop() {
    window.speechSynthesis.cancel();

    utteranceRef.current = null;

    setIsSpeaking(false);
    setIsPaused(false);
  }

  function handleVoiceChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    const value = event.target.value;

    setSelectedVoice(value);

    /*
     * Se houver uma leitura em andamento,
     * interrompe para evitar que a interface
     * mostre uma voz diferente da que está
     * efetivamente sendo utilizada.
     */
    if (isSpeaking || isPaused) {
      handleStop();
    }
  }

  function handleRateChange(
    event: React.ChangeEvent<HTMLSelectElement>
  ) {
    const value = Number(
      event.target.value
    );

    setRate(value);

    if (isSpeaking || isPaused) {
      handleStop();
    }
  }

  return (
    <div className="article-narrator">
      <div className="article-narrator-info">
        <span className="narrator-eyebrow">
          <Volume2 size={15} />
          OUVIR ARTIGO
        </span>

        <span className="narrator-description">
          Ouça este conteúdo em voz alta
        </span>
      </div>

      <div className="article-narrator-options">
        {voices.length > 0 && (
          <label className="narrator-option">
            <span>Voz</span>

            <select
              value={selectedVoice}
              onChange={handleVoiceChange}
              aria-label="Escolher voz da leitura"
            >
              {voices.map((voice) => (
                <option
                  key={voice.voiceURI}
                  value={voice.voiceURI}
                >
                  {voice.name}
                  {' · '}
                  {voice.lang}
                </option>
              ))}
            </select>
          </label>
        )}

        <label className="narrator-option">
          <span>Velocidade</span>

          <select
            value={rate}
            onChange={handleRateChange}
            aria-label="Velocidade da leitura"
          >
            <option value={0.8}>
              0,8×
            </option>

            <option value={1}>
              1×
            </option>

            <option value={1.2}>
              1,2×
            </option>

            <option value={1.4}>
              1,4×
            </option>
          </select>
        </label>
      </div>

      <div className="article-narrator-controls">
        <button
          type="button"
          onClick={handlePlay}
          className="narrator-main-button"
        >
          {isPaused ? (
            <>
              <Play size={17} />
              Continuar
            </>
          ) : (
            <>
              <Volume2 size={17} />
              {isSpeaking
                ? 'Reiniciar'
                : 'Ouvir artigo'}
            </>
          )}
        </button>

        {isSpeaking && (
          <button
            type="button"
            onClick={handlePause}
            className="narrator-control-button"
            aria-label="Pausar leitura"
          >
            <Pause size={17} />
          </button>
        )}

        {(isSpeaking || isPaused) && (
          <button
            type="button"
            onClick={handleStop}
            className="narrator-control-button"
            aria-label="Parar leitura"
          >
            <Square size={15} />
          </button>
        )}
      </div>
    </div>
  );
}
