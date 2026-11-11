import { Brain, Compass, Flame, Lock, ScanLine, Sparkles } from 'lucide-react';

const ICONS = {
  brain: Brain,
  compass: Compass,
  flame: Flame,
  scan: ScanLine,
  sparkles: Sparkles,
};

/** Badge collection — earned badges are warm and gold, locked ones recede. */
export default function BadgeGrid({ badges }) {
  return (
    <div className="grid grid-cols-2 gap-2.5 sm:grid-cols-3">
      {badges.map((badge) => {
        const Icon = badge.earned ? ICONS[badge.icon] || Sparkles : Lock;

        return (
          <div
            key={badge.id}
            className={`rounded-2xl border p-3 transition-colors ${
              badge.earned
                ? 'border-kala-gold/70 bg-kala-cream'
                : 'border-kala-line bg-kala-cream/50'
            }`}
          >
            <span
              className={`grid h-9 w-9 place-items-center rounded-full ${
                badge.earned
                  ? 'bg-kala-peach text-kala-terracotta'
                  : 'bg-kala-line/50 text-kala-muted'
              }`}
            >
              <Icon className="h-4 w-4" aria-hidden="true" />
            </span>
            <p
              className={`mt-2 font-display text-sm leading-tight ${
                badge.earned ? 'text-kala-maroon' : 'text-kala-muted'
              }`}
            >
              {badge.name}
            </p>
            <p className="mt-0.5 text-[11px] leading-snug text-kala-muted">{badge.description}</p>
          </div>
        );
      })}
    </div>
  );
}
