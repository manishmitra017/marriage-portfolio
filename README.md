# 💍 Wedding Photo Portfolio

A beautiful, responsive photo gallery website to celebrate a very special wedding day.

Built with the same stack as [my-resume](https://manishmitra.com):
**Next.js 15 · TypeScript · Tailwind CSS · Framer Motion · AWS CDK · GitHub Actions**

## Getting Started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Adding Photos

1. Drop photos into `public/images/<category>/` folders:
   - `public/images/ceremony/`
   - `public/images/reception/`
   - `public/images/portraits/`
   - `public/images/pre-wedding/`

2. Register them in `utils/galleryData.ts`:
   ```ts
   export const ceremonyPhotos: GalleryPhoto[] = [
     { src: '/images/ceremony/img1.jpg', alt: 'Exchange of vows', caption: 'The vows' },
   ];
   ```

3. Done! Run `pnpm dev` to preview.

## Personalise

Edit these files:
| File | What to change |
|------|----------------|
| `components/Hero.tsx` | Names, date, venue, tagline |
| `components/OurStory.tsx` | Timeline milestones |
| `app/layout.tsx` | Page title & meta description |
| `tailwind.config.ts` | Colour palette |

## Deploy to AWS

### Prerequisites
- AWS account with CDK bootstrapped (`npx cdk bootstrap`)
- Domain name (optional — site works on CloudFront URL without one)
- ACM certificate in `us-east-1` (if using custom domain)

### GitHub Secrets required
| Secret | Value |
|--------|-------|
| `AWS_ACCESS_KEY_ID` | IAM key with CDK deploy permissions |
| `AWS_SECRET_ACCESS_KEY` | Corresponding secret |
| `DOMAIN_NAME` | *(optional)* e.g. `ourwedding.com` |
| `CERTIFICATE_ARN` | *(optional)* ACM cert ARN from `us-east-1` |

Push to `main` → GitHub Actions builds & deploys automatically.

## Architecture

```
GitHub push → GitHub Actions
  ├─ pnpm build  →  /out  (static HTML/CSS/JS)
  ├─ CDK deploy  →  S3 bucket + CloudFront distribution
  ├─ S3 sync     →  upload /out to bucket
  └─ CF invalidation → clear CDN cache
```
