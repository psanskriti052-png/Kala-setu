export default function PaletteTab({ art }) {
  return (
    <div className="space-y-3">
      <p className="text-xs text-kala-muted">
        Colours pulled from your scan — each one made from a plant, mineral or earth.
      </p>

      {art.palette.map((colour) => (
        <div
          key={colour.hex}
          className="flex gap-3 rounded-2xl border border-kala-line bg-kala-cream p-3"
        >
          <span
            className="h-14 w-14 shrink-0 rounded-xl border border-black/10"
            style={{ backgroundColor: colour.hex }}
            aria-hidden="true"
          />
          <div className="min-w-0">
            <div className="flex flex-wrap items-baseline gap-2">
              <h3 className="font-display text-base text-kala-maroon">{colour.name}</h3>
              <span className="rounded-md bg-kala-peach px-1.5 py-0.5 font-mono text-[10px] uppercase tracking-wider text-kala-maroon">
                {colour.hex}
              </span>
            </div>
            <p className="mt-1 text-sm leading-relaxed text-kala-ink/80">{colour.meaning}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
