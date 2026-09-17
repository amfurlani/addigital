'use client';

import { useEffect, useRef, useState } from 'react';
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
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [isPaused, setIsPaused] = useState(false);

  const utteranceRef = useRef<SpeechSynthesisUtterance | null>(null);

  const text = `${title}. ${body.join('. ')}`;

  useEffect(() => {
    return () => {
      window.speechSynthesis?.cancel();
    };
  }, []);

  function handlePlay() {
    if (!('speechSynthesis' in window)) {
      alert('Seu navegador não oferece suporte à leitura em voz alta.');
      return;
    }

    if (isPaused) {
      window.speechSynthesis.resume();
      setIsPaused(false);
      setIsSpeaking(true);
      return;
    }

    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);

    utterance.lang = 'pt-BR';
    utterance.rate = 1;
    utterance.pitch = 1;
    utterance.volume = 1;

    utterance.onend = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utterance.onerror = () => {
      setIsSpeaking(false);
      setIsPaused(false);
    };

    utteranceRef.current = utterance;

    window.speechSynthesis.speak(utterance);

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

    setIsSpeaking(false);
    setIsPaused(false);
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
              {isSpeaking ? 'Reiniciar' : 'Ouvir artigo'}
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
