/**
 * Mock artisan marketplace — demo listings only.
 * No orders or payments are taken in this prototype.
 */
import { ART_FORMS } from '@/data/artForms';

export const ARTISANS = [
  {
    id: 'sita-devi',
    name: 'Sita Devi',
    village: 'Jitwarpur, Bihar',
    artFormId: 'madhubani',
    craft: 'Madhubani',
    years: 42,
    priceRange: '₹1,800 – ₹12,000',
    piece: 'Kohbar with peacocks',
    story:
      'Sita learnt the kohbar from her mother-in-law at nineteen and has painted every wedding wall in her lane since. She switched to paper during the 1990s so her work could travel; her granddaughters now draw the borders.',
    image: ART_FORMS.madhubani.image,
  },
  {
    id: 'ramesh-vadu',
    name: 'Ramesh Vadu',
    village: 'Palghar, Maharashtra',
    artFormId: 'warli',
    craft: 'Warli',
    years: 28,
    priceRange: '₹2,400 – ₹9,500',
    piece: 'Tarpa dance, monsoon series',
    story:
      'Ramesh paints on canvas what his family once painted on mud. He grinds his own rice paste and still mixes it with water from the well behind the house, because the tap water makes the line break.',
    image: ART_FORMS.warli.image,
  },
  {
    id: 'bijay-mahapatra',
    name: 'Bijay Mahapatra',
    village: 'Raghurajpur, Odisha',
    artFormId: 'pattachitra',
    craft: 'Pattachitra',
    years: 35,
    priceRange: '₹3,500 – ₹18,000',
    piece: 'Jagannath trio on pattaya',
    story:
      'Bijay comes from a family of temple painters and keeps a stone in his courtyard for polishing finished cloth. He paints the border before the deity, a discipline he teaches to every visitor who asks.',
    image: ART_FORMS.pattachitra.image,
  },
  {
    id: 'lakshmi-devi',
    name: 'Lakshmi Devi',
    village: 'Srikalahasti, Andhra Pradesh',
    artFormId: 'kalamkari',
    craft: 'Kalamkari',
    years: 22,
    priceRange: '₹2,200 – ₹14,000',
    piece: 'Tree of life, madder & indigo',
    story:
      'Lakshmi draws freehand with a bamboo kalam and dyes in the open yard. The indigo vat behind her workshop has been alive for eleven years, fed every week like a member of the family.',
    image: ART_FORMS.kalamkari.image,
  },
];
