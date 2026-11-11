import { Link } from 'react-router-dom';
import { ChevronRight, Heart } from 'lucide-react';

/** Bridge from discovery to the (mock) artisan marketplace. */
export default function SupportArtisansCard({ art }) {
  return (
    <Link
      to="/artisans"
      className="flex items-center gap-3 rounded-2xl border border-kala-gold/60 bg-kala-cream p-4 transition-colors hover:border-kala-gold"
    >
      <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-kala-peach text-kala-terracotta">
        <Heart className="h-5 w-5" aria-hidden="true" />
      </span>
      <div className="min-w-0">
        <p className="font-display text-base leading-tight text-kala-maroon">Support Artisans</p>
        <p className="mt-0.5 text-xs leading-snug text-kala-muted">
          Meet the families still painting {art.name} — buy a piece and keep the craft alive.
        </p>
      </div>
      <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-kala-muted" aria-hidden="true" />
    </Link>
  );
}
