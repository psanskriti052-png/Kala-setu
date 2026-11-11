import { Frame, MapPin, Mountain, PenTool } from 'lucide-react';

const ROWS = [
  { key: 'style', label: 'Style', icon: Frame },
  { key: 'origin', label: 'Origin', icon: MapPin },
  { key: 'period', label: 'Period', icon: Mountain },
  { key: 'technique', label: 'Technique', icon: PenTool },
];

export default function IdentificationTab({ art }) {
  return (
    <div className="space-y-3">
      <div className="rounded-2xl border border-kala-line bg-kala-cream p-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-kala-terracotta">
          What the AI recognised
        </p>
        <p className="mt-2 font-display text-lg leading-snug text-kala-maroon">{art.aka}</p>
        <p className="mt-1 text-sm text-kala-ink/80">
          {art.era} · {art.medium}
        </p>
      </div>

      {ROWS.map(({ key, label, icon: Icon }) => (
        <div
          key={key}
          className="flex gap-3 rounded-2xl border border-kala-line bg-kala-cream p-4"
        >
          <span className="mt-0.5 grid h-8 w-8 shrink-0 place-items-center rounded-full bg-kala-peach text-kala-terracotta">
            <Icon className="h-4 w-4" aria-hidden="true" />
          </span>
          <div>
            <p className="text-[11px] font-semibold uppercase tracking-[0.16em] text-kala-muted">
              {label}
            </p>
            <p className="mt-1 text-sm leading-relaxed text-kala-ink">{art.identification[key]}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
