import SymbolIcon from '@/components/SymbolIcon';

export default function SymbolsTab({ art }) {
  return (
    <div className="space-y-3">
      <p className="text-xs text-kala-muted">
        Five motifs the artist used — and what each one is asking for.
      </p>

      {art.symbols.map((symbol) => (
        <article
          key={symbol.name}
          className="flex gap-3 rounded-2xl border border-kala-line bg-kala-cream p-4"
        >
          <span className="grid h-10 w-10 shrink-0 place-items-center rounded-full border border-kala-gold/60 bg-kala-peach text-kala-terracotta">
            <SymbolIcon name={symbol.icon} className="h-5 w-5" />
          </span>
          <div>
            <h3 className="font-display text-base text-kala-maroon">{symbol.name}</h3>
            <p className="mt-1 text-sm leading-relaxed text-kala-ink/80">{symbol.meaning}</p>
          </div>
        </article>
      ))}
    </div>
  );
}
