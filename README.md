# dakari.dev

The portfolio of **Teuku Dakari**, a UI/UX designer and computer science student at Northeastern University.

**Live site: [dakari.dev](https://dakari.dev)**

![The dakari.dev home page](docs/preview.jpg)

## Case studies

| Project | What it is | My role |
|---|---|---|
| [Melasma Clinic by Dr. Tompi](https://dakari.dev/projects/clinic.html) | The first website for a new chain of dermatology clinics in Indonesia | Website designer and developer |
| [City of Oakland: AI Document Accessibility Converter](https://dakari.dev/projects/oakland.html) | A tool that turns city documents into WCAG-compliant versions | UI designer and front-end developer, design system |
| [FitCheck](https://dakari.dev/projects/nus.html) | A fashion super-app concept, First Prize at the NUS School of Computing summer workshop | Team lead, Virtual Wardrobe, design system |

## Built with

- Plain HTML and CSS, with one small JavaScript file for the scroll fade-ins. No framework and no build step.
- [Fraunces](https://fonts.google.com/specimen/Fraunces) for headings and [DM Sans](https://fonts.google.com/specimen/DM+Sans) for body text.
- Hosted on [Vercel](https://vercel.com), which redeploys on every push to `main`.
- Built with help from Claude Code.

## Design notes

- **Accessible by default.** All text meets WCAG AA contrast, keyboard focus is always visible, headings follow a logical order, and every image has alt text.
- **Respects reduced motion.** If "Reduce motion" is turned on, all transitions and fade-ins are switched off.
- **One set of tokens.** Colors, type sizes, spacing (on an 8px scale), and motion all live as CSS variables at the top of `css/styles.css`.
- **Readable line lengths.** Body text is capped at about 75 characters per line.

## Project structure

```
.
├── index.html            # Home page: intro, selected work, about
├── projects/             # Case study pages
│   ├── clinic.html
│   ├── oakland.html
│   └── nus.html          # FitCheck
├── 404.html
├── css/styles.css        # All styles and design tokens
├── js/reveal.js          # Scroll fade-ins for case study sections
├── images/               # Covers, hero images, and process figures per project
├── assets/               # Resume and certificate PDFs
└── docs/preview.jpg      # Screenshot used in this README
```

## Run it locally

No install needed. Open `index.html` in a browser, or start a local server from the project folder:

```bash
python3 -m http.server 8000
```

Then visit http://localhost:8000.

## Credits

- **FitCheck** was designed with Li Ka Kit, Ji Caitong, and Chen Xiangning.
- **The City of Oakland project** was built with Anthony Bazhenov, Sun Choi, Audrey Tung, and Dani Luo, with Anh Nguyen as principal investigator and Professor Miguel Fuentes-Cabrera as mentor.
- Screenshots of client and team projects belong to their respective owners.

## License

The site's code is free to look through and learn from. The written content, images, and resume are © Teuku Dakari (and, for project screenshots, their respective owners) and may not be reused without permission.
