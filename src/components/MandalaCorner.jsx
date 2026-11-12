import { cn } from '@/lib/utils';

/**
 * Decorative Madhubani-style mandala used in the corners of sections.
 * Purely ornamental, so it stays out of the accessibility tree.
 */
export default function MandalaCorner({ className }) {
  const petals = Array.from({ length: 12 }, (_, i) => i);

  return (
    <svg
      viewBox="-100 -100 200 200"
      aria-hidden="true"
      className={cn('pointer-events-none absolute text-kala-gold', className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1"
    >
      {[30, 52, 74].map((r) => (
        <circle key={r} r={r} opacity="0.55" />
      ))}
      <circle r="94" strokeDasharray="2 7" opacity="0.7" />
      {petals.map((i) => (
        <g key={i} transform={`rotate(${i * 30})`} opacity="0.6">
          <ellipse cy="-41" rx="9" ry="19" />
          <path d="M0 -62 L5 -72 L0 -83 L-5 -72 Z" />
          <circle cy="-58" r="1.6" fill="currentColor" />
        </g>
      ))}
      <circle r="6" fill="currentColor" opacity="0.5" stroke="none" />
    </svg>
  );
}
