import BottomSheet from '@/components/BottomSheet';

const HEADINGS = {
  story: { eyebrow: 'Visual story', title: 'How this painting comes to life' },
  history: { eyebrow: 'Historical explanation', title: 'Where this tradition comes from' },
  journey: { eyebrow: 'Art creation journey', title: 'From raw material to finished story' },
};

/** The three guided tours launched from AR Explore. */
export default function ExploreSheet({ mode, art, onClose }) {
  if (!mode) return null;
  const heading = HEADINGS[mode];

  return (
    <BottomSheet open onClose={onClose} eyebrow={heading.eyebrow} title={heading.title}>
      {mode === 'story' && (
        <ol className="space-y-3">
          {art.visualStory.map((beat, index) => (
            <li key={index} className="flex gap-3 rounded-2xl bg-kala-peach/60 p-3">
              <span className="grid h-7 w-7 shrink-0 place-items-center rounded-full bg-kala-terracotta text-xs font-bold text-white">
                {index + 1}
              </span>
              <p className="text-sm leading-relaxed text-kala-ink/85">{beat}</p>
            </li>
          ))}
        </ol>
      )}

      {mode === 'history' && (
        <div className="space-y-3">
          <p className="rounded-2xl border-l-4 border-kala-gold bg-kala-peach/60 p-4 font-display text-sm italic leading-relaxed text-kala-maroon">
            {art.historicalNote}
          </p>
          {art.history.map((paragraph, index) => (
            <p key={index} className="text-sm leading-relaxed text-kala-ink/85">
              {paragraph}
            </p>
          ))}
        </div>
      )}

      {mode === 'journey' && (
        <ol className="relative ml-2 border-l border-kala-line pl-5">
          {art.creationSteps.map((step, index) => (
            <li key={step.title} className="relative pb-5 last:pb-0">
              <span className="absolute -left-[27px] top-1 grid h-3.5 w-3.5 place-items-center rounded-full border-2 border-kala-terracotta bg-kala-cream" />
              <div className="flex items-baseline justify-between gap-2">
                <h3 className="font-display text-base text-kala-maroon">{step.title}</h3>
                <span className="shrink-0 rounded-full bg-kala-peach px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-kala-maroon">
                  {step.time}
                </span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-kala-ink/80">{step.detail}</p>
            </li>
          ))}
        </ol>
      )}
    </BottomSheet>
  );
}
