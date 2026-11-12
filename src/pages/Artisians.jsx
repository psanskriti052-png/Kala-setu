import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Info } from 'lucide-react';
import ArtisanCard from '@/components/artisans/ArtisanCard';
import BottomSheet from '@/components/BottomSheet';
import MandalaCorner from '@/components/MandalaCorner';
import { Image } from '@/components/ui/image';
import { ARTISANS } from '@/data/artisans';

export default function Artisans() {
  const [active, setActive] = useState(null);

  return (
    <div className="relative px-5 pt-5">
      <MandalaCorner className="-right-24 -top-16 h-52 w-52 opacity-20" />

      <Link
        to="/result/madhubani"
        className="relative inline-flex items-center gap-1.5 text-sm font-medium text-kala-maroon transition-colors hover:text-kala-terracotta"
      >
        <ArrowLeft className="h-4 w-4" aria-hidden="true" />
        Back
      </Link>

      <header className="relative mt-4">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-kala-terracotta">
          Support Artisans
        </p>
        <h1 className="mt-2 font-display text-3xl leading-tight text-kala-maroon">
          The hands behind the paintings
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-kala-ink/80">
          Every tradition on Kala Setu is still being painted today. These are four of the families
          keeping it alive.
        </p>
      </header>

      <p className="mt-4 flex items-start gap-2 rounded-2xl border border-kala-gold/60 bg-kala-cream p-3 text-[11px] leading-relaxed text-kala-maroon">
        <Info className="mt-0.5 h-3.5 w-3.5 shrink-0 text-kala-terracotta" aria-hidden="true" />
        Prototype marketplace — listings and prices are demo data and no orders or payments are
        processed here.
      </p>

      <div className="mt-4 space-y-2.5">
        {ARTISANS.map((artisan) => (
          <ArtisanCard key={artisan.id} artisan={artisan} onSelect={setActive} />
        ))}
      </div>

      <p className="mt-8 text-center font-display text-sm tracking-wide text-kala-maroon/70">
        Scan. Discover. Experience. Preserve
      </p>

      <BottomSheet
        open={Boolean(active)}
        onClose={() => setActive(null)}
        eyebrow={active ? `${active.craft} · ${active.years} years` : ''}
        title={active?.name || ''}
      >
        {active && (
          <>
            <Image
              src={active.image}
              alt={active.piece}
              className="h-40 w-full rounded-2xl object-cover"
              fittingType="fill"
            />
            <p className="mt-3 text-sm font-semibold text-kala-maroon">{active.piece}</p>
            <p className="mt-1 text-xs text-kala-muted">{active.priceRange}</p>
            <p className="mt-3 text-sm leading-relaxed text-kala-ink/85">{active.story}</p>
            <p className="mt-4 rounded-xl bg-kala-peach/70 px-3 py-2 text-[11px] leading-relaxed text-kala-maroon">
              Enquiries and payments are not enabled in this prototype. In the full app this is
              where you would commission a piece directly from {active.name.split(' ')[0]}.
            </p>
          </>
        )}
      </BottomSheet>
    </div>
  );
}
