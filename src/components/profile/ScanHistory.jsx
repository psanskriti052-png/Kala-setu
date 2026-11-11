import { Link } from 'react-router-dom';
import { ChevronRight, ScanLine } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { getArtForm } from '@/data/artForms';

export default function ScanHistory({ scans }) {
  if (scans.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-kala-gold/60 bg-kala-cream/60 p-6 text-center">
        <span className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-kala-peach text-kala-terracotta">
          <ScanLine className="h-5 w-5" aria-hidden="true" />
        </span>
        <p className="mt-3 font-display text-base text-kala-maroon">No scans yet</p>
        <p className="mt-1 text-sm text-kala-muted">
          Your discoveries will collect here, one artwork at a time.
        </p>
        <Link
          to="/scan"
          className="mt-3 inline-flex rounded-xl bg-kala-terracotta px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-kala-maroon"
        >
          Scan your first artwork
        </Link>
      </div>
    );
  }

  return (
    <ul className="space-y-2.5">
      {scans.map((scan) => {
        const art = getArtForm(scan.artFormId);
        const date = new Date(scan.date);

        return (
          <li key={scan.id}>
            <Link
              to={`/result/${art.id}`}
              className="flex items-center gap-3 rounded-2xl border border-kala-line bg-kala-cream p-2.5 transition-colors hover:border-kala-gold"
            >
              <Image
                src={art.image}
                alt=""
                className="h-14 w-14 shrink-0 rounded-xl object-cover"
                fittingType="fill"
                loading="lazy"
              />
              <div className="min-w-0">
                <p className="font-display text-base leading-tight text-kala-maroon">{art.name}</p>
                <p className="mt-0.5 text-xs text-kala-muted">
                  {art.state} · {scan.confidence}% match ·{' '}
                  {date.toLocaleDateString('en-IN', { day: 'numeric', month: 'short' })}
                </p>
              </div>
              <ChevronRight className="ml-auto h-4 w-4 shrink-0 text-kala-muted" aria-hidden="true" />
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
