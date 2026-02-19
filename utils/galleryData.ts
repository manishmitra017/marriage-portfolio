import { GalleryPhoto } from '@/components/PhotoGallery';

// ─────────────────────────────────────────────────────────────────────────────
// Ashirwad Ceremony Gallery — Rituparna & Shoumo, Kolkata
// ~99 curated photos organized by ceremony moments
// ─────────────────────────────────────────────────────────────────────────────

const img = (n: string, alt: string, caption: string): GalleryPhoto => ({
  src: `/images/ashirwad/ashirwad_${n}.jpg`,
  alt,
  caption,
});

// ── Section 1: Blessings — শুভ আশীর্বাদ (35 photos) ──────────────────────────
export const blessingPhotos: GalleryPhoto[] = [
  img('001', 'Rituparna seated on the ceremonial carpet receiving ashirwad from an elder', 'শুভ আশীর্বাদ — where it all begins, on the carpet of tradition'),
  img('002', 'KumKum Ma lovingly feeding Shoumo sweets during the ceremony', 'মিষ্টিমুখ — KumKum Ma feeds Shoumo mishti, sweetness to start the journey'),
  img('007', 'Family members seated together on the decorative prayer mat during ashirwad', 'On the prayer mat, surrounded by love — the ashirwad begins'),
  img('009', 'Elder man in white blessing Rituparna in her purple Banarasi', 'হাতের আশীর্বাদ — a hand on her head, a prayer in the heart'),
  img('013', 'Elder man embracing and blessing Shoumo in his red kurta', 'An elder\'s embrace — blessings flow through every touch'),
  img('021', 'Grandfather in white blessing Rituparna seated on the prayer mat', 'ঠাকুরদার আশীর্বাদ — a grandfather\'s blessing, worth a thousand words'),
  img('025', 'Woman in orange sari helping a child with ceremonial activity on the mat', 'The youngest learns the oldest traditions — blessings passed down'),
  img('031', 'Woman in teal sari with Rituparna on the prayer mat during ashirwad', 'Kaki whispers a lifetime of love into a single touch'),
  img('040', 'Blessing ritual on the carpet with sacred items and family gathered', 'প্রদীপের আলোয় আশীর্বাদ — blessings by the light of the sacred flame'),
  img('049', 'Man in maroon receiving blessings from an elder woman in green', 'On this carpet, every blessing becomes a promise'),
  img('050', 'Woman in green sari blessing Rituparna in purple on the prayer mat', 'In green and in grace — love pours from her hands'),
  img('055', 'Woman in gold sari blessing Rituparna seated on the prayer mat', 'প্রণাম — Rituparna bows, and a lifetime of respect flows'),
  img('060', 'Woman in green blessing Rituparna during the ceremony', 'Shoumo bows, humble before the love of his elders'),
  img('061', 'Elderly woman blessing Shoumo in an intimate close moment', 'মায়ের আশীর্বাদ — a mother\'s blessing that carries lifetimes of love'),
  img('072', 'Man in green bending to receive blessings with family watching', 'সাষ্টাঙ্গ প্রণাম — the deepest bow, the highest respect'),
  img('074', 'Man kneeling as woman in gold offers blessings, Rituparna seated nearby', 'Sweets from the brass thali — every morsel a prayer'),
  img('079', 'Man in maroon kurta blessing Rituparna with woman in green as witness', 'Dada blesses Rituparna — welcoming her into the family with open arms'),
  img('081', 'Elderly man in maroon kurta blessing Rituparna seated on the mat', 'Two hands, one prayer — ashirwad from the eldest'),
  img('085', 'Man in white kurta placing arm on Rituparna\'s head in blessing', 'Garlands and blessings, woven together like destiny'),
  img('087', 'Woman in white clothing bending to bless Rituparna on the prayer mat', 'প্রণাম — touching feet, touching hearts'),
  img('091', 'Elder in white giving blessings to Shoumo on the prayer mat', 'আশীর্বাদের ধারা — the stream of blessings continues unbroken'),
  img('093', 'Man in white receiving blessings from woman and Shoumo during ceremony', 'KumKum Ma blesses her daughter — eyes full of pride, heart full of love'),
  img('100', 'Man in white kurta blessing Rituparna on the prayer mat', 'দীপ আর দূর্বা — the eternal symbols of Bengali blessings'),
  img('104', 'Elder woman and man performing blessings with Shoumo on the prayer mat', 'Fed with love, blessed with grace — the Bengali way'),
  img('109', 'Elderly woman in turquoise sari blessing Rituparna on the prayer mat', 'মায়ের আদর — Shoumo\'s Ma opens her arms to Rituparna'),
  img('112', 'Shoumo\'s family exchanging blessings with gifts and brass items', 'রক্ষাসূত্র — the sacred thread that binds blessings to the wrist'),
  img('129', 'Woman giving blessings to Shoumo seated on the prayer mat', 'Meson Mama\'s blessings — loud in love, gentle in touch'),
  img('138', 'Elder woman in turquoise tenderly blessing Rituparna on the floor', 'She blesses Rituparna the way only a grandmother can — with her whole soul'),
  img('166', 'Elder woman in red and gold sari giving blessing with ceremonial items', 'ঠাকুমার আশীর্বাদ — when grandmother blesses, even the heavens listen'),
  img('180', 'Elder man in maroon blessing Shoumo on the decorative mat', 'From the hands of elders, every morsel is a memory'),
  img('194', 'Shoumo placing a flower garland on Rituparna\'s head as she smiles', 'ফুলের মালা, ভালোবাসার মালা — garlanded with love'),
  img('207', 'Elder woman and man performing blessing ritual with Shoumo kneeling', 'A gentle touch, a world of wishes'),
  img('226', 'Elder man in white blessing Rituparna seated on the prayer mat', 'Blessings in every gesture — bold, warm, and unforgettable'),
  img('230', 'Elder man bending to bless Rituparna with family standing nearby', 'The women of the family — the pillars of every blessing'),
  img('260', 'Elder woman in orange blessing Shoumo with a hand gesture', 'Another garland, another prayer answered'),
];

