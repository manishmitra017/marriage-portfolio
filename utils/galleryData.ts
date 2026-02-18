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

// ── Section 1: Blessings — শুভ আশীর্বাদ (41 photos) ──────────────────────────
export const blessingPhotos: GalleryPhoto[] = [
  img('001', 'Shoumo seated on the ceremonial carpet receiving ashirwad', 'শুভ আশীর্বাদ — where it all begins, on the carpet of tradition'),
  img('002', 'KumKum Ma lovingly feeding Shoumo sweets', 'মিষ্টিমুখ — KumKum Ma feeds Shoumo mishti, sweetness to start the journey'),
  img('007', 'Kaki placing her hand on Shoumo in blessing', 'Kaki whispers a lifetime of love into a single touch'),
  img('009', 'Elder blessing Shoumo with sacred durba grass', 'Durba grass and devotion — blessings from the roots of our soil'),
  img('013', 'Meson Mama gently feeding Shoumo sweets', 'Meson Mama and his trademark warmth — one mishti at a time'),
  img('018', 'Elder placing a gentle hand on Rituparna\'s head', 'হাতের আশীর্বাদ — a hand on her head, a prayer in the heart'),
  img('021', 'Rituparna receiving blessings seated on the carpet', 'Rituparna on the carpet of blessings, glowing with grace'),
  img('025', 'Elder in vibrant orange sari blessing the couple', 'A splash of orange, a river of blessings'),
  img('031', 'Kaki blessing Shoumo during the ceremony', 'Kaki blesses her favourite nephew — the groom himself'),
  img('040', 'Blessing ritual by the glow of a lit diya', 'প্রদীপের আলোয় আশীর্বাদ — blessings by the light of the sacred flame'),
  img('049', 'Elder woman offering blessings on the carpet', 'On this carpet, every blessing becomes a promise'),
  img('050', 'Woman in green sari blessing Shoumo tenderly', 'In green and in grace — love pours from her hands'),
  img('055', 'Rituparna touching an elder\'s feet for pranam', 'প্রণাম — Rituparna bows, and a lifetime of respect flows'),
  img('060', 'Shoumo bowing his head to receive ashirwad', 'Shoumo bows, humble before the love of his elders'),
  img('072', 'Man lying prostrate in deep pranam', 'সাষ্টাঙ্গ প্রণাম — the deepest bow, the highest respect'),
  img('074', 'Blessing with brass thali full of sweets', 'Sweets from the brass thali — every morsel a prayer'),
  img('079', 'Shoumo\'s Dada blessing Rituparna warmly', 'Dada blesses Rituparna — welcoming her into the family with open arms'),
  img('081', 'Grandfather placing both hands on Shoumo\'s head', 'ঠাকুরদার আশীর্বাদ — a grandfather\'s blessing, worth a thousand words'),
  img('085', 'Elder garlanding the couple with fresh flowers', 'Garlands and blessings, woven together like destiny'),
  img('086', 'Elder kissing the couple\'s forehead during ashirwad', 'A kiss on the forehead — the most tender ashirwad'),
  img('087', 'Touching elder\'s feet in reverent pranam', 'প্রণাম — touching feet, touching hearts'),
  img('093', 'KumKum Ma lovingly blessing Rituparna', 'KumKum Ma blesses her daughter — eyes full of pride, heart full of love'),
  img('098', 'Shoumo illuminated by the sacred diya during blessing', 'In the diya\'s glow, Shoumo receives blessings that will light his way'),
  img('100', 'Blessing ceremony with diya and durba grass', 'দীপ আর দূর্বা — the eternal symbols of Bengali blessings'),
  img('104', 'Elder lovingly feeding and blessing Shoumo', 'Fed with love, blessed with grace — the Bengali way'),
  img('107', 'Elder blessing the couple with a garland', 'Another garland, another prayer answered'),
  img('109', 'Shoumo\'s Ma welcoming Rituparna into the family', 'মায়ের আদর — Shoumo\'s Ma opens her arms to Rituparna'),
  img('112', 'Elder blessing Shoumo with both hands on his head', 'Two hands, one prayer — ashirwad from the eldest'),
  img('116', 'Elder tying a sacred thread on Shoumo\'s wrist', 'রক্ষাসূত্র — the sacred thread that binds blessings to the wrist'),
  img('129', 'Meson Mama\'s heartfelt blessing for Shoumo', 'Meson Mama\'s blessings — loud in love, gentle in touch'),
  img('135', 'Elder putting a flower garland on Shoumo', 'ফুলের মালা, ভালোবাসার মালা — garlanded with love'),
  img('145', 'Elder lady tenderly blessing Rituparna', 'She blesses Rituparna the way only a grandmother can — with her whole soul'),
  img('147', 'Feeding sweets to Shoumo as part of ashirwad', 'মিষ্টি মুখ করানো — because no blessing is complete without something sweet'),
  img('148', 'Shoumo touching Ma\'s feet seeking blessings', 'Shoumo at Ma\'s feet — some blessings you carry forever'),
  img('180', 'Elder man feeding Shoumo with love', 'From the hands of elders, every morsel is a memory'),
  img('194', 'Elder placing garland on Rituparna', 'Rituparna, adorned in garlands and grace'),
  img('226', 'Elder blessing Rituparna with a hand on her head', 'A gentle touch, a world of wishes'),
  img('230', 'Grandmother giving heartfelt ashirwad', 'ঠাকুমার আশীর্বাদ — when grandmother blesses, even the heavens listen'),
  img('249', 'Elder in red kurta blessing Shoumo', 'Blessings in red — bold, warm, and unforgettable'),
  img('262', 'Elder women of the family blessing together', 'The women of the family — the pillars of every blessing'),
];

