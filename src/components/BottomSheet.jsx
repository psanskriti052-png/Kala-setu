import { useEffect } from 'react';
import { X } from 'lucide-react';

/** Mobile-first bottom sheet used by AR Explore and the artisan marketplace. */
export default function BottomSheet({ open, onClose, eyebrow, title, children }) {
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (event) => {
      if (event.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', onKey);
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = previous;
    };
  }, [open, onClose]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-end justify-center sm:items-center">
      <button
        type="button"
        aria-label="Close"
        onClick={onClose}
        className="absolute inset-0 h-full w-full cursor-default bg-kala-ink/50 backdrop-blur-[2px]"
      />
      <div
        role="dialog"
        aria-modal="true"
        aria-label={title}
        className="sheet-in relative max-h-[85dvh] w-full max-w-lg overflow-y-auto rounded-t-3xl border border-kala-line bg-kala-cream p-5 pb-8 shadow-2xl sm:rounded-3xl sm:pb-5"
      >
        <div className="mx-auto mb-4 h-1 w-10 rounded-full bg-kala-line sm:hidden" />
        <div className="flex items-start justify-between gap-4">
          <div>
            {eyebrow && (
              <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-kala-terracotta">
                {eyebrow}
              </p>
            )}
            <h2 className="mt-1 font-display text-xl leading-tight text-kala-maroon">{title}</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            className="grid h-9 w-9 shrink-0 place-items-center rounded-full border border-kala-line bg-kala-peach text-kala-maroon transition-colors hover:border-kala-gold"
          >
            <X className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
}
