# Profile Card

A small, accessible, responsive Profile Card component built with plain HTML, CSS, and JavaScript.

## Live Demo

[View Live](https://profile-cardd-hng.netlify.app/) 

## Features

- Semantic HTML5 markup (`article`, `figure`, `nav`, `section`)
- Fully accessible — WCAG AA contrast, `aria-live`, `aria-atomic`, `:focus-visible` keyboard styles
- Live epoch time in milliseconds, updating every second
- Responsive layout — mobile-first, adapts at 800px for tablet/desktop
- All interactive elements keyboard-navigable
- Social links open in a new tab with `rel="noopener noreferrer"`

## Tech Stack

- HTML5
- CSS3 (Flexbox, Grid, custom properties)
- Vanilla JavaScript (ES Modules)

## Project Structure

```
stage-1b-profile-card/
├── assets/
│   ├── avatar.jpeg
│   ├── linkedin.svg
│   ├── instagram.svg
│   └── dev-to.svg
├── js/
│   └── main.js
├── index.html
├── reset.css
├── styles.css
└── README.md
```

## Running Locally

No build step or dependencies required.

1. Clone the repository

```bash
git clone https://github.com/your-username/stage-1b-profile-card.git
```

2. Navigate into the project folder

```bash
cd stage-1b-profile-card
```

3. Open `index.html` in your browser

```bash
# Option A — just open the file directly
open index.html

# Option B — use a local dev server (recommended, required for ES Modules)
npx serve .
# or
npx live-server .
```

> **Note:** Because `main.js` uses `type="module"`, opening `index.html` directly via `file://` will block the script due to CORS restrictions. Use a local server (Option B) for the epoch time to work correctly.

## Data Testids

All required `data-testid` attributes are present for automated testing:

| Element           | `data-testid`                |
| ----------------- | ---------------------------- |
| Profile card root | `test-profile-card`          |
| User name         | `test-user-name`             |
| Biography         | `test-user-bio`              |
| Epoch time (ms)   | `test-user-time`             |
| Avatar image      | `test-user-avatar`           |
| Social links list | `test-user-social-links`     |
| LinkedIn link     | `test-user-social-linkedin`  |
| Instagram link    | `test-user-social-instagram` |
| Dev.to link       | `test-user-social-dev`       |
| Hobbies list      | `test-user-hobbies`          |
| Dislikes list     | `test-user-dislikes`         |

## Accessibility

- Meaningful `alt` text on avatar image
- `aria-live="polite"` and `aria-atomic="true"` on the live epoch clock
- `aria-label` on the name heading
- Visible `:focus-visible` outline on all keyboard-focusable elements
- Color contrast meets WCAG AA for all text

## Deployment

This project is deployed on Netlify. To deploy your own copy:

1. Push the repo to GitHub
2. Go to [netlify.com](https://netlify.com) → **Add new site** → **Import from Git**
3. Select your repo, leave build settings empty (no build command needed)
4. Click *Deploy*