/**
 * Kala Setu — AI artwork analysis.
 *
 * ─────────────────────────────────────────────────────────────
 *  THIS IS THE ONE PLACE TO SWAP IN GEMINI VISION.
 *  Every screen talks to `analyzeArtwork(image)` and nothing else,
 *  so replacing the mock below with a real call needs no UI change.
 * ─────────────────────────────────────────────────────────────
 *
 *  image: { file?: File, dataUrl?: string, hint?: string }
 *  returns: { artFormId, confidence, palette, detectedElements, source }
 *
 *  Real implementation (sketch) — call Gemini Vision from a backend
 *  function so the API key never reaches the browser:
 *
 *    export async function analyzeArtwork(image) {
 *      const base64 = await toBase64(image.file);
 *      const res = await base44.functions.invoke('analyzeArtwork', {
 *        imageBase64: base64,
 *        mimeType: image.file.type,
 *      });
 *      return res.data; // same shape as the mock below
 *    }
 *
 *  The backend function then sends the image to
 *  gemini-2.0-flash (generateContent, inlineData) with a prompt that
 *  must answer with the four art-form ids used here.
 */

import { ART_FORMS } from '@/data/artForms';

const MOCK_ANALYSIS_DELAY = 2000;

/** Read a picked file into a data URL so we can preview it instantly. */
export function readImageFile(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

/**
 * Demo analysis: always recognises Madhubani (the showcase artwork),
 * unless a specific form is hinted (used by the "try a sample" buttons).
 */
export async function analyzeArtwork(image = {}) {
  await new Promise((resolve) => setTimeout(resolve, MOCK_ANALYSIS_DELAY));

  const hinted = image.hint && ART_FORMS[image.hint] ? image.hint : 'madhubani';
  const art = ART_FORMS[hinted];

  return {
    artFormId: art.id,
    confidence: art.confidence,
    palette: art.palette,
    detectedElements: art.hotspots.map((hotspot) => hotspot.label),
    source: 'mock',
  };
}
