import { ArrowUpRight } from 'lucide-react';

/** Points, level and progress toward the next level. */
export default function LevelCard({ points, level, streak, scans }) {
  return (
    <div className="rounded-3xl border border-kala-gold/70 bg-gradient-to-br from-kala-cream to-kala-peach p-5">
      <div className="flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-kala-terracotta">
            Level {level.level}
          </p>
          <h2 className="mt-1 font-display text-2xl leading-tight text-kala-maroon">
            {level.name}
          </h2>
        </div>
        <div className="text-right">
          <p className="font-display text-3xl leading-none text-kala-maroon">{points}</p>
          <p className="text-[11px] uppercase tracking-widest text-kala-muted">points</p>
        </div>
      </div>

      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/70">
        <div
          className="h-full rounded-full bg-kala-terracotta transition-all duration-500"
          style={{ width: `${Math.max(4, level.progress * 100)}%` }}
        />
      </div>
      <p className="mt-2 flex items-center gap-1 text-[11px] text-kala-maroon">
        {level.pointsToNext > 0
          ? `${level.pointsToNext} points to ${level.nextName}`
          : 'Highest level reached'}
        <ArrowUpRight className="h-3 w-3" aria-hidden="true" />
      </p>

      <div className="mt-4 grid grid-cols-2 gap-2">
        <div className="rounded-xl bg-kala-cream/80 px-3 py-2">
          <p className="font-display text-lg leading-none text-kala-maroon">{streak}</p>
          <p className="mt-1 text-[11px] uppercase tracking-wider text-kala-muted">day streak</p>
        </div>
        <div className="rounded-xl bg-kala-cream/80 px-3 py-2">
          <p className="font-display text-lg leading-none text-kala-maroon">{scans}</p>
          <p className="mt-1 text-[11px] uppercase tracking-wider text-kala-muted">artworks found</p>
        </div>
      </div>
    </div>
  );
}
