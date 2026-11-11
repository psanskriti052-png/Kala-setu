import { Gift, Target } from 'lucide-react';

export default function DailyQuestCard({ quest }) {
  const percent = Math.round((quest.progress / quest.target) * 100);

  return (
    <div className="rounded-3xl border border-kala-gold/70 bg-gradient-to-br from-kala-cream to-kala-peach p-5">
      <div className="flex items-start justify-between gap-3">
        <div>
          <p className="flex items-center gap-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-kala-terracotta">
            <Target className="h-3.5 w-3.5" aria-hidden="true" />
            {quest.title}
          </p>
          <h3 className="mt-1.5 font-display text-lg leading-tight text-kala-maroon">
            {quest.description}
          </h3>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1 rounded-full border border-kala-gold bg-kala-cream px-2.5 py-1 text-[11px] font-bold text-kala-maroon">
          <Gift className="h-3 w-3 text-kala-terracotta" aria-hidden="true" />
          +{quest.reward}
        </span>
      </div>

      <div className="mt-4">
        <div className="h-2 overflow-hidden rounded-full bg-white/70">
          <div
            className="h-full rounded-full bg-kala-terracotta transition-all duration-500"
            style={{ width: `${percent}%` }}
          />
        </div>
        <p className="mt-2 text-xs font-medium text-kala-maroon">
          {quest.complete
            ? 'Quest complete — reward added to your points.'
            : `${quest.progress} of ${quest.target} done today`}
        </p>
      </div>
    </div>
  );
}
