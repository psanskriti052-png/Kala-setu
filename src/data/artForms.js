/**
 * Mock cultural data for Kala Setu.
 *
 * Four Indian folk traditions, each with the content every screen needs:
 * identification, history, symbols, colour palette, AR hotspots, the
 * creation journey, a visual story and 4-language narration text.
 *
 * Everything here is demo data — swap it for a CMS or API later without
 * touching the screens.
 */

export const LANGUAGES = [
  { code: 'en', label: 'English', short: 'EN', speech: 'en-IN' },
  { code: 'hi', label: 'हिन्दी', short: 'HI', speech: 'hi-IN' },
  { code: 'mr', label: 'मराठी', short: 'MR', speech: 'mr-IN' },
  { code: 'bn', label: 'বাংলা', short: 'BN', speech: 'bn-IN' },
];

export const ART_FORMS = {
  madhubani: {
    id: 'madhubani',
    name: 'Madhubani',
    aka: 'Mithila Painting',
    state: 'Bihar',
    originLine: 'Mithila region, Bihar',
    confidence: 96,
    era: '12th century → today',
    medium: 'Handmade paper, natural pigments, bamboo nib',
    image:
      'https://media.base44.com/images/public/6aece89dff1257ebb792018c/02b10c2ea_generated_image.png',
    shortDescription:
      'A marriage painting from Mithila — peacocks, fish and lotus, drawn in double lines on a wall of mud.',
    identification: {
      style:
        'A household folk painting of the Mithila region, made by women and passed from mother to daughter.',
      origin:
        'Madhubani, Darbhanga, Sitamarhi and Madhepura districts of Bihar, and the Mithila belt of Nepal.',
      period:
        'Wall traditions traced back to the Ramayana era; painted on paper and cloth since the 1930s.',
      technique:
        'Bamboo-nib and matchstick outlines drawn twice with a deliberate gap, filled with cross-hatching so no space is left empty. Colours come from turmeric, indigo, soot, leaf sap and rice paste.',
    },
    history: [
      'Madhubani began as aripana — rice-paste drawings made on freshly plastered mud walls by the women of Mithila for weddings, births and festivals. The paintings were never sold. They blessed a room, and were whitewashed over once the ceremony ended.',
      'Tradition holds that King Janaka commissioned the first Mithila paintings for his daughter Sita’s wedding to Rama. Whatever its true age, the art stayed a household ritual until 1934, when a devastating earthquake cracked open the painted walls of Mithila homes and a visiting British officer, William G. Archer, photographed them for the world.',
      'In 1966 a severe drought pushed the women of Mithila to paint on paper for income, encouraged by Pupul Jayakar and the All India Handicrafts Board. Madhubani received a Geographical Indication tag in 2007, and today supports thousands of women artists across the region.',
    ],
    historicalNote:
      'Every Madhubani wall was a calendar of the household: a wedding chamber (kohbar) carried fertility symbols, a birth room carried protective ones. Reading the motifs is reading the occasion.',
    symbols: [
      {
        name: 'Peacock',
        icon: 'feather',
        meaning:
          'Love, fidelity and the monsoon. A pair of peacocks in the marriage chamber blesses the couple with fertility and the promise of rain.',
      },
      {
        name: 'Fish',
        icon: 'fish',
        meaning:
          'Prosperity and quick abundance. Fish multiply fast, so they crowd wedding paintings as a wish for many children and full granaries.',
      },
      {
        name: 'Lotus',
        icon: 'flower',
        meaning:
          'Purity rising out of mud, and the seat of creation. The lotus pond stands for the universe itself, with Lakshmi at its centre.',
      },
      {
        name: 'Bamboo',
        icon: 'leaf',
        meaning:
          'Resilience and union — the grove where lovers meet, and the stalk that bends without breaking.',
      },
      {
        name: 'Serpent',
        icon: 'shield',
        meaning:
          'The nag guards water and thresholds. Paired snakes at the door protect the household from harm.',
      },
    ],
    palette: [
      {
        hex: '#8B2E1F',
        name: 'Geru red',
        meaning:
          'Ground ochre from the earth — the base colour of the marriage wall and a mark of auspiciousness.',
      },
      {
        hex: '#1C1613',
        name: 'Soot black',
        meaning:
          'Lamp soot mixed with gum, used for the double outline that holds every form together.',
      },
      {
        hex: '#D9A441',
        name: 'Turmeric yellow',
        meaning: 'Sunlight and blessing — turmeric is the colour of the harvest and of welcome.',
      },
      {
        hex: '#4A6B3A',
        name: 'Leaf green',
        meaning: 'The mango grove and the living world that surrounds the household.',
      },
      {
        hex: '#FFF6E9',
        name: 'Rice white',
        meaning: 'Rice paste, the first layer of every Mithila wall and the ground of the page.',
      },
    ],
    hotspots: [
      {
        id: 'peacocks',
        x: 50,
        y: 20,
        label: 'Peacock pair',
        story:
          'Two peacocks face each other above the lotus. Placed in the kohbar, the wedding chamber, they ask for love that lasts and for rain that arrives on time.',
      },
      {
        id: 'double-line',
        x: 27,
        y: 46,
        label: 'Double outline',
        story:
          'Every shape is drawn twice with a small gap between the lines. The gap is then filled with tiny strokes — the signature rhythm of Mithila painting.',
      },
      {
        id: 'bamboo',
        x: 80,
        y: 40,
        label: 'Bamboo grove',
        story:
          'The bamboo stands for resilience. It is also the lover’s grove — a place of meeting in Mithila songs, and a symbol of fertility.',
      },
      {
        id: 'lotus',
        x: 50,
        y: 66,
        label: 'Lotus pond',
        story:
          'The lotus is the centre of the universe, the seat of Lakshmi and of creation itself. Water below, flower above: the world in one motif.',
      },
      {
        id: 'border',
        x: 16,
        y: 84,
        label: 'Fish border',
        story:
          'A border of fish runs along the base of the painting. Fish multiply quickly, so they carry a wish for abundance and many children.',
      },
    ],
    creationSteps: [
      {
        title: 'Grind the colours',
        detail:
          'Turmeric, indigo, soot, rice and flower sap are ground by hand and bound with goat’s milk or tree gum.',
        time: 'Day 1',
      },
      {
        title: 'Prime the surface',
        detail:
          'Handmade paper or cloth is coated with a thin paste of chalk and cow dung, then burnished smooth with a stone.',
        time: 'Day 1',
      },
      {
        title: 'Draw the double outline',
        detail:
          'The artist draws with a bamboo nib — every figure outlined twice, with a deliberate gap left between the lines.',
        time: 'Day 2',
      },
      {
        title: 'Fill the gaps',
        detail:
          'The space between the two lines is filled with cross-hatching, dots and tiny flowers, so no part of the page stays empty.',
        time: 'Day 2–3',
      },
      {
        title: 'Lay the flat colour',
        detail:
          'Natural pigment is brushed inside the outline. No shading, no perspective — only flat, saturated colour.',
        time: 'Day 3',
      },
      {
        title: 'Sign the story',
        detail:
          'The artist writes her name and village into a corner, and the painting dries in the sun for two days.',
        time: 'Day 4',
      },
    ],
    visualStory: [
      'A wedding chamber in Mithila, freshly plastered. The women of the house gather with bowls of rice paste and soot.',
      'The kohbar begins: a lotus pond at the centre, the universe the couple will build together.',
      'Two peacocks arrive above the pond — a wish for love, and for rain that will not fail.',
      'The border fills with fish, the corners with bamboo. Nothing is left empty, because emptiness invites misfortune.',
      'When the bride enters, the wall is already blessing her. A week later, it will be whitewashed again.',
    ],
    audio: {
      en: 'This is a Madhubani painting, also known as Mithila art, from the Mithila region of Bihar. Women have painted these intricate patterns on mud walls for centuries to bless weddings and harvests. The peacock stands for love and the monsoon, while the lotus speaks of purity and creation.',
      hi: 'यह मधुबनी चित्रकला है, जिसे मिथिला कला भी कहा जाता है और यह बिहार के मिथिला क्षेत्र से आती है। सदियों से महिलाएँ इन बारीक चित्रों को मिट्टी की दीवारों पर बनाकर विवाह और फ़सल के अवसरों पर आशीर्वाद माँगती आई हैं। मोर प्रेम और वर्षा का प्रतीक है, और कमल शुद्धता तथा सृष्टि का।',
      mr: 'हे मधुबनी चित्रकला आहे, जिला मिथिला कला असेही म्हणतात, आणि ती बिहारच्या मिथिला प्रदेशातून येते. शतकानुशतके स्त्रियांनी या सूक्ष्म चित्रांना मातीच्या भिंतींवर रेखाटून विवाह आणि सुगीच्या वेळी आशीर्वाद मागितले आहेत. मोर प्रेम आणि पावसाचे प्रतीक आहे, तर कमळ शुद्धता आणि निर्मितीचे.',
      bn: 'এটি মধুবনী চিত্রকলা, যাকে মিথিলা শিল্পও বলা হয়, এবং এটি বিহারের মিথিলা অঞ্চলের। শতাব্দীর পর শতাব্দী ধরে নারীরা মাটির দেয়ালে এই সূক্ষ্ম নকশা এঁকে বিয়ে ও ফসলের সময় আশীর্বাদ চেয়েছেন। ময়ূর প্রেম ও বর্ষার প্রতীক, আর পদ্ম শুদ্ধতা ও সৃষ্টির।',
    },
    quiz: [
      {
        question: 'In Madhubani painting, what does a pair of peacocks usually wish a newly married couple?',
        options: ['Rain and fertility', 'A safe sea voyage', 'Victory in war', 'A house of gold'],
        answer: 0,
        explanation:
          'Peacocks carry the promise of the monsoon and of fertility — a blessing on the marriage and on the fields.',
      },
      {
        question: 'Which pigment gives Madhubani its white ground?',
        options: ['Chalk', 'Rice paste', 'Conch shell', 'Lime'],
        answer: 1,
        explanation:
          'Rice paste is the first layer of every Mithila wall — the ground the whole painting is built on.',
      },
    ],
  },

  warli: {
    id: 'warli',
    name: 'Warli',
    aka: 'Warli Tribal Art',
    state: 'Maharashtra',
    originLine: 'Palghar & Thane, Maharashtra',
    confidence: 93,
    era: 'Traced to ~2,500 years',
    medium: 'Rice paste on red-brown mud wall',
    image:
      'https://media.base44.com/images/public/6aece89dff1257ebb792018c/343d92140_generated_image.png',
    shortDescription:
      'White rice paste on mud, built only from circles, triangles and squares — the oldest pictographic language in India.',
    identification: {
      style:
        'A tribal pictorial language of circles, triangles and squares, painted by the Warli people with rice paste.',
      origin: 'The hills of Palghar and Thane districts, north of Mumbai, Maharashtra.',
      period:
        'The same figure vocabulary appears in Western Ghats rock shelters dated to around 2,500 years ago.',
      technique:
        'A bamboo stick is chewed at the end to make a brush and dipped in rice paste. The wall is first coated with sandh — red-brown earth mixed with cow dung and water.',
    },
    history: [
      'The Warli people live in the hills of the Western Ghats, north of Mumbai. Their paintings are made by women on the inner walls of the house, on a ground of red-brown mud called sandh.',
      'There are no faces and no ornament: a circle is the sun or the moon, a triangle a mountain or a tree, a square a sacred plot of land. A painting begins with the chaukat — the square — and grows outward into scenes of planting, hunting, or the tarpa dance.',
      'Warli stepped off the village wall in the 1970s, when Jivya Soma Mashe began painting on paper and canvas for the market; he received the Padma Shri in 2011. The form was granted a Geographical Indication tag in 2014.',
    ],
    historicalNote:
      'Warli is not decoration but record: a painting on the wall told the village who had married, what had been harvested, and which spirits had been thanked that year.',
    symbols: [
      {
        name: 'Tarpa dance',
        icon: 'music',
        meaning:
          'A spiral of dancers around the tarpa musician. It stands for harmony — the community circling together in thanks for the harvest.',
      },
      {
        name: 'Mother Goddess',
        icon: 'flower',
        meaning:
          'Palaghata, drawn inside a square, is the earth mother. She is invoked for fertility before sowing and after the birth of a child.',
      },
      {
        name: 'Tree',
        icon: 'leaf',
        meaning:
          'The forest is kin, not property. A tree in a Warli painting holds the village’s claim to the land it lives from.',
      },
      {
        name: 'Sun & Moon',
        icon: 'sun',
        meaning:
          'The circle is the oldest form: sun by day, moon by night. A pair of them frames the world of the painting.',
      },
      {
        name: 'Chaukat',
        icon: 'shield',
        meaning:
          'The square is a sacred enclosure — the plot where the goddess sits and where nothing harmful may enter.',
      },
    ],
    palette: [
      {
        hex: '#7A5236',
        name: 'Sandh brown',
        meaning: 'Earth and cow dung — the living wall that every Warli painting is drawn on.',
      },
      {
        hex: '#F0E9DC',
        name: 'Rice white',
        meaning: 'Soaked rice ground to a paste: the only pigment, and the whole vocabulary of the form.',
      },
      {
        hex: '#2A2320',
        name: 'Charcoal',
        meaning: 'The smoked dark of the village kitchen, used to weight shapes at the centre of a scene.',
      },
      {
        hex: '#B0703C',
        name: 'Ochre',
        meaning: 'The warm soil of the Ghats in summer, visible beneath the white line work.',
      },
      {
        hex: '#8A3B2A',
        name: 'Deep red earth',
        meaning: 'Geru, used in festival paintings and on the door frames of the house.',
      },
    ],
    hotspots: [
      {
        id: 'tarpa',
        x: 50,
        y: 52,
        label: 'Tarpa circle',
        story:
          'The dancers spiral inward toward the musician playing the tarpa, a gourd pipe. Nobody leads and nobody follows — the circle is the community.',
      },
      {
        id: 'musician',
        x: 50,
        y: 50,
        label: 'The musician',
        story:
          'At the centre stands the tarpa player. The dance cannot begin without him: sound is what turns a crowd into a ceremony.',
      },
      {
        id: 'square',
        x: 22,
        y: 26,
        label: 'The chaukat',
        story:
          'A square is drawn first and holds the goddess Palaghata. It is the sacred plot — the one place in the painting where nothing harmful may enter.',
      },
      {
        id: 'trees',
        x: 78,
        y: 30,
        label: 'Forest edge',
        story:
          'Triangles stacked into trees mark the forest the village depends on. For the Warli, the land is shared with it, never owned.',
      },
      {
        id: 'moon',
        x: 20,
        y: 76,
        label: 'Moon',
        story:
          'A plain white circle is the moon. Circles are the oldest shape in the Warli language — sun, moon, and the cycle of the year.',
      },
    ],
    creationSteps: [
      {
        title: 'Prepare the wall',
        detail:
          'Red-brown earth is mixed with cow dung and water, smeared on the wall by hand and left to dry to a matte ground.',
        time: 'Day 1',
      },
      {
        title: 'Grind the rice',
        detail:
          'Rice is soaked overnight, ground to a paste and thinned with water until it flows from a chewed bamboo stick.',
        time: 'Day 1',
      },
      {
        title: 'Draw the chaukat',
        detail:
          'The sacred square is drawn first. Without it, the painting has no centre and the goddess has no seat.',
        time: 'Day 2',
      },
      {
        title: 'Build with three shapes',
        detail:
          'Circles, triangles and squares are combined into figures, trees and animals. No straight lines, no faces, no shading.',
        time: 'Day 2',
      },
      {
        title: 'Populate the scene',
        detail:
          'Dancers, hunters, seeds and animals fill the space around the square until the story of the season is complete.',
        time: 'Day 3',
      },
      {
        title: 'Let it set',
        detail:
          'The rice paste dries to a chalk white. The wall is repainted each festival, layer over layer, year after year.',
        time: 'Day 4',
      },
    ],
    visualStory: [
      'A house in the Ghats. The inner wall has just been coated with red-brown sandh and is still damp.',
      'A square is drawn at the centre — the chaukat, the seat of the earth mother.',
      'Two triangles become a tree; another pair becomes a woman carrying water. The village begins to appear.',
      'The tarpa player is placed at the middle, and the dancers spiral out from him, hands linked.',
      'By evening the wall holds the whole harvest: the people, the forest, the moon, and the thanks.',
    ],
    audio: {
      en: 'This is Warli painting from the hills of Maharashtra. The Warli people paint with white rice paste on mud walls, using only circles, triangles and squares. The spiral of dancers around the musician is the tarpa dance, a thanks for the harvest.',
      hi: 'यह महाराष्ट्र की पहाड़ियों से आने वाली वारली चित्रकला है। वारली लोग मिट्टी की दीवारों पर सफ़ेद चावल के घोल से चित्र बनाते हैं, जिसमें केवल वृत्त, त्रिभुज और वर्ग होते हैं। संगीतकार के चारों ओर नाचते लोगों का घेरा तरपा नृत्य है, जो फ़सल के लिए धन्यवाद है।',
      mr: 'हे महाराष्ट्राच्या डोंगराळ भागातील वारली चित्रकला आहे. वारली लोक मातीच्या भिंतींवर पांढऱ्या भाताच्या पेस्टने चित्रे काढतात, ज्यात फक्त वर्तुळ, त्रिकोण आणि चौकोन असतात. वादकाभोवती नाचणाऱ्या लोकांचे वर्तुळ म्हणजे तरपा नृत्य, जे सुगीचे आभार मानते.',
      bn: 'এটি মহারাষ্ট্রের পাহাড়ি অঞ্চলের ওয়ার্লি চিত্রকলা। ওয়ার্লি মানুষ মাটির দেয়ালে সাদা ভাতের মাড় দিয়ে ছবি আঁকেন, যেখানে থাকে কেবল বৃত্ত, ত্রিভুজ আর বর্গ। বাদকের চারপাশে নাচের ঘূর্ণি হল তর্পা নাচ, ফসলের জন্য কৃতজ্ঞতা।',
    },
    quiz: [
      {
        question: 'The tarpa dance, drawn as a spiral of stick figures, belongs to which art form?',
        options: ['Pattachitra', 'Warli', 'Madhubani', 'Kalamkari'],
        answer: 1,
        explanation:
          'The tarpa dance is the central motif of Warli painting — a circle of dancers around the musician.',
      },
      {
        question: 'How many geometric shapes does Warli painting use?',
        options: ['Two', 'Three', 'Five', 'Seven'],
        answer: 1,
        explanation:
          'Three: the circle, the triangle and the square. Everything else is a combination of them.',
      },
    ],
  },

  pattachitra: {
    id: 'pattachitra',
    name: 'Pattachitra',
    aka: 'Cloth Picture of Odisha',
    state: 'Odisha',
    originLine: 'Raghurajpur, Puri, Odisha',
    confidence: 91,
    era: '12th century → today',
    medium: 'Treated cloth, natural pigments, fine squirrel brush',
    image:
      'https://media.base44.com/images/public/6aece89dff1257ebb792018c/a93a97f3d_generated_image.png',
    shortDescription:
      'A painted scroll from Puri that carried the stories of Jagannath from temple to village, in five natural colours.',
    identification: {
      style:
        'A temple scroll painting of coastal Odisha, made to narrate the myths of Jagannath, Krishna and the Ramayana.',
      origin: 'Raghurajpur and Puri, Odisha — the artist village beside the Jagannath temple.',
      period: 'From the 12th century, with the rise of the Jagannath cult at Puri.',
      technique:
        'Cloth is coated with tamarind-seed paste and chalk powder, dried and burnished. Line work is drawn first, colour filled flat, and the finished cloth polished from the back with a stone until it glows.',
    },
    history: [
      'Pattachitra means “cloth picture”. The cloth is prepared with tamarind-seed paste and chalk so the surface can hold a hair-fine line; the painting is drawn, coloured, and finally polished from the back over a smooth stone until the cloth shines.',
      'The painters of the Mahapatra family at Raghurajpur served the Jagannath temple at Puri. Their most sacred commission was the anasara pati — pictures of the deities shown to pilgrims while the temple images are in retreat each year.',
      'Only a handful of colours are permitted: hingul red, haritala yellow, lampblack, conch-shell white and a green from leaves. Pattachitra received a Geographical Indication tag in 2008, and Raghurajpur is today an artist village of more than a hundred households.',
    ],
    historicalNote:
      'Before printing, a Pattachitra scroll was a portable temple: a singer would unroll it panel by panel and narrate each scene to villagers who might never travel to Puri.',
    symbols: [
      {
        name: 'Jagannath eyes',
        icon: 'eye',
        meaning:
          'Two enormous round eyes with no eyelids. The deity never blinks, so the gaze is always on the devotee.',
      },
      {
        name: 'Lotus',
        icon: 'flower',
        meaning:
          'The seat of Vishnu and the cosmic lotus from which the world unfolds. Painted as a wheel of petals.',
      },
      {
        name: 'Conch',
        icon: 'waves',
        meaning:
          'The shankha announces ritual and calls the community. Its spiral is drawn as a perfect whorl, never a rough curve.',
      },
      {
        name: 'Snake boat',
        icon: 'sail',
        meaning:
          'The naga boat carries the deity across water in festival processions — a reminder of the rivers that feed coastal Odisha.',
      },
      {
        name: 'Kalpavriksha',
        icon: 'leaf',
        meaning:
          'The wish-fulfilling tree, held up by women and animals together: the whole of creation supporting one another.',
      },
    ],
    palette: [
      {
        hex: '#A62B22',
        name: 'Hingul red',
        meaning: 'Cinnabar — the colour of the temple, of sindoor and of the divine presence.',
      },
      {
        hex: '#E0A526',
        name: 'Haritala yellow',
        meaning: 'Orpiment yellow, used for the deity’s garments and for sunlight in the sky panels.',
      },
      {
        hex: '#F6EFDF',
        name: 'Conch white',
        meaning: 'Shell white for skin, clouds and the ground of the painting.',
      },
      {
        hex: '#1F1B18',
        name: 'Lampblack',
        meaning: 'Soot from a brass lamp — the line that gives every figure its edge.',
      },
      {
        hex: '#2B4C7E',
        name: 'Indigo blue',
        meaning: 'The dark body of Jagannath, and the water that carries the festival boats.',
      },
    ],
    hotspots: [
      {
        id: 'eyes',
        x: 50,
        y: 24,
        label: 'The unblinking eyes',
        story:
          'Pattachitra faces carry two outsized round eyes with no lids. The god never blinks, and therefore never looks away from the devotee.',
      },
      {
        id: 'border',
        x: 84,
        y: 50,
        label: 'Floral border',
        story:
          'A painted border frames every scroll. It is not decoration — it marks the sacred boundary of the story inside.',
      },
      {
        id: 'lotus',
        x: 50,
        y: 62,
        label: 'Cosmic lotus',
        story:
          'The lotus holds the deity above water and chaos. Its petals are drawn in exact repetition, a meditation in symmetry.',
      },
      {
        id: 'cloth',
        x: 22,
        y: 42,
        label: 'Prepared cloth',
        story:
          'Tamarind-seed paste and chalk powder are rubbed into the cloth so it can take a hair-fine line without bleeding.',
      },
      {
        id: 'pigment',
        x: 22,
        y: 74,
        label: 'Five colours only',
        story:
          'Hingul, haritala, lampblack, conch white and leaf green. The restriction is the style — everything is said with five voices.',
      },
    ],
    creationSteps: [
      {
        title: 'Treat the cloth',
        detail:
          'Cotton cloth is coated with a paste of tamarind seeds and chalk powder, then sun-dried and burnished with a stone.',
        time: 'Day 1–2',
      },
      {
        title: 'Mix the five colours',
        detail:
          'Hingul, haritala, lampblack, conch-shell white and leaf green are bound with gum and kept in coconut-shell cups.',
        time: 'Day 2',
      },
      {
        title: 'Draw the border first',
        detail:
          'The sacred boundary is painted before the story, so the narrative has an edge it cannot spill past.',
        time: 'Day 3',
      },
      {
        title: 'Outline every figure',
        detail:
          'A squirrel-hair brush draws the black line. Faces, hands and ornaments are built from that single line.',
        time: 'Day 3–5',
      },
      {
        title: 'Fill flat colour',
        detail:
          'Colour goes inside the line with no shading. The deity is painted last, after the ground and the attendants.',
        time: 'Day 5–7',
      },
      {
        title: 'Polish from behind',
        detail:
          'The finished cloth is laid face down on a stone and rubbed until the surface shines and the colours lock in.',
        time: 'Day 8',
      },
    ],
    visualStory: [
      'A painter in Raghurajpur stretches treated cloth on the floor and marks the border with a fine brush.',
      'The deity is not painted first. The ground, the attendants and the lotus seat are laid down around an empty centre.',
      'Only then is Jagannath drawn in — huge round eyes, no lids, so the gaze never leaves the viewer.',
      'The cloth is turned face down and polished on a stone until the painting glows like enamel.',
      'A singer rolls the scroll and walks to the next village, where the story will be unrolled again.',
    ],
    audio: {
      en: 'This is a Pattachitra from Odisha, painted on cloth to carry the stories of Lord Jagannath. The colours are few and natural: hingul red, haritala yellow, conch-shell white and lamp black. The enormous unblinking eyes of the deity watch over the story.',
      hi: 'यह ओडिशा की पट्टचित्र कला है, जो कपड़े पर बनाई जाती है और भगवान जगन्नाथ की कथाएँ सुनाती है। रंग थोड़े और प्राकृतिक हैं: हिंगुल लाल, हरिताल पीला, शंख सफ़ेद और दीये की कालिख। देवता की बड़ी, बिना पलक वाली आँखें कथा पर दृष्टि रखती हैं।',
      mr: 'हे ओडिशाचे पट्टचित्र आहे, कापडावर काढले जाते आणि जगन्नाथांच्या कथा सांगते. रंग थोडे आणि नैसर्गिक आहेत: हिंगूळ लाल, हरिताळ पिवळा, शंख पांढरा आणि दिव्याची काजळी. देवतेचे मोठे, पापणी नसलेले डोळे कथेवर लक्ष ठेवतात.',
      bn: 'এটি ওড়িশার পটচিত্র, কাপড়ে আঁকা, যা জগন্নাথদেবের কাহিনি বহন করে। রং অল্প ও প্রাকৃতিক: হিঙ্গুল লাল, হরিতাল হলুদ, শঙ্খ সাদা আর প্রদীপের কালি। দেবতার বিশাল, পলকহীন চোখ গল্পের দিকে তাকিয়ে থাকে।',
    },
    quiz: [
      {
        question: 'Pattachitra painters traditionally served which temple?',
        options: ['Somnath', 'Jagannath temple, Puri', 'Meenakshi', 'Tirupati'],
        answer: 1,
        explanation:
          'The Mahapatra painters of Raghurajpur served the Jagannath temple at Puri, painting the anasara pati each year.',
      },
      {
        question: 'Which cloth treatment prepares the surface for Pattachitra?',
        options: [
          'Tamarind-seed paste and chalk',
          'Indigo and salt',
          'Rice paste only',
          'Boiled starch and lime',
        ],
        answer: 0,
        explanation:
          'Tamarind-seed paste with chalk powder fills the weave so a hair-fine brush line will not bleed.',
      },
    ],
  },

  kalamkari: {
    id: 'kalamkari',
    name: 'Kalamkari',
    aka: 'Pen Work of the Coromandel',
    state: 'Andhra Pradesh',
    originLine: 'Srikalahasti & Machilipatnam, Andhra Pradesh',
    confidence: 89,
    era: '2,000+ years of textile trade',
    medium: 'Cotton cloth, bamboo pen, vegetable dyes',
    image:
      'https://media.base44.com/images/public/6aece89dff1257ebb792018c/bd6529263_generated_image.png',
    shortDescription:
      'Freehand pen work on cotton, dyed with indigo, madder and myrobalan — a temple story you can wear.',
    identification: {
      style:
        'A narrative textile art of Andhra Pradesh, drawn freehand on cotton and dyed with vegetable and mineral colours.',
      origin: 'Srikalahasti and Machilipatnam, Andhra Pradesh.',
      period: 'Textile traditions over 2,000 years old; the name comes from Persian traders.',
      technique:
        'The cloth is washed in river water, treated with myrobalan and buffalo milk, drawn with a bamboo kalam, dyed in madder root, boiled with indigo, and washed again in running water.',
    },
    history: [
      '“Kalamkari” comes from kalam, pen, and kari, work — the Persian name for the painted cottons of the Coromandel coast that travelled to Java, Persia and Europe for centuries.',
      'At Srikalahasti the cloth is drawn freehand with a bamboo pen, so the style stays narrative and temple-centred: Ramayana, Mahabharata and local legend. At Machilipatnam the same dyes are applied with carved wooden blocks.',
      'It takes weeks. The cloth is washed in river water, treated with myrobalan and buffalo milk, drawn, dyed in madder root, boiled with indigo, sun-dried and washed again — often by a whole family, each step watched by another generation. Srikalahasti Kalamkari received its GI tag in 2013.',
    ],
    historicalNote:
      'A Kalamkari story cloth was a trade good and a prayer at once: the same cotton that hung in a Dutch warehouse carried a temple narrative to a village shrine.',
    symbols: [
      {
        name: 'Tree of Life',
        icon: 'leaf',
        meaning:
          'One trunk carrying many branches, each with its own bird or flower — creation holding every form at once.',
      },
      {
        name: 'Peacock',
        icon: 'feather',
        meaning:
          'Beauty and monsoon. In temple cloths the peacock is also the carrier of Kartikeya and a sign of auspicious rain.',
      },
      {
        name: 'Lotus',
        icon: 'flower',
        meaning: 'Purity and the turning of the day — the lotus opens with the sun and closes with it.',
      },
      {
        name: 'Hamsa',
        icon: 'bird',
        meaning:
          'The swan of wisdom, said to drink only milk from a mixture of milk and water. It stands for discernment.',
      },
      {
        name: 'Chariot',
        icon: 'sun',
        meaning:
          'The sun’s chariot and the temple chariot are drawn alike: movement, festival, and the passage of time.',
      },
    ],
    palette: [
      {
        hex: '#1F3A5F',
        name: 'Indigo blue',
        meaning:
          'Fermented indigo leaf. The cloth is boiled in it, so the blue sits deepest and never fades.',
      },
      {
        hex: '#A8322B',
        name: 'Madder red',
        meaning:
          'Root of the madder plant, boiled with the cloth — the colour of earth, blood and the temple flag.',
      },
      {
        hex: '#D8A43C',
        name: 'Myrobalan yellow',
        meaning:
          'Harda powder, which also mordants the cloth so the dyes can grip. Yellow is the ground of the story.',
      },
      {
        hex: '#2B2B23',
        name: 'Iron black',
        meaning:
          'Iron filings rusted with jaggery — the kalam line, drawn freehand and never erased.',
      },
      {
        hex: '#F3EBDD',
        name: 'Cotton cream',
        meaning:
          'The natural off-white of unbleached cotton, left unpainted so the story has room to breathe.',
      },
    ],
    hotspots: [
      {
        id: 'trunk',
        x: 50,
        y: 68,
        label: 'The trunk',
        story:
          'The tree of life grows from a pot, not the ground: creation is held, protected, and deliberately tended.',
      },
      {
        id: 'kalam',
        x: 24,
        y: 40,
        label: 'Kalam line',
        story:
          'The black outline is drawn freehand with a bamboo pen wrapped in cloth. A single wobble cannot be undone — the dye is permanent.',
      },
      {
        id: 'birds',
        x: 50,
        y: 26,
        label: 'Birds in the branches',
        story:
          'Each bird is a different creature on a different branch. Wisdom, beauty and song share one tree without competing.',
      },
      {
        id: 'border',
        x: 16,
        y: 84,
        label: 'Dye border',
        story:
          'The border is dipped in madder and indigo separately — two colours that must never touch before the cloth is washed.',
      },
      {
        id: 'cream',
        x: 82,
        y: 62,
        label: 'Untouched cotton',
        story:
          'What is left unpainted matters as much as the drawing. The bare cotton is the pause between the symbols.',
      },
    ],
    creationSteps: [
      {
        title: 'Wash the cotton',
        detail:
          'The cloth is washed in running river water for hours to strip starch and oil, then dried in the sun.',
        time: 'Day 1',
      },
      {
        title: 'Mordant the cloth',
        detail:
          'Myrobalan powder and buffalo milk are worked in. Without this step the vegetable dyes will simply wash away.',
        time: 'Day 2',
      },
      {
        title: 'Draw with the kalam',
        detail:
          'A bamboo pen wrapped with cloth holds the iron-black outline. The drawing is freehand — no tracing, no correction.',
        time: 'Day 3–6',
      },
      {
        title: 'Dye in madder',
        detail:
          'The cloth is boiled with madder root for red, and the areas meant to stay white are tied or waxed shut.',
        time: 'Day 7',
      },
      {
        title: 'Boil in indigo',
        detail:
          'Indigo is fermented in a vat and the cloth dipped repeatedly — each dip deepens the blue and fixes it to the fibre.',
        time: 'Day 8–9',
      },
      {
        title: 'Wash and dry',
        detail:
          'A final wash in running water clears the excess dye, and the cloth is beaten and dried until the colours hold.',
        time: 'Day 10',
      },
    ],
    visualStory: [
      'A riverbank in Srikalahasti. A bundle of cotton is beaten and washed until the water runs clear.',
      'The cloth is soaked in myrobalan and buffalo milk — invisible work that decides whether the colours will last.',
      'A bamboo kalam draws the tree, freehand: trunk first, then branches, then the birds that live on them.',
      'The cloth is boiled with madder for red, then dipped again and again in indigo for blue.',
      'Washed and dried, the story is now permanent. It will outlast the hands that drew it.',
    ],
    audio: {
      en: 'This is Kalamkari from Andhra Pradesh, drawn freehand with a bamboo pen and dyed with vegetable colours. Indigo gives the deep blue, madder root the red, and myrobalan the yellow. Each cloth carries a temple story that takes weeks to complete.',
      hi: 'यह आंध्र प्रदेश की कलमकारी है, जिसे बाँस की कलम से हाथ से बनाया जाता है और वनस्पति रंगों से रंगा जाता है। नील से गहरा नीला, मजीठ से लाल और हरड़ से पीला रंग आता है। हर कपड़ा एक मंदिर की कथा लिए होता है, जिसे बनाने में हफ़्ते लगते हैं।',
      mr: 'हे आंध्र प्रदेशचे कलमकारी आहे, बांबूच्या कलमाने हाताने काढले जाते आणि वनस्पती रंगांनी रंगवले जाते. निळ्यातून गडद निळा, मंजिष्ठेतून लाल आणि हिरड्यातून पिवळा रंग येतो. प्रत्येक कापडात मंदिराची कथा असते, जी पूर्ण करायला आठवडे लागतात.',
      bn: 'এটি অন্ধ্রপ্রদেশের কলমকারি, বাঁশের কলমে হাতে আঁকা এবং গাছ-গাছড়ার রঙে রাঙানো। নীল থেকে গাঢ় নীল, মাদার থেকে লাল আর হরিতকী থেকে হলুদ আসে। প্রতিটি কাপড়ে একটি মন্দিরের কাহিনি থাকে, যা শেষ করতে সপ্তাহ লেগে যায়।',
    },
    quiz: [
      {
        question: 'What does the word “kalamkari” mean?',
        options: ['Cloth painting', 'Pen work', 'Village art', 'Dye story'],
        answer: 1,
        explanation: 'Kalam means pen and kari means work — pen work, named by Persian traders.',
      },
      {
        question: 'Kalamkari is native to which state?',
        options: ['Odisha', 'Maharashtra', 'Bihar', 'Andhra Pradesh'],
        answer: 3,
        explanation:
          'Its two homes are Srikalahasti and Machilipatnam, both in Andhra Pradesh.',
      },
    ],
  },
};

export const ART_FORM_LIST = Object.values(ART_FORMS);

export function getArtForm(id) {
  return ART_FORMS[id] || ART_FORMS.madhubani;
}

/** Every quiz question across the four traditions, tagged with its art form. */
export const QUIZ_BANK = ART_FORM_LIST.flatMap((art) =>
  art.quiz.map((q) => ({ ...q, artFormId: art.id, artFormName: art.name }))
);
