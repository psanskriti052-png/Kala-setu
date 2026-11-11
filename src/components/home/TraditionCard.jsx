import { Link } from 'react-router-dom';
import { Image } from '@/components/ui/image';

/** Compact card linking straight to a tradition's result screen. */
export default function TraditionCard({ art }) {
  return (
    <Link
      to={`/result/${art.id}`}
      className="group block overflow-hidden rounded-2xl border border-kala-line bg-kala-cream transition-all duration-300 hover:-translate-y-0.5 hover:border-kala-gold hover:shadow-md"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <Image
          src={art.image}
          alt={`${art.name} painting`}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          fittingType="fill"
          loading="lazy"
        />
      </div>
      <div className="px-3 py-3">
        <p className="font-display text-base leading-tight text-kala-maroon">{art.name}</p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.14em] text-kala-muted">{art.state}</p>
      </div>
    </Link>
  );
}
