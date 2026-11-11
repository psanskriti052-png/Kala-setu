export default function HistoryTab({ art }) {
  return (
    <div className="space-y-4">
      <div className="flex flex-wrap gap-2">
        <span className="rounded-full border border-kala-line bg-kala-cream px-3 py-1 text-xs font-medium text-kala-maroon">
          {art.era}
        </span>
        <span className="rounded-full border border-kala-line bg-kala-cream px-3 py-1 text-xs font-medium text-kala-maroon">
          GI protected
        </span>
      </div>

      {art.history.map((paragraph, index) => (
        <p key={index} className="text-sm leading-relaxed text-kala-ink/85">
          {index === 0 ? (
            <>
              <span className="float-left mr-2 mt-1 font-display text-4xl leading-none text-kala-terracotta">
                {paragraph.charAt(0)}
              </span>
              {paragraph.slice(1)}
            </>
          ) : (
            paragraph
          )}
        </p>
      ))}

      <blockquote className="rounded-2xl border-l-4 border-kala-gold bg-kala-cream p-4">
        <p className="font-display text-sm italic leading-relaxed text-kala-maroon">
          {art.historicalNote}
        </p>
      </blockquote>
    </div>
  );
}