// ── Section 2: Rituparna & Shoumo — যুগলবন্দী (23 photos) ────────────────────
export const couplePhotos: GalleryPhoto[] = [
  img('078', 'Rituparna and Shoumo wearing flower garlands, smiling together near a window', 'যুগলবন্দী — a portrait of two souls in perfect harmony'),
  img('044', 'Rituparna and Shoumo standing together after exchanging garlands', 'মালাবদল — the garlands exchanged, two hearts now one'),
  img('062', 'Rituparna and Shoumo laughing together with garlands by the staircase', 'By the staircase — standing tall, hearts intertwined'),
  img('076', 'Rituparna in purple Banarasi and Shoumo in red kurta wearing matching garlands', 'Garlanded and glowing — this is what love looks like'),
  img('083', 'Rituparna and Shoumo in a formal portrait together in their wedding attire', 'A portrait for the ages — purple meets red, grace meets warmth'),
  img('086', 'Rituparna and Shoumo smiling at each other, wearing garlands', 'That look — when the whole world fades and only you remain'),
  img('089', 'Rituparna\'s radiant smile captured candidly at the celebration', 'That smile could light up all of Kolkata'),
  img('098', 'Shoumo smiling in his red kurta, surrounded by family at the celebration', 'শৌমো — handsome, happy, and ready for forever'),
  img('102', 'Rituparna and Shoumo exchanging flower garlands with an elder woman assisting', 'মালা বদল — the moment two souls make their promise visible'),
  img('111', 'Rituparna and Shoumo standing together with garlands, beaming with joy', 'সিঁড়ির ধারে — every step together, every step closer'),
  img('117', 'Rituparna in purple Banarasi and Shoumo in red kurta, portrait together indoors', 'A portrait by the stairs — timeless and beautiful'),
  img('122', 'Rituparna in her purple Banarasi smiling at the camera during the ceremony', 'রিতুপর্ণা — radiance that needs no filter'),
  img('134', 'Rituparna and Shoumo seated together wearing garlands, joyful moment', 'Seated in bliss, wrapped in garlands and গল্প'),
  img('142', 'Rituparna and Shoumo with matching flower garlands, smiling directly at camera', 'Close enough to see forever in each other\'s eyes'),
  img('145', 'Rituparna tenderly touching Shoumo\'s forehead, both wearing garlands', 'The gentlest blessing — from one heart to another'),
  img('147', 'Shoumo and Rituparna in a playful moment as someone records on phone', 'Peace, love, and a little mischief — that\'s them!'),
  img('148', 'Rituparna and Shoumo smiling happily together at the celebration venue', 'That smile after মালা বদল — pure, unfiltered joy'),
  img('151', 'Close-up of Rituparna and Shoumo smiling, bride in purple and groom in red', 'Two people, one heartbeat — দুটি প্রাণ, একটি ধড়কানি'),
  img('169', 'Rituparna and Shoumo holding flower garlands together, smiling indoors', 'Peace signs and garlands — because love should always be this fun'),
  img('179', 'Rituparna sitting gracefully in her orange and purple Banarasi on the couch', 'বেনারসী-তে রিতুপর্ণা — a vision in purple and gold'),
  img('202', 'Rituparna and Shoumo seated together wearing garlands, smiling at camera', 'Surrounded by love and লোকজন — the warmest company'),
  img('247', 'Rituparna in her purple Banarasi with flower decorations in her hair, portrait', 'রিতুপর্ণা — stunning, graceful, and absolutely herself'),
  img('015', 'Rituparna sitting gracefully in her purple Banarasi on orange cushions', 'রিতুপর্ণা — radiant in purple, beautiful in every way'),
];