// ── Section 2: Rituparna & Shoumo — যুগলবন্দী (24 photos) ────────────────────
export const couplePhotos: GalleryPhoto[] = [
  img('005', 'Rituparna and Shoumo reading documents side by side', 'Reading their future together — one page at a time'),
  img('011', 'The couple in a quiet moment over paperwork', 'Between all the rituals, a quiet moment just for them'),
  img('015', 'Rituparna sitting gracefully in her purple Banarasi', 'রিতুপর্ণা — radiant in purple, beautiful in every way'),
  img('033', 'Couple reviewing documents together', 'The paperwork of promise — making forever official'),
  img('044', 'Rituparna and Shoumo after exchanging garlands', 'মালাবদল — the garlands exchanged, two hearts now one'),
  img('054', 'Couple beaming with joy wearing fresh garlands', 'That smile after মালা বদল — pure, unfiltered joy'),
  img('062', 'Couple posing by the stairs wearing garlands', 'By the staircase — standing tall, hearts intertwined'),
  img('077', 'Rituparna and Shoumo — a stunning portrait in garlands', 'যুগলবন্দী — a portrait of two souls in perfect harmony'),
  img('089', 'Rituparna\'s radiant smile in close-up', 'That smile could light up all of Kolkata'),
  img('103', 'Rituparna and Shoumo standing side by side', 'Side by side, ready to take on the world together'),
  img('111', 'Couple walking by the staircase hand in hand', 'সিঁড়ির ধারে — every step together, every step closer'),
  img('117', 'Couple\'s portrait by the decorated stairs', 'A portrait by the stairs — timeless and beautiful'),
  img('127', 'Rituparna and Shoumo signing documents together', 'Signing the next chapter — ink and intentions'),
  img('132', 'Two signatures, one promise — the couple signing', 'Two pens, one destiny — দুটি স্বাক্ষর, একটি প্রতিশ্রুতি'),
  img('134', 'Couple standing under festive overhead decorations', 'Under the canopy of celebrations'),
  img('142', 'Couple with garlands, radiating happiness', 'Garlanded and glowing — this is what love looks like'),
  img('151', 'Close-up portrait of the couple in garlands', 'Close enough to see forever in each other\'s eyes'),
  img('155', 'Couple seated together wearing matching garlands', 'Seated in bliss, wrapped in garlands and গল্প'),
  img('169', 'Rituparna and Shoumo making playful peace signs', 'Peace, love, and a little mischief — that\'s them!'),
  img('179', 'Rituparna sitting gracefully, full Banarasi on display', 'বেনারসী-তে রিতুপর্ণা — a vision in purple and gold'),
  img('202', 'Rituparna with a friend, both wearing garlands', 'Surrounded by love and লোকজন — the warmest company'),
  img('207', 'Couple\'s candid portrait in natural light', 'A candid moment caught in golden light'),
  img('247', 'Rituparna\'s full portrait in her stunning Banarasi', 'রিতুপর্ণা — stunning, graceful, and absolutely herself'),
  img('260', 'Couple relaxing on the sofa between rituals', 'Between the rituals — just two people, completely at ease'),
];

