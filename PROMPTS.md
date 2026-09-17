# Prompt Log

A running record of the prompts given to build this one-page website, and what was built or changed in response to each one. Kept for instructor review of the development process.

---

### 1. Set up the workflow

**Prompt:** Set up a step-by-step, prompt-driven workflow for building a one-page HTML/CSS/JS website, with each prompt and what was built logged in a separate file for instructor review.

**Built:** Agreed on the workflow — one prompt at a time, implemented incrementally, no getting ahead of instructions. Created this file (`PROMPTS.md`) to log each prompt alongside a short note on what was built or changed in response.

---

### 2. Create the project files

**Prompt:** Create individual HTML, CSS, and JavaScript files to work in within the current folder.

**Built:** Created `index.html` (basic HTML5 boilerplate with the page title set, linked to `style.css` in the `<head>` and `script.js` before the closing `</body>` tag), an empty `style.css`, and an empty `script.js`. No content or styling added yet — left blank for the next step.

---

### 3. Build the Alianza Leadership Program page

**Prompt:** Build a simple, responsive one-page site for Alianza for Opportunity's Alianza Leadership Program — headline, intro sentence, exactly three content sections (What You'll Learn, What You'll Gain During the Program, Opportunities After Completion), and one CTA button to the application. Full content and constraints supplied (accessible heading order, no invented claims, no extra features like nav/testimonials/forms). Application URL not yet available — asked to identify gaps before coding.

**Built:** Flagged the missing application URL and a few smaller notes before writing code; user confirmed using `#` as a placeholder for now. Filled in `index.html` with the exact supplied copy: h1 headline + intro paragraph in a `<header>`, then three `<section>` elements (accessible heading order h1 → h2 → h3, `aria-labelledby` on each section) — the three workshop themes as articles under "What You'll Learn," a bulleted list under "What You'll Gain During the Program," and the verified-only list under "Opportunities After Completion" — followed by the "Apply to the Program" CTA link. Added matching styles in `style.css`: mobile-first responsive layout, centered hero, card-style theme blocks, a neutral accessible color palette (no brand colors were supplied), and visible `:focus-visible` outlines for keyboard navigation. No JS needed for this step.
