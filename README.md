# UI/UX Portfolio

A static HTML/CSS portfolio site. No framework, no build step, no dependencies.

## Structure

```
.
├── index.html              # Home: intro, project grid, about
├── 404.html                # Not-found page (used automatically by Vercel & Netlify)
├── favicon.svg             # TD monogram (switches to a dark tile in dark-mode browsers)
├── apple-touch-icon.png    # Home-screen icon for iPhone/iPad
├── css/
│   └── styles.css          # All styles. Colors, type, spacing, motion are variables at the top.
├── js/
│   └── reveal.js           # Fades case study sections in on scroll (the only JS on the site)
├── projects/
│   ├── clinic.html         # Case study 1 — Melasma skincare clinic
│   ├── oakland.html        # Case study 2 — City of Oakland accessibility converter
│   └── nus.html            # Case study 3 — NUS workshop (lighter treatment)
├── images/
│   ├── og-image.png        # 1200×630 link-preview image (name card; swap for your own if you like)
│   ├── placeholders/       # Temporary placeholder SVGs — delete once everything is swapped
│   ├── clinic/             # Put real images for each project here
│   ├── oakland/
│   └── nus/
└── assets/
    └── resume.pdf          # ← ADD THIS. The Resume links point here.
```

## Swapping in real content

1. **Find every placeholder:** search the project for `PLACEHOLDER`.
   ```bash
   grep -rn "PLACEHOLDER" --include="*.html" .
   ```
2. **Contact links** (already filled in from your resume): email, LinkedIn and GitHub live in the
   footer on every page (marked with `SHARED FOOTER` comments). Change them with find-and-replace across files.
3. **Resume:** `assets/resume.pdf` is your resume. Replace that file whenever you update it.
4. **Images:** put files in `images/<project>/` and update the `src`. Each `<img>` has a comment
   suggesting a filename and aspect ratio:
   | Slot | Aspect ratio | Suggested size |
   |---|---|---|
   | Home card cover | 4:3 | 1200×900 |
   | Case study hero | 16:9 | 2400×1350 |
   | Process figure | any (16:10 shown) | 1440px wide |
   | Headshot | 1:1 | 400×400 |

   Also update the `width`/`height` attributes to match your image (prevents layout shift) and write a real `alt`.
   Card cover images use `alt=""` on purpose — the card title already describes the link.
5. **Live links:** the clinic page links to melasmaclinicbydrtompi.com. Oakland and NUS have
   commented-out buttons you can enable if a public link or prototype becomes available.

### Retheming

Everything visual is driven by CSS variables at the top of `css/styles.css`.
Note there are two accent tokens: `--color-accent` (#C1673B) for decorative lines/highlights and
`--color-accent-strong` (#A4522B) for link text and buttons — the lighter terracotta is only ~3.5:1
on the cream background, so text uses the darker shade to meet WCAG AA (4.5:1).

### Fonts

- **Fraunces** (serif), used for page titles and section headings (`h1`, `h2`)
- **DM Sans** (sans-serif), used for everything else

Both load from Google Fonts via the `<link>` tags in each page's `<head>`. To swap a font, change the
Google Fonts URL on every page and update `--font-serif` / `--font-sans` at the top of `css/styles.css`.

## Preview locally

Just open `index.html` in a browser. Or run a local server:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Deploy

### 1. Push to GitHub

Create an empty repo on GitHub (no README), then:

```bash
git init
git add .
git commit -m "Initial portfolio scaffold"
git branch -M main
git remote add origin https://github.com/<your-username>/<repo-name>.git
git push -u origin main
```

### 2a. Vercel

1. Go to [vercel.com/new](https://vercel.com/new) and sign in with GitHub.
2. Import your repo.
3. Framework preset: **Other**. Leave build command and output directory empty.
4. Click **Deploy**.

### 2b. Netlify

1. Go to [app.netlify.com](https://app.netlify.com) → **Add new site** → **Import an existing project** → GitHub.
2. Pick your repo.
3. Leave build command empty; publish directory: `.` (or leave blank).
4. Click **Deploy**.

Either way, every push to `main` redeploys automatically, and you can add a custom domain in the project's domain settings.

### 3. After your first deploy: fix link previews

Link previews (the card that shows up when you paste your URL into LinkedIn, Slack or iMessage) need
full URLs. Every page has `og:` meta tags pointing at `https://your-domain.com`. Once you know your real
address (e.g. `teukudakari.vercel.app` or your own domain), find-and-replace `https://your-domain.com`
across all HTML files, then push. You can test the result with LinkedIn's
[Post Inspector](https://www.linkedin.com/post-inspector/).

## Craft details (for reference)

- **Hover:** links and buttons fade color over 200ms; project card images scale to 1.02×.
- **Focus:** keyboard focus shows a terracotta ring (mouse clicks don't). On project cards the ring wraps the whole card.
- **Scroll reveal:** case study sections fade up 8px as they enter the viewport. If JavaScript is off, content just shows normally.
- **Reduced motion:** if someone has "Reduce motion" turned on in their OS, all transitions, scaling and fade-ins are switched off.
- Motion timing lives in `--duration` / `--ease` at the top of `styles.css`.
