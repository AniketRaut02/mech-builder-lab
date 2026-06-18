## Portfolio Redesign — Aniket Raut, Gameplay Programmer

A single-scroll, cinematic dark portfolio that positions Aniket as a systems-minded Unity gameplay programmer. Inspired by Remedy / Naughty Dog / Riot studio sites, not generic dev portfolios.

### Visual direction

- **Theme**: Very dark charcoal background (`#0A0B0D` / `oklch(0.16 0.005 240)`), layered surfaces (`#111317`, `#15181D`), soft grain texture.
- **Accent**: Electric teal `#5EEAD4` used sparingly — buttons, hover glows, focus rings, key numerals.
- **Secondary**: Soft grays `#9AA3AD`, `#5B626B` for body / metadata.
- **Typography**: Space Grotesk (display, large bold headings, tight tracking) + Inter (body). Headings up to clamp(3rem, 7vw, 6.5rem).
- **Surfaces**: subtle glassmorphism (4–8% white tint, 12px blur, hairline 1px border at 8% white). Soft teal glow only on hover.
- **Motion**: Framer Motion. Slow easing `[0.22, 1, 0.36, 1]`, 500–800ms. Section fade/slide-up on scroll. Smooth lift + glow on cards. No bouncing, no particles, no HUD.

### Page structure (single scroll)

1. **Top nav** — fixed, glassmorphic, anchor links (Work, Case Studies, Experience, Skills, About, Contact) + "Available" pill.
2. **Hero**
   - Background: muted/blurred looping showreel placeholder `<video>` with dark gradient overlay + vignette.
   - "● Available for opportunities" badge.
   - H1: `Aniket Raut` (display), eyebrow `Gameplay Programmer`.
   - Subtitle copy as specified.
   - CTAs: "Explore Projects" (teal), "Contact Me" (ghost).
   - Stats row: 3+ Years Unity · 2 Internships · 10+ Prototypes · Custom AI Frameworks.
3. **Featured Projects** — centerpiece. Asymmetric large-card grid (6 cards, mixed spans). Each card:
   - Default: thumbnail image + title + role chips.
   - Hover: scale 1.02, lift `-6px`, teal soft glow, thumbnail crossfades into autoplaying muted looping `<video>` (or animated diagram for tech projects).
   - Order: Behaviour Tree FW → RE4 Camera + QTE → Physics System → Survival Horror → Awaiting Discharge → 2D Horror.
4. **Technical Case Studies** — accordion list, mini-article layout when expanded: Overview · Problem · Architecture · Challenges · Solutions · Tech stack · Code snippet · Media · GitHub · Performance notes. Three entries (Behaviour Tree, RE4 Camera, Physics). Draft professional placeholder copy from user's brief.
5. **Experience** — vertical timeline, clean cards (role · org · dates · impact bullets emphasizing reusable systems / AI / architecture / collaboration).
6. **Skills** — grouped cards (Gameplay Programming, AI Systems, Tools & Architecture, Languages, Engines, Version Control, Optimization). Display as chips. No bars, no %, no emojis.
7. **About** — single column, large statement headline + 2 supporting paragraphs focused on AI / systems / mechanics / architecture / optimization.
8. **Contact** — large headline, primary email button → `anishuraut@gmail.com`, plus LinkedIn / GitHub / Instagram / Resume placeholder links (clearly marked TODO).
9. **Footer** — minimal, name + copyright + back-to-top.

### Asset strategy

Placeholders only:
- Hero showreel + project hover videos: short generated cinematic video stubs or muted CC0 looping clips referenced as `<video>` with `data-todo` swap markers.
- Project thumbnails: generated atmospheric stills (dark, cinematic).
- Clear `{/* TODO: replace with real gameplay clip */}` comments next to every media slot.

### Technical plan

- **Stack**: existing TanStack Start + Tailwind v4 + shadcn. Single route `src/routes/index.tsx`.
- **Fonts**: `bun add @fontsource/space-grotesk @fontsource/inter`, imported in `src/router.tsx` or a small client setup file; tokens registered in `@theme` in `src/styles.css`.
- **Design tokens**: extend `src/styles.css` `:root` (dark by default) with `--background`, `--surface-1/2`, `--accent` (teal), `--accent-glow`, `--border-hairline`, custom radii and shadows (`--shadow-elegant`, `--glow-accent`).
- **Dependencies**: `bun add framer-motion`.
- **Components** under `src/components/portfolio/`:
  - `Nav.tsx`, `Hero.tsx`, `ShowreelBackground.tsx`
  - `FeaturedProjects.tsx` + `ProjectCard.tsx` (handles thumbnail→video crossfade on hover)
  - `CaseStudies.tsx` + `CaseStudyItem.tsx` (uses shadcn `Accordion`)
  - `Experience.tsx`, `Skills.tsx`, `About.tsx`, `Contact.tsx`, `Footer.tsx`
  - `SectionHeading.tsx`, `Reveal.tsx` (Framer Motion in-view wrapper)
- **Data**: typed arrays in `src/components/portfolio/data.ts` for projects, case studies, experience, skills.
- **SEO**: update route `head()` with title "Aniket Raut — Unity Gameplay Programmer", matching meta description, og:title/description.
- **Accessibility**: respect `prefers-reduced-motion` (disable hover-video autoplay and large transitions), keyboard-focus rings in teal, semantic landmarks, alt text on all media.

### Out of scope (this pass)

- Real gameplay videos / final thumbnails (placeholders with swap markers).
- Backend, CMS, analytics.
- Separate routes / case-study deep-link pages (single-scroll as chosen).
- Light theme.
