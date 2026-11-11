import { Image } from '@/components/ui/image';

/** Artwork with pulsing hotspots — the simulated AR layer. */
export default function HotspotCanvas({ art, onSelect }) {
  return (
    <div className="relative overflow-hidden rounded-3xl border border-kala-line bg-kala-cream shadow-sm">
      <Image
        src={art.image}
        alt={`${art.name} painting with interactive points`}
        className="h-[380px] w-full object-cover sm:h-[480px]"
        fittingType="fill"
      />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-kala-ink/30 via-transparent to-kala-ink/10" />

      {art.hotspots.map((hotspot, index) => (
        <button
          key={hotspot.id}
          type="button"
          onClick={() => onSelect(hotspot)}
          aria-label={`Hotspot ${index + 1}: ${hotspot.label}`}
          style={{ left: `${hotspot.x}%`, top: `${hotspot.y}%` }}
          className="absolute -translate-x-1/2 -translate-y-1/2 outline-none focus-visible:ring-2 focus-visible:ring-kala-cream"
        >
          <span className="hotspot-ring absolute inset-0 rounded-full bg-kala-cream/70" aria-hidden="true" />
          <span className="relative grid h-8 w-8 place-items-center rounded-full border-2 border-kala-cream bg-kala-terracotta text-[11px] font-bold text-white shadow-lg transition-transform duration-200 hover:scale-110">
            {index + 1}
          </span>
        </button>
      ))}

      <p className="absolute bottom-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-kala-cream/95 px-3 py-1 text-[11px] font-semibold text-kala-maroon shadow-sm">
        Tap a glowing point
      </p>
    </div>
  );
}