// ── Section 3: The Signing — দলিল সই (17 photos) ──────────────────────────────
export const signingPhotos: GalleryPhoto[] = [
  img('012', 'Shoumo signing documents on the couch with Rituparna beside him', 'কলম হাতে শৌমো — making it official, one signature at a time'),
  img('005', 'Rituparna and Shoumo reviewing documents together on the couch', 'Reading their future together — one page at a time'),
  img('011', 'The couple in a quiet moment over paperwork between rituals', 'Between all the rituals, a quiet moment just for them'),
  img('022', 'Woman in red sari reviewing and signing ceremony documents', 'Babai signs — steady hand, proud heart'),
  img('030', 'Elder and Shoumo reviewing papers together on the blue couch', 'An elder\'s signature — wisdom sealed in ink'),
  img('033', 'Rituparna in purple and Shoumo in red signing documents on the couch', 'The paperwork of promise — making forever official'),
  img('064', 'Overhead shot of two people reviewing ceremony documents on the floor', 'মা-র স্বাক্ষর — Ma signs with love in every stroke'),
  img('077', 'Elder man bending over to sign papers alongside Shoumo in red kurta', 'Another witness, another blessing on paper'),
  img('099', 'Woman in red sari carefully signing the ceremony documents', 'KumKum Ma signs — a mother\'s seal of love and approval'),
  img('103', 'Elder man in white with Shoumo, reviewing documents during the ceremony', 'The ceremony pauses for formalities — every signature a blessing'),
  img('107', 'Rituparna and Shoumo signing documents together during the ceremony', 'Pen in hand, future in heart — কলমে ভবিষ্যৎ'),
  img('114', 'Overhead shot of Rituparna and Shoumo signing documents on the bed', 'দুটি স্বাক্ষর, একটি প্রতিশ্রুতি — two signatures, one promise'),
  img('116', 'Elder man in white and Shoumo signing marriage documents on the floor', 'সাক্ষী হলেন বড়রা — elders witnessed, promises were sealed'),
  img('127', 'Rituparna and Shoumo casually signing documents on the couch', 'Signing the next chapter — ink and intentions'),
  img('155', 'Rituparna and Shoumo reviewing documents together on the blue couch', 'Under the canopy of celebrations'),
  img('160', 'Elder man in white reviewing ceremony papers with Shoumo', 'Reading every word — because promises deserve attention'),
  img('249', 'Rituparna and Shoumo reviewing documents together on the couch', 'Shoumo signs another page of their forever story'),
];

