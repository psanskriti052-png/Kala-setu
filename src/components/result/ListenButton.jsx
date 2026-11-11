import { useState } from 'react';
import { ChevronDown, Square, Volume2 } from 'lucide-react';
import { LANGUAGES } from '@/data/artForms';
import { useSpeech } from '@/lib/useSpeech';

/** "Listen" narration with a language picker (Web Speech API). */
export default function ListenButton({ audio }) {
  const [language, setLanguage] = useState('en');
  const [open, setOpen] = useState(false);
  const { speak, stop, speaking, failed, supported } = useSpeech();

  const active = LANGUAGES.find((item) => item.code === language) || LANGUAGES[0];

  const toggle = () => {
    if (speaking) {
      stop();
      return;
    }
    speak(audio[language], language);
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={toggle}
          className="inline-flex items-center gap-2 rounded-xl bg-kala-terracotta px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-kala-maroon"
        >
          {speaking ? (
            <Square className="h-4 w-4" aria-hidden="true" />
          ) : (
            <Volume2 className="h-4 w-4" aria-hidden="true" />
          )}
          {speaking ? 'Stop' : 'Listen'}
        </button>

        <div className="relative">
          <button
            type="button"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-haspopup="listbox"
            className="inline-flex items-center gap-1.5 rounded-xl border border-kala-line bg-kala-cream px-3 py-2.5 text-sm font-medium text-kala-maroon transition-colors hover:border-kala-gold"
          >
            {active.label}
            <ChevronDown className="h-3.5 w-3.5" aria-hidden="true" />
          </button>

          {open && (
            <ul
              role="listbox"
              aria-label="Narration language"
              className="sheet-in absolute left-0 top-full z-20 mt-1.5 w-40 overflow-hidden rounded-xl border border-kala-line bg-kala-cream py-1 shadow-lg"
            >
              {LANGUAGES.map((item) => (
                <li key={item.code}>
                  <button
                    type="button"
                    role="option"
                    aria-selected={item.code === language}
                    onClick={() => {
                      stop();
                      setLanguage(item.code);
                      setOpen(false);
                    }}
                    className={`flex w-full items-center justify-between px-3 py-2 text-sm transition-colors hover:bg-kala-peach ${
                      item.code === language ? 'font-semibold text-kala-terracotta' : 'text-kala-ink'
                    }`}
                  >
                    {item.label}
                    <span className="text-[10px] uppercase tracking-widest text-kala-muted">
                      {item.short}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>

      {!supported && (
        <p className="text-xs text-kala-muted">
          This browser cannot read text aloud — try Chrome or Safari for narration.
        </p>
      )}
      {failed && (
        <p className="text-xs text-kala-terracotta">
          Narration could not start — try another language, or check your device volume.
        </p>
      )}
    </div>
  );
}
