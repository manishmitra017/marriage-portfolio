import { GalleryPhoto } from '@/components/PhotoGallery';

// ─────────────────────────────────────────────────────────────────────────────
// Ashirwad Ceremony Gallery — Rituparna & Shoumo, Kolkata
// ~100 curated photos organized by ceremony moments
// ─────────────────────────────────────────────────────────────────────────────

const img = (n: string, alt: string, caption: string): GalleryPhoto => ({
  src: `/images/ashirwad/ashirwad_${n}.jpg`,
  alt,
  caption,
});

// ── Section 1: Blessings — Elders blessing the couple (40 photos) ───────────
export const blessingPhotos: GalleryPhoto[] = [
  img('001', 'Elder blessing Shoumo on the ceremonial carpet', 'A sacred beginning — ashirwad on the carpet'),
  img('002', 'KumKum Ma feeding Shoumo sweets during ashirwad', 'KumKum Ma blesses Shoumo with sweets'),
  img('007', 'Kaki blessing Shoumo', 'Kaki gives her blessings'),
  img('009', 'Elder blessing Shoumo with durba grass', 'Blessings with sacred durba grass'),
  img('013', 'Meson Mama feeding Shoumo sweets', 'Meson Mama feeds Shoumo mishti'),
  img('018', 'Elder placing hand on Rituparna head', 'A gentle hand of ashirwad for Rituparna'),
  img('021', 'Elder blessing Rituparna on the carpet', 'Rituparna receives blessings'),
  img('025', 'Elder in orange sari blessing the couple', 'Ashirwad from an elder in orange'),
  img('031', 'Kaki blessing Shoumo during the ceremony', 'Kaki blesses the groom'),
  img('040', 'Blessing ritual with diya lit beside them', 'Sacred blessings by the lit diya'),
  img('049', 'Elder woman blessing on carpet', 'On the carpet of tradition'),
  img('050', 'Green sari lady blessing Shoumo', 'Blessings in green — grace and love'),
  img('055', 'Rituparna touching elder feet for pranam', 'Rituparna seeks blessings with pranam'),
  img('060', 'Shoumo receiving blessings bowing head', 'Shoumo bows his head for ashirwad'),
  img('072', 'Man lying prostrate for deep pranam', 'Deep pranam — seeking elder blessings'),
  img('074', 'Blessing with brass plate and sweets', 'Sweets and blessings on the brass thali'),
  img('079', 'Shoumo Dada blessing Rituparna', 'Shoumo\'s Dada blesses Rituparna'),
  img('081', 'Grandfather placing hand on Shoumo head', 'A grandfather\'s blessings'),
  img('085', 'Elder garlanding the couple', 'Garlands and blessings intertwine'),
  img('086', 'Elder kissing forehead during ashirwad', 'A kiss of ashirwad'),
  img('087', 'Pranam touching elder feet', 'Pranam — the deepest respect'),
  img('093', 'KumKum Ma blessing Rituparna', 'Ma\'s blessings for her daughter'),
  img('098', 'Shoumo receiving blessing illuminated by diya', 'Blessings illuminated by the diya'),
  img('100', 'Blessing with diya and durba grass', 'The glow of blessings and sacred flame'),
  img('104', 'Elder blessing and feeding Shoumo', 'Fed with love and blessed with grace'),
  img('107', 'Elder blessing couple with garland', 'Garlands of ashirwad'),
  img('109', 'Shoumo Ma welcoming Rituparna', 'Shoumo\'s Ma welcomes Rituparna'),
  img('112', 'Elder blessing Shoumo with both hands', 'Ashirwad from the eldest'),
  img('116', 'Elder tying sacred thread on wrist', 'The sacred thread of blessings'),
  img('129', 'Meson Mama blessing Shoumo', 'Meson Mama\'s blessings'),
  img('135', 'Elder putting garland on Shoumo', 'Garlanded with blessings'),
  img('145', 'Elder lady blessing Rituparna tenderly', 'Ashirwad for Rituparna'),
  img('147', 'Feeding sweets to Shoumo as blessing', 'Mishti and blessings — a Bengali tradition'),
  img('148', 'Shoumo touching Ma feet', 'Shoumo seeks Ma\'s blessings'),
  img('180', 'Elder man feeding Shoumo', 'Fed by the hands of elders'),
  img('194', 'Elder putting garland on Rituparna', 'Rituparna garlanded with ashirwad'),
  img('226', 'Elder blessing Rituparna on head', 'Blessings placed gently on Rituparna'),
  img('230', 'Grandmother giving ashirwad', 'A grandmother\'s ashirwad'),
  img('249', 'Red kurta elder blessing Shoumo', 'Blessings in red'),
  img('262', 'Elder lady in red sari blessing', 'Blessed by the women of the family'),
];