// ── Section 4: Family & Loved Ones — পরিবার (17 photos) ──────────────────────
export const familyPhotos: GalleryPhoto[] = [
  img('000', 'Family group photo with Babai, Ma, KumKum Ma, Rituparna, and Shoumo by the staircase', 'দুটি পরিবার, একটি হৃদয় — two families, one heart, one frame'),
  img('003', 'Didi Monalisa and Manish together during the ceremony', 'Didi Monalisa and Manish — love from the sister\'s side'),
  img('008', 'Extended family group photo in traditional attire', 'The whole family — loud, loving, and perfectly Bengali'),
  img('035', 'Two women standing elegantly in beautiful green and pink saris', 'শাড়িতে সাজানো — dressed in tradition, draped in elegance'),
  img('052', 'Two women in purple and green saris smiling at the camera', 'মায়েদের আড্ডা — the women of the family, the heart of every celebration'),
  img('054', 'Six family members in formal wedding attire posing together', 'Smiles and saris — the real festive spirit'),
  img('059', 'Six family members in wedding clothes standing together at home', 'The staircase portrait — every generation represented'),
  img('067', 'Multi-generational group of six seated together during the gathering', 'তিন প্রজন্ম — three generations, one frame, endless love'),
  img('073', 'Man and woman in traditional cream attire posing together at home', 'Outside the বাড়ি — where every wall holds a memory'),
  img('095', 'Group portrait at home with Shoumo and multiple relatives in traditional attire', 'Stairs make the best stages for family portraits'),
  img('105', 'Woman in green and purple sari standing elegantly at the venue entrance', 'সাজানো বাড়ি — the house dressed up for the occasion'),
  img('125', 'White and grey cat lying regally on the floor', 'বিড়ালও এসেছে আশীর্বাদ দিতে — even the cat showed up to bless the couple!'),
  img('141', 'Wide-angle view of the large family gathered in the ceremony room', 'The ceremony buzzes — every corner alive with celebration'),
  img('262', 'Father and son together in a warm selfie moment', 'বাবা আর ছেলে — a father\'s pride, captured in a click'),
  img('267', 'Couple with child and family members at the doorway in traditional attire', 'Shoumo with Dada, Dadu, Dida & Ma — his roots, his strength'),
  img('269', 'Mixed group of men and women seated together indoors during the ceremony', 'মায়ের অভ্যর্থনা — a mother\'s welcome at the threshold of forever'),
  img('270', 'Elder man and younger man in traditional white attire', 'All together — a family that fits anywhere'),
];

// ── Section 5: The Feast — ভোজ (7 photos) ────────────────────────────────────
export const feastPhotos: GalleryPhoto[] = [
  img('090', 'Antara, Kaki, Biyas, Bhai Kaku, and Rushi enjoying a meal under the orange tent', 'ছাদে বিরিয়ানি — Antara, Kaki, Biyas, Bhai Kaku & Rushi feasting under the sky'),
  img('018', 'Family members gathered under a yellow tent eating together', 'পরিবারের সাথে খাওয়া — nothing beats a meal with family'),
  img('080', 'Family eating together on the terrace during the celebration', 'ছাদে খাওয়া-দাওয়া — terrace meals are the best meals'),
  img('132', 'Rituparna and Shoumo at the dining table with other guests', 'বিরিয়ানি আর হাসি — biryani and laughter, the Bengali combo'),
  img('135', 'Rituparna and Shoumo at the dining table during the wedding feast', 'জলখাবারের টেবিল — refreshments that say "you are loved"'),
  img('165', 'Family members sitting at a white table eating under the orange tent', 'The whole বড় পরিবার — big family, bigger appetites'),
  img('229', 'Women seated together eating under the tent at the celebration', 'খাওয়া-দাওয়া আর আড্ডা — good food, great company, the best memories'),
];

// ── Section 6: Rituparna — Portraits (4 photos) ──────────────────────────────
export const portraitSectionPhotos: GalleryPhoto[] = [
  { src: '/images/portraits/rituparna_001.jpg', alt: 'Rituparna smiling at the camera in her purple Banarasi with a pink flower in her hair', caption: '' },
  { src: '/images/portraits/rituparna_002.jpg', alt: 'Rituparna looking down gracefully in her purple Banarasi with gold jewelry', caption: '' },
  { src: '/images/portraits/rituparna_003.jpg', alt: 'Rituparna smiling softly with eyes downcast, pink flower and gold necklace', caption: '' },
  { src: '/images/portraits/rituparna_004.jpg', alt: 'Rituparna in a candid moment, gentle smile in her purple Banarasi', caption: '' },
];

// Legacy exports for backward compatibility
export const ceremonyPhotos = blessingPhotos;
export const receptionPhotos = couplePhotos;
export const portraitPhotos = familyPhotos;
export const preWeddingPhotos = feastPhotos;
