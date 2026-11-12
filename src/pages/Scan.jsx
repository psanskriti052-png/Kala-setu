import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Camera, ImagePlus, ScanLine, Sparkles } from 'lucide-react';
import ActionButton from '@/components/ActionButton';
import MandalaCorner from '@/components/MandalaCorner';
import { Image } from '@/components/ui/image';
import { analyzeArtwork, readImageFile } from '@/lib/analyzeArtwork';
import { ART_FORM_LIST } from '@/data/artForms';
import { useGamification } from '@/lib/gamification';

const wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Scan() {
  const navigate = useNavigate();
  const { recordScan } = useGamification();
  const cameraInput = useRef(null);
  const galleryInput = useRef(null);
  const [stage, setStage] = useState('idle'); // idle → scanning → analysing
  const [preview, setPreview] = useState(null);
  const [uploadFirst] = useState(
    () => new URLSearchParams(window.location.search).get('mode') === 'upload'
  );

  const busy = stage !== 'idle';

  const runAnalysis = async ({ file, dataUrl, hint, image }) => {
    setPreview(dataUrl || image);
    setStage('scanning');
    await wait(1500);
    setStage('analysing');

    const result = await analyzeArtwork({ file, dataUrl, hint });
    recordScan({ artFormId: result.artFormId, confidence: result.confidence });
    navigate(`/result/${result.artFormId}`);
  };

  const handleFile = async (event) => {
    const file = event.target.files?.[0];
    event.target.value = '';
    if (!file) return;
    const dataUrl = await readImageFile(file);
    runAnalysis({ file, dataUrl });
  };

  const openCamera = () => cameraInput.current?.click();
  const openGallery = () => galleryInput.current?.click();

  return (
    <div className="relative px-5 pt-6">
      <MandalaCorner className="-right-24 -top-20 h-52 w-52 opacity-25" />

      <header className="relative">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-kala-terracotta">
          Step 1 · Scan
        </p>
        <h1 className="mt-2 font-display text-3xl leading-tight text-kala-maroon">
          Frame the artwork
        </h1>
        <p className="mt-2 text-sm leading-relaxed text-kala-ink/80">
          Fill the frame with the painting. Our model reads the line work, motifs and colours in
          about two seconds.
        </p>
      </header>

      <div className="relative mt-6 aspect-[4/5] overflow-hidden rounded-3xl border-2 border-dashed border-kala-gold/70 bg-kala-cream">
        {preview ? (
          <>
            <Image
              src={preview}
              alt="Artwork being scanned"
              className="h-full w-full object-cover"
              fittingType="fill"
            />
            <div className="absolute inset-0 bg-kala-ink/20" />

            {stage === 'scanning' && (
              <>
                <div className="scan-line absolute inset-x-3 h-px bg-kala-terracotta shadow-[0_0_18px_4px_rgba(181,57,47,0.55)]" />
                <div className="absolute inset-0 border-[3px] border-kala-terracotta/80" />
                <p className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-kala-cream/95 px-3 py-1.5 text-xs font-semibold text-kala-maroon">
                  Reading motifs and line work…
                </p>
              </>
            )}

            {stage === 'analysing' && (
              <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-kala-cream/95 p-4 shadow-lg">
                <p className="flex items-center gap-2 text-sm font-semibold text-kala-maroon">
                  <Sparkles className="h-4 w-4 text-kala-terracotta" aria-hidden="true" />
                  AI analysing…
                </p>
                <div className="mt-3 space-y-2">
                  <div className="shimmer h-2.5 w-2/3 rounded-full bg-kala-line" />
                  <div className="shimmer h-2.5 w-full rounded-full bg-kala-line" />
                  <div className="shimmer h-2.5 w-1/2 rounded-full bg-kala-line" />
                </div>
                <p className="mt-3 text-[11px] text-kala-muted">
                  Matching against 4 traditions · 18 motifs · 25 pigments
                </p>
              </div>
            )}
          </>
        ) : (
          <div className="flex h-full flex-col items-center justify-center px-6 text-center">
            <span className="grid h-16 w-16 place-items-center rounded-full border border-kala-gold/60 bg-kala-peach text-kala-terracotta">
              <ScanLine className="h-7 w-7" aria-hidden="true" />
            </span>
            <p className="mt-4 font-display text-lg text-kala-maroon">Point at a painting</p>
            <p className="mt-1 text-sm text-kala-muted">
              Use the camera, or pick a photo from your gallery.
            </p>
            <span className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-kala-peach px-3 py-1 text-[11px] font-medium text-kala-maroon">
              <Sparkles className="h-3 w-3" aria-hidden="true" />
              Works offline in this demo
            </span>
          </div>
        )}
      </div>

      <input
        ref={cameraInput}
        type="file"
        accept="image/*"
        capture="environment"
        className="hidden"
        onChange={handleFile}
      />
      <input
        ref={galleryInput}
        type="file"
        accept="image/*"
        className="hidden"
        onChange={handleFile}
      />

      <div className="mt-5 flex flex-col gap-2.5 sm:flex-row-reverse">
        <ActionButton
          label={uploadFirst ? 'Choose from gallery' : 'Open camera'}
          icon={uploadFirst ? ImagePlus : Camera}
          onClick={uploadFirst ? openGallery : openCamera}
          disabled={busy}
          className="w-full justify-between sm:w-auto"
        />
        <button
          type="button"
          onClick={uploadFirst ? openCamera : openGallery}
          disabled={busy}
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-kala-line bg-kala-cream px-5 py-3 text-sm font-semibold text-kala-maroon transition-colors hover:border-kala-gold disabled:opacity-60 sm:w-auto"
        >
          {uploadFirst ? <Camera className="h-4 w-4" aria-hidden="true" /> : <ImagePlus className="h-4 w-4" aria-hidden="true" />}
          {uploadFirst ? 'Open camera' : 'Upload from gallery'}
        </button>
      </div>

      <section className="mt-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-kala-muted">
          No artwork handy? Try a sample
        </p>
        <div className="mt-3 grid grid-cols-4 gap-2">
          {ART_FORM_LIST.map((art) => (
            <button
              key={art.id}
              type="button"
              disabled={busy}
              onClick={() => runAnalysis({ hint: art.id, image: art.image })}
              className="group overflow-hidden rounded-xl border border-kala-line bg-kala-cream text-left transition-colors hover:border-kala-gold disabled:opacity-50"
            >
              <Image
                src={art.image}
                alt={art.name}
                className="h-16 w-full object-cover"
                fittingType="fill"
                loading="lazy"
              />
              <span className="block px-1.5 py-1 text-[10px] font-semibold text-kala-maroon">
                {art.name}
              </span>
            </button>
          ))}
        </div>
      </section>

      <p className="mt-8 text-center text-[11px] text-kala-muted">
        Images are analysed locally in this prototype — nothing leaves your device.
      </p>
    </div>
  );
}