// ── Section 2: Rituparna & Shoumo — Couple Moments (25 photos) ─────────────
export const couplePhotos: GalleryPhoto[] = [
  img('005', 'Rituparna and Shoumo reading documents together', 'Reading their future together'),
  img('011', 'Couple in a quiet moment with paperwork', 'A quiet moment with the paperwork'),
  img('015', 'Rituparna candid sitting in purple Banarasi', 'A quiet moment of anticipation'),
  img('033', 'Couple with documents from nice angle', 'The paperwork of promise'),
  img('044', 'Rituparna and Shoumo with garlands exchanged', 'The garland exchange — two hearts, one promise'),
  img('054', 'Couple smiling wearing garlands', 'Joy after the mala badal'),
  img('062', 'Couple with garlands posing by stairs', 'Standing tall, hearts intertwined'),
  img('077', 'Couple with garlands beautiful portrait', 'A beautiful pair in garlands'),
  img('089', 'Rituparna beaming smile', 'Rituparna\'s radiant smile'),
  img('103', 'Rituparna and Shoumo standing together', 'Standing together, ready for forever'),
  img('111', 'Couple with garlands by the staircase', 'By the staircase, hand in hand'),
  img('117', 'Couple posing by stairs with garlands', 'By the stairs — a couple\'s portrait'),
  img('127', 'Rituparna and Shoumo signing together', 'Signing the next chapter'),
  img('132', 'Couple signing documents side by side', 'Two signatures, one promise'),
  img('134', 'Couple with garlands and overhead decorations', 'Under the festive canopy'),
  img('142', 'Couple with garlands standing and smiling', 'Garlanded and radiant'),
  img('151', 'Couple portrait with garlands close-up', 'A portrait of love and garlands'),
  img('155', 'Couple seated together wearing garlands', 'Seated together in bliss'),
  img('169', 'Rituparna and Shoumo making peace signs', 'Peace, love, and garlands!'),
  img('179', 'Rituparna sitting gracefully in purple Banarasi', 'Radiant in purple Banarasi'),
  img('202', 'Rituparna and friend with garlands', 'Garlanded joy'),
  img('207', 'Couple portrait together', 'Portrait of the couple'),
  img('247', 'Rituparna full portrait in purple Banarasi', 'Rituparna, stunning in her Banarasi'),
  img('260', 'Couple relaxing on sofa between rituals', 'Relaxing between the rituals'),
];

// ── Section 3: The Signing — Documents & Formalities (10 photos) ────────────
export const signingPhotos: GalleryPhoto[] = [
  img('012', 'Shoumo signing documents with Rituparna smiling', 'Making it official — pen meets paper'),
  img('022', 'Babai signing documents proudly', 'Babai signs with pride'),
  img('030', 'Elder man signing documents', 'Signed by an elder\'s hand'),
  img('064', 'Shoumo Ma signing papers', 'Shoumo\'s Ma signs with a smile'),
  img('078', 'Elder signing documents at table', 'Another signature, another blessing'),
  img('083', 'Documents being signed during ceremony', 'The formalities continue'),
  img('099', 'KumKum Ma signing documents', 'KumKum Ma signs — a mother\'s seal of love'),
  img('114', 'Signing documents with pen in hand', 'Pen in hand, future in heart'),
  img('138', 'Shoumo signing another document', 'Shoumo signs one more'),
  img('160', 'Elder reviewing papers before signing', 'An elder reviews the papers'),
];

// ── Section 4: Family & Loved Ones (18 photos) ─────────────────────────────
export const familyPhotos: GalleryPhoto[] = [
  img('000', 'Family group photo with Babai Ma KumKum Ma Rituparna Shoumo', 'Babai, Ma, KumKum Ma, Rituparna, Shoumo & family'),
  img('003', 'Monalisa and Manish blessing Shoumo', 'Didi Monalisa & Manish bless the groom'),
  img('008', 'Family group photo from another angle', 'The whole family comes together'),
  img('035', 'Two women standing together in saris', 'Dressed and ready — two lovely ladies'),
  img('052', 'Group of women standing together', 'The women of the family'),
  img('059', 'Two women posed together', 'Smiles and saris — the family spirit'),
  img('061', 'Family group near stairs', 'Family by the staircase'),
  img('067', 'Family group with elders', 'Generations together'),
  img('073', 'Family standing outside the home', 'Outside the home, together'),
  img('080', 'Family eating together on terrace', 'Family meals and memories'),
  img('095', 'Family group on stairs', 'A family portrait on the stairs'),
  img('102', 'Family group on couch', 'The family on the couch'),
  img('122', 'Elder group with couple', 'Elders and the couple together'),
  img('125', 'Cat sitting in the doorway', 'Even the cat came to bless the couple!'),
  img('165', 'Family group by stairs full group', 'The whole group by the stairs'),
  img('267', 'Shoumo with Dada Dadu Dida and Ma', 'Shoumo with Dada, Dadu, Dida & Ma'),
  img('269', 'Mother with Shoumo at the front door', 'A mother\'s welcome at the door'),
  img('270', 'Family group seated on sofa', 'The family, together on the sofa'),
];

// ── Section 5: The Feast & Celebrations (7 photos) ──────────────────────────
export const feastPhotos: GalleryPhoto[] = [
  img('076', 'Ritual puja area setup', 'The sacred puja setup'),
  img('090', 'Family dining with biryani on terrace', 'Antara, Kaki, Biyas, Bhai Kaku & Rushi — feast time!'),
  img('091', 'Terrace feast with family smiling', 'Terrace dining — biryani and smiles all around'),
  img('105', 'Decoration and venue outside view', 'The venue adorned for celebration'),
  img('141', 'Group ceremony scene wide angle', 'The ceremony buzzes with energy'),
  img('166', 'Refreshments table setup', 'The refreshments are ready'),
  img('229', 'Guests gathered for the celebration feast', 'Good food, great company'),
];

// Legacy exports for backward compatibility
export const ceremonyPhotos = blessingPhotos;
export const receptionPhotos = couplePhotos;
export const portraitPhotos = familyPhotos;
export const preWeddingPhotos = feastPhotos;
