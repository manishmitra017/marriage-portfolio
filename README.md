# Rituparna & Shoumo — Wedding Portfolio

A premium wedding photo portfolio showcasing the Ashirwad ceremony of Rituparna and Shoumo, built with Next.js and deployed on AWS.

**Live at [ritusoumya.in](https://ritusoumya.in)**

## Features

- **103 curated photos** organized into 6 gallery sections
- **Masonry gallery layout** with CSS columns for natural photo heights
- **Full-screen hero photos** leading each gallery section
- **Parallax quote dividers** with Bengali and English text between sections
- **Interactive lightbox** for full-screen photo viewing
- **Dark mode** support with theme toggle
- **Smooth scroll navigation** with active section highlighting and scroll progress bar
- **Ken Burns animation** on the hero banner
- **Bengali typography** woven throughout captions and UI
- **Mobile responsive** with hamburger menu and adaptive layouts
- **Auto-generated galleries** — drop photos into folders, the build handles the rest
- **Static export** for fast CDN delivery

## Adding & Removing Photos

Photos are organized into folders under `public/images/`. To update the gallery:

1. **Add a photo** — Drop it into the right folder (e.g. `public/images/blessings/`)
2. **Remove a photo** — Delete the file from the folder
3. **Set alt text / caption** (optional) — Edit `_captions.json` in that folder

No code changes needed. The build script (`scripts/generate-gallery.mjs`) scans the folders and auto-generates the gallery data.

### Photo Folders

```
public/images/
├── blessings/     # Elders giving ashirwad on the prayer mat
├── couple/        # Couple portraits and garland exchange
├── signing/       # Document signing and formalities
├── family/        # Group photos and family portraits
├── portraits/     # Rituparna portrait photos
├── feast/         # Terrace dining and celebration meals
└── ashirwad/unused/  # Archive of unused photos
```

### Caption Format (`_captions.json`)

Each folder can have an optional `_captions.json` file. Photos listed here appear in this order; new photos not listed are appended alphabetically.

```json
{
  "photo_filename.jpg": {
    "alt": "Description for accessibility",
    "caption": "Caption shown on hover"
  }
}
```

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 15 (Static Export) |
| Language | TypeScript |
| Styling | Tailwind CSS 3.4 |
| Animations | Framer Motion 11 |
| Lightbox | yet-another-react-lightbox |
| Icons | react-icons (Feather) |
| Hosting | AWS S3 + CloudFront |
| DNS | AWS Route 53 |
| SSL | AWS Certificate Manager |
| IaC | AWS CDK v2 (TypeScript) |
| CI/CD | GitHub Actions |

## Development

```bash
# Install dependencies
pnpm install

# Start dev server (auto-generates gallery data)
pnpm dev

# Build for production (auto-generates gallery data)
pnpm build

# Regenerate gallery data manually
node scripts/generate-gallery.mjs

# Or use the convenience script
pnpm run:local
```

The dev server runs at [http://localhost:3000](http://localhost:3000).

## Project Structure

```
app/
  layout.tsx          # Root layout with fonts and metadata
  page.tsx            # Main page composing all sections
  globals.css         # Global styles, Ken Burns, scrollbar

components/
  Hero.tsx            # Full-screen photo hero with Ken Burns
  Navigation.tsx      # Fixed nav with active section tracking
  ScrollProgress.tsx  # Scroll progress bar
  OurStory.tsx        # Timeline with milestone cards
  GallerySection.tsx  # Section wrapper with featured hero photo
  PhotoGallery.tsx    # Masonry grid with lightbox
  ParallaxDivider.tsx # Parallax quote dividers
  SaveTheDate.tsx     # Coming soon card
  Footer.tsx          # Footer with back-to-top
  ThemeToggle.tsx     # Dark/light mode switch

hooks/
  useActiveSection.ts # IntersectionObserver for active nav

utils/
  galleryData.ts      # Auto-generated from photo folders

contexts/
  ThemeContext.tsx     # Dark mode context

scripts/
  generate-gallery.mjs # Scans photo folders → generates galleryData.ts

cdk/                  # AWS CDK infrastructure
  lib/wedding-portfolio-stack.ts
  bin/app.ts

public/images/        # Photo folders (see "Adding & Removing Photos")
```

## Gallery Sections

| Section | Photos | Description |
|---------|--------|-------------|
| The Blessings | 35 | Elders giving ashirwad on the prayer mat |
| Rituparna & Shoumo | 23 | Couple portraits and garland exchange |
| The Signing | 17 | Document signing and formalities |
| Family & Loved Ones | 17 | Group photos and family portraits |
| Rituparna | 4 | Portrait photos |
| The Feast | 7 | Terrace dining and celebration meals |

## Deployment

The site deploys automatically via GitHub Actions on push to `main`:

1. Builds the Next.js static export
2. Deploys CDK infrastructure (S3 bucket, CloudFront distribution)
3. Syncs build output to S3
4. Invalidates CloudFront cache

### Required GitHub Secrets

| Secret | Description |
|--------|-------------|
| `AWS_ACCESS_KEY_ID` | IAM access key with CDK deploy permissions |
| `AWS_SECRET_ACCESS_KEY` | IAM secret key |
| `DOMAIN_NAME` | Custom domain (ritusoumya.in) |
| `HOSTED_ZONE_ID` | Route 53 hosted zone ID |
| `CERTIFICATE_ARN` | ACM certificate ARN (us-east-1) |

### Architecture

```
GitHub push → GitHub Actions
  ├─ pnpm build  →  /out  (static HTML/CSS/JS)
  ├─ CDK deploy  →  S3 bucket + CloudFront distribution
  ├─ S3 sync     →  upload /out to bucket
  └─ CF invalidation → clear CDN cache
```

## License

All rights reserved. Photos and content are personal and not for redistribution.
