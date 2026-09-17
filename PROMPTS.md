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

---

### 4. Add explanatory comments

**Prompt:** Add comment lines throughout the code marking what each section does, and keep doing this for every piece of code going forward.

**Built:** Added comments to `index.html` (hero, each of the three sections, and the CTA) and `style.css` (color/sizing variables, reset, focus state, hero, layout, each section's styles, CTA button, media query). This commenting practice will continue for all future HTML/CSS/JS in this project.

---

### 5. Apply the brand color palette

**Prompt:** Supplied Alianza for Opportunity's official brand guidelines (PDF) and stacked logo, asked for a review of the colors and a recommended layout that uses the brand palette without any one color overwhelming the page — sample code only, no file edits yet.

**Built:** Reviewed the guidelines: primary colors blue `#64B1F2`, green `#037033`, orange `#FA641A`; secondary pink `#FFB7CF`, cream `#F4E9D7`; fonts Serat Ultra (logo), Anton (headers), Open Sauce (body); logo-on-light-background rule (blue & green version). Ran WCAG contrast checks and found blue and orange both fail as normal body/link text on a light background, so proposed reserving them for decorative use (underlines, hover states) rather than text, with green carrying headings/links/CTA. Shared sample CSS for review — no files changed in this step.

---

### 6. Decide open questions, add image placeholders, and apply the pass

**Prompt:** Chose near-black for body text (with brand colors elsewhere) and a free Google Fonts lookalike for the body font (Open Sauce isn't available there). Also asked whether adding 3 fixed photos in Section 2 and a program flyer image in Section 3 would affect the color scheme, then asked to apply the brand color pass and add image placeholders.

**Built:** Applied the full brand color pass to `style.css` (cream page background, green headings/links/CTA, blue decorative underlines and photo/flyer borders, pink theme cards, orange CTA hover state, near-black `#1a1a1a` body text) and linked Google's Open Sans font in `index.html` as the Open Sauce substitute. Added a fixed 3-photo row to Section 2 (`.gain-photos`) and a flyer image to Section 3 (`.flyer`), both using inline SVG placeholders as `src` (clearly labeled in alt text) so real images can be swapped in later without restructuring the layout.
