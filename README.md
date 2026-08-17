# Tide Signal

Tide Signal is an immersive editorial climate observatory about the moving edge between land and sea. It turns tide data, coastal field notes, and historical observations into a tactile one-page experience rather than a conventional analytics dashboard.

## Technology

- Semantic HTML5
- Dependency-free CSS with responsive layout and reduced-motion support
- Vanilla JavaScript for the generated SVG chart, navigation, reveal transitions, archive feedback, and newsletter interaction
- Google Fonts: Fira Sans and Fira Code

## Run locally

Because this is a static site, no build step is required. From this folder, run:

```bash
python -m http.server 8000
```

Then open `http://localhost:8000` in a browser.

## Project structure

- `index.html` - page content, semantic sections, and accessible controls
- `styles.css` - design tokens, responsive layout, visual compositions, and motion
- `script.js` - tide chart rendering and small interactive behaviors
- `prompt.md` - original project brief

## Major features

- Responsive desktop/mobile navigation
- Animated hero waveform with reduced-motion fallback
- Interactive tide states: rising, high tide, and falling
- SVG chart rendered from local data with accessible labeling
- Responsive field-note cards with CSS-built visual illustrations
- Archive rows with live toast feedback
- Newsletter form with inline success state
- Keyboard-visible focus states and skip link
