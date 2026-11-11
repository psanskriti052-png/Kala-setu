import { BadgeCheck } from 'lucide-react';
import { Image } from '@/components/ui/image';
import ListenButton from '@/components/result/ListenButton';

/** Identified artwork with the confidence badge and narration controls. */
export default function ResultHeader({ art }) {
  return (
    <header>
      <div className="relative overflow-hidden rounded-3xl border border-kala-line bg-kala-cream shadow-sm">
        <Image
          src={art.image}
          alt={`${art.name} painting identified from your scan`}
          className="h-56 w-full object-cover sm:h-80"
          fittingType="fill"
        />
        <span className="absolute right-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-kala-gold bg-kala-cream/95 px-2.5 py-1 text-[11px] font-bold text-kala-maroon shadow-sm">
          <BadgeCheck className="h-3.5 w-3.5 text-kala-terracotta" aria-hidden="true" />
          {art.confidence}% match
        </span>
      </div>

      <div className="mt-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-kala-terracotta">
          Artwork identified
        </p>
        <h1 className="mt-1 font-display text-3xl leading-tight text-kala-maroon">{art.name}</h1>
        <p className="mt-1 text-sm text-kala-muted">
          {art.aka} · {art.originLine}
        </p>
        <p className="mt-3 text-sm leading-relaxed text-kala-ink/85">{art.shortDescription}</p>
        <div className="mt-4">
          <ListenButton audio={art.audio} />
        </div>
      </div>
    </header>
  );
}
