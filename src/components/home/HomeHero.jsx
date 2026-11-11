import { Link } from 'react-router-dom';
import { ArrowRight, Flame, ImagePlus } from 'lucide-react';
import { Image } from '@/components/ui/image';
import Logo from '@/components/brand/Logo';
import MandalaCorner from '@/components/MandalaCorner';
import ActionButton from '@/components/ActionButton';
import { ART_FORMS } from '@/data/artForms';
import { useGamification } from '@/lib/gamification';

const HEADLINE = 'Every artwork holds a story. Discover yours.';

/** Each character gets its own span so the colour wave runs left to right. */
const LETTERS = HEADLINE.split('').map((char, index) => ({ char, index }));

const STRIP = [ART_FORMS.madhubani, ART_FORMS.warli, ART_FORMS.pattachitra];

export default function HomeHero() {
  const { points, streak } = useGamification();

  return (
    <section className="relative overflow-hidden" aria-label="Kala Setu intro">
      <MandalaCorner className="-left-24 -top-28 h-60 w-60 opacity-40 sm:h-72 sm:w-72" />
      <MandalaCorner className="-right-28 -top-20 h-64 w-64 opacity-25 sm:h-80 sm:w-80" />

      <div className="relative mx-auto w-full max-w-[1100px] px-5 pt-5 sm:pt-8">
        <div className="flex items-center justify-between gap-3">
          <Logo />
          <Link
            to="/profile"
            className="inline-flex items-center gap-1.5 rounded-full border border-kala-line bg-kala-cream px-3 py-1.5 text-xs font-semibold text-kala-maroon transition-colors hover:border-kala-gold"
          >
            <Flame className="h-3.5 w-3.5 text-kala-terracotta" aria-hidden="true" />
            {streak} day{streak === 1 ? '' : 's'}
            <span className="text-kala-muted">·</span>
            {points} pts
          </Link>
        </div>

        <div className="flex flex-col items-center pt-10 text-center sm:pt-14">
          <h1 className="rise max-w-[820px] font-display text-[clamp(2rem,7.4vw,4rem)] font-normal leading-[1.1] tracking-[-0.01em] text-kala-maroon">
            {LETTERS.map(({ char, index }) =>
              char === ' ' ? (
                ' '
              ) : (
                <span key={index} className="hero-letter" style={{ '--i': index }}>
                  {char}
                </span>
              )
            )}
          </h1>

          <p
            className="rise mt-4 max-w-[30rem] text-[0.95rem] leading-relaxed text-kala-ink/80 sm:text-base"
            style={{ animationDelay: '0.16s' }}
          >
            Kala Setu reads Indian folk art with AI — the symbols inside it, the history behind
            it, and the hands that still paint it.
          </p>

          <div
            className="rise mt-7 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row"
            style={{ animationDelay: '0.28s' }}
          >
            <ActionButton
              to="/scan"
              label="Scan Artwork"
              className="w-full justify-between sm:w-auto"
              icon={ArrowRight}
            />
            <Link
              to="/scan?mode=upload"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-kala-line bg-kala-cream px-5 py-3 text-sm font-semibold text-kala-maroon transition-colors hover:border-kala-gold sm:w-auto"
            >
              <ImagePlus className="h-4 w-4" aria-hidden="true" />
              Upload from gallery
            </Link>
          </div>
        </div>

        {/* Three-photo strip that bleeds off the bottom edge of the section. */}
        <div className="mt-10 grid h-[210px] grid-cols-3 gap-2.5 overflow-hidden sm:mt-12 sm:h-[300px] sm:gap-4">
          {STRIP.map((art, index) => (
            <figure
              key={art.id}
              className={`rise-photo m-0 min-w-0 ${index === 1 ? 'translate-y-7 sm:translate-y-10' : ''}`}
              style={{ animationDelay: `${0.42 + index * 0.1}s` }}
            >
              <div className="h-[calc(100%+3rem)] overflow-hidden rounded-t-2xl bg-kala-line">
                <Image
                  src={art.image}
                  alt={`${art.name} painting from ${art.state}`}
                  className="h-full w-full object-cover"
                  fittingType="fill"
                  loading="lazy"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
