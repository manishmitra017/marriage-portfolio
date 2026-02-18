# Rituparna & Shoumo — Wedding Portfolio

A premium wedding photo portfolio showcasing the Ashirwad ceremony of Rituparna and Shoumo, built with Next.js and deployed on AWS.

**Live at [ritusoumya.in](https://ritusoumya.in)**

## Features

- **99 curated photos** organized into 5 gallery sections: Blessings, Couple, Signing, Family & Feast
- **Masonry gallery layout** with CSS columns for natural photo heights
- **Full-screen hero photos** leading each gallery section
- **Parallax quote dividers** with Bengali and English text between sections
- **Interactive lightbox** for full-screen photo viewing
- **Dark mode** support with theme toggle
- **Smooth scroll navigation** with active section highlighting and scroll progress bar
- **Ken Burns animation** on the hero banner
- **Bengali typography** woven throughout captions and UI
- **Mobile responsive** with hamburger menu and adaptive layouts
- **Static export** for fast CDN delivery

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

# Start dev server
pnpm dev

# Build for production
pnpm build

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
  galleryData.ts      # All 99 photos with captions

contexts/
  ThemeContext.tsx     # Dark mode context

cdk/                  # AWS CDK infrastructure
  lib/wedding-portfolio-stack.ts
  bin/app.ts

public/images/ashirwad/  # 99 ceremony photos
```

## Gallery Sections

| Section | Photos | Description |
|---------|--------|-------------|
| The Blessings | 35 | Elders giving ashirwad on the prayer mat |
| Rituparna & Shoumo | 23 | Couple portraits and garland exchange |
| The Signing | 17 | Document signing and formalities |
| Family & Loved Ones | 17 | Group photos and family portraits |
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