// ── Section 3: The Signing — দলিল সই (10 photos) ──────────────────────────────
export const signingPhotos: GalleryPhoto[] = [
  img('012', 'Shoumo signing documents while Rituparna smiles beside him', 'কলম হাতে শৌমো — making it official, one signature at a time'),
  img('022', 'Babai signing the documents with quiet pride', 'Babai signs — steady hand, proud heart'),
  img('030', 'Elder man adding his signature to the ceremony papers', 'An elder\'s signature — wisdom sealed in ink'),
  img('064', 'Shoumo\'s Ma signing the papers with a warm smile', 'মা-র স্বাক্ষর — Ma signs with love in every stroke'),
  img('078', 'Elder signing documents at the ceremony table', 'Another witness, another blessing on paper'),
  img('083', 'Documents being signed amid the ceremony', 'The ceremony pauses for formalities — every signature a blessing'),
  img('099', 'KumKum Ma signing the documents carefully', 'KumKum Ma signs — a mother\'s seal of love and approval'),
  img('114', 'Pen in hand, signing with focus', 'Pen in hand, future in heart — কলমে ভবিষ্যৎ'),
  img('138', 'Shoumo signing another official document', 'Shoumo signs another page of their forever story'),
  img('160', 'Elder reviewing the papers before signing', 'Reading every word — because promises deserve attention'),
];

// ── Section 4: Family & Loved Ones — পরিবার (18 photos) ──────────────────────
export const familyPhotos: GalleryPhoto[] = [
  img('000', 'Family group photo — Babai, Ma, KumKum Ma, Rituparna, Shoumo together', 'দুটি পরিবার, একটি হৃদয় — two families, one heart, one frame'),
  img('003', 'Didi Monalisa and Manish blessing Shoumo together', 'Didi Monalisa and Manish — love from the sister\'s side'),
  img('008', 'Extended family group photo from a different angle', 'The whole family — loud, loving, and perfectly Bengali'),
  img('035', 'Two women standing elegantly in beautiful saris', 'শাড়িতে সাজানো — dressed in tradition, draped in elegance'),
  img('052', 'Group of women from the family posing together', 'মায়েদের আড্ডা — the women of the family, the heart of every celebration'),
  img('059', 'Two women sharing a smile in their finest saris', 'Smiles and saris — the real festive spirit'),
  img('061', 'Family gathered near the staircase', 'The staircase portrait — every generation represented'),
  img('067', 'Multi-generational family group with elders', 'তিন প্রজন্ম — three generations, one frame, endless love'),
  img('073', 'Family standing together outside the ancestral home', 'Outside the বাড়ি — where every wall holds a memory'),
  img('080', 'Family eating together on the terrace', 'ছাদে খাওয়া-দাওয়া — terrace meals are the best meals'),
  img('095', 'Family portrait on the stairs in their finest', 'Stairs make the best stages for family portraits'),
  img('102', 'Family relaxing together on the couch', 'Between rituals — the couch becomes the gathering spot'),
  img('122', 'Elders with the couple in a group portrait', 'The elders and the couple — blessings captured in a click'),
  img('125', 'Cat sitting regally in the doorway', 'বিড়ালও এসেছে আশীর্বাদ দিতে — even the cat showed up to bless the couple!'),
  img('165', 'Full family group by the staircase', 'The whole বড় পরিবার — big family, bigger hearts'),
  img('267', 'Shoumo with Dada, Dadu, Dida, and Ma', 'Shoumo with Dada, Dadu, Dida & Ma — his roots, his strength'),
  img('269', 'Mother welcoming Shoumo at the front door', 'মায়ের অভ্যর্থনা — a mother\'s welcome at the threshold of forever'),
  img('270', 'Entire family seated together on the sofa', 'All together on one sofa — a family that fits anywhere'),
];

// ── Section 5: The Feast — ভোজ (7 photos) ────────────────────────────────────
export const feastPhotos: GalleryPhoto[] = [
  img('076', 'Sacred puja area setup with flowers and lamps', 'পূজার থালি — the sacred setup where it all begins'),
  img('090', 'Antara, Kaki, Biyas, Bhai Kaku, and Rushi dining on the terrace', 'ছাদে বিরিয়ানি — Antara, Kaki, Biyas, Bhai Kaku & Rushi feasting under the sky'),
  img('091', 'Family smiling over biryani on the terrace', 'বিরিয়ানি আর হাসি — biryani and laughter, the Bengali combo'),
  img('105', 'Decorated venue exterior view with lights', 'সাজানো বাড়ি — the house dressed up for the occasion'),
  img('141', 'Wide-angle view of the ceremony in full swing', 'The ceremony buzzes — every corner alive with celebration'),
  img('166', 'Refreshments table beautifully arranged', 'জলখাবারের টেবিল — refreshments that say "you are loved"'),
  img('229', 'Guests gathered for the celebration feast', 'খাওয়া-দাওয়া আর আড্ডা — good food, great company, the best memories'),
];

// Legacy exports for backward compatibility
export const ceremonyPhotos = blessingPhotos;
export const receptionPhotos = couplePhotos;
export const portraitPhotos = familyPhotos;
export const preWeddingPhotos = feastPhotos;
