import { useCallback, useEffect, useRef, useState } from 'react';
import { LANGUAGES } from '@/data/artForms';

/**
 * Browser text-to-speech helper (Web Speech API).
 * Speaks the artwork narration in the chosen language. If the device has no
 * voice installed for a language, the browser falls back to its default voice —
 * the demo still reads the text aloud.
 */
export function useSpeech() {
  const supported = typeof window !== 'undefined' && 'speechSynthesis' in window;
  const [speaking, setSpeaking] = useState(false);
  const [failed, setFailed] = useState(false);
  const voicesRef = useRef([]);

  useEffect(() => {
    if (!supported) return;
    const load = () => {
      voicesRef.current = window.speechSynthesis.getVoices();
    };
    load();
    window.speechSynthesis.addEventListener('voiceschanged', load);
    return () => {
      window.speechSynthesis.removeEventListener('voiceschanged', load);
      window.speechSynthesis.cancel();
    };
  }, [supported]);

  const stop = useCallback(() => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  }, [supported]);

  const speak = useCallback(
    (text, languageCode) => {
      if (!supported || !text) return;
      window.speechSynthesis.cancel();

      setFailed(false);
      const language = LANGUAGES.find((item) => item.code === languageCode) || LANGUAGES[0];
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = language.speech;
      utterance.rate = 0.95;
      utterance.pitch = 1;

      const voices = voicesRef.current;
      const match =
        voices.find((voice) => voice.lang === language.speech) ||
        voices.find((voice) => voice.lang?.startsWith(languageCode));
      if (match) utterance.voice = match;

      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => {
        // No voice installed for this language, or the device blocked playback.
        setSpeaking(false);
        setFailed(true);
      };

      setSpeaking(true);
      window.speechSynthesis.speak(utterance);
    },
    [supported]
  );

  return { speak, stop, speaking, failed, supported };
}
