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

---

### 7. Review the code, then wire up the real photos and flyer

**Prompt:** Asked for a full review of the code so far (comment coverage + possible breakage), then to add the two missing comments, set up a file path for real photos/flyer before editing code, and give JavaScript recommendations to make the content/images stand out more. Followed up by adding the actual image files and asking to commit everything together.

**Built:** Reviewed `index.html`, `style.css`, and `script.js` — found no breaking bugs (valid tag structure, correct heading order, properly percent-encoded inline SVG data URIs) and two minor comment gaps, which were fixed (`--color-white` variable, `<head>` meta tags, and the `<script>` tag). Created an `images/` folder with an expected filename convention (`photo-1.jpg`, `photo-2.jpg`, `photo-3.jpg`, `flyer.jpg`). Gave JS recommendations (scroll-reveal fade-in and a photo lightbox as the top picks) without implementing yet. Once the real files were added, replaced the SVG placeholders in `index.html` with the real image paths, wrote descriptive alt text based on what's actually in each photo/flyer, added `loading="lazy"`, and adjusted the flyer's CSS aspect ratio to match its real proportions so `object-fit: cover` doesn't crop it. Added a `.gitignore` for `.DS_Store`.

---

### 8. Surface the flyer's facts as text, and compress the images

**Prompt:** Asked to fold the flyer's key details (cost, format, stipend, commitments, eligibility) into real text at the very top of the page — explicitly without adding a fourth section — and keep the flyer image itself at the end. Also asked to compress all four images to similar, easily-loadable sizes, with an eye toward the scroll-reveal and lightbox JavaScript planned for later.

**Built:** Added a `<dl class="quick-facts">` inside the `<header>` (not a new `<section>`), right after the intro paragraph, listing Cost, Format, Stipend, Commitments, and Eligibility as real, screen-reader-readable text pulled from the flyer. Styled it as a responsive 1/2-column grid of blue fact cards in `style.css`. Caught and fixed a mistake from the prior step: the flyer is actually portrait (1545×1999), not landscape as assumed, so the earlier `aspect-ratio: 4/3` would have cropped it badly — corrected to match its real proportions. Compressed all four images with `sips` (downscaled to a 1600px max dimension, JPEG quality tuned per file) to bring them from 0.4–6MB down to a consistent 316–416KB range, while keeping enough resolution for a larger lightbox view later.

---

### 9. Bullet-point facts, add the logo, and size everything up

**Prompt:** Asked to convert the quick-facts cards into plain bullet points within the intro area, add the organization's logo at the very top (being added to the images folder), and make the overall page — fonts and images — larger since it felt small and overly centered.

**Built:** Replaced the `<dl>`/card version of the quick facts with a plain `<ul class="quick-facts">` bullet list, still inside the `<header>`, styled with bolded green labels instead of separate blue cards. Added a logo placeholder (`.site-logo`, same inline-SVG-placeholder pattern used for the photos/flyer) centered above the headline — real file expected at `images/logo.png`. Sized the page up: bumped the root font size 12.5% so all rem-based text scales, widened the page's max-width from 720px to 960px, enlarged the h1/intro/section headings/theme headings, and increased the photo and flyer max-widths (200px→280px, 360px→460px). Verified the result at both desktop (1300px) and phone (500px) widths via screenshot before reporting back — not yet committed, pending confirmation the sizing looks right.

---

### 10. Wire up the real logo and commit the sizing pass

**Prompt:** Confirmed the logo file was added to `images/`, asked to wire it in at the top, commit everything from this round, push to main, and update the prompt log.

**Built:** Found `images/logo.png` was a 3300×3300 canvas with the actual logo (a horizontal icon + wordmark lockup) occupying only a thin strip in the middle — installed Pillow to detect the real content bounding box and cropped it down to 2760×682 (removing the excess transparent padding) so it wouldn't render tiny with huge empty margins. Swapped the SVG placeholder in `index.html` for the real `images/logo.png` and adjusted `.site-logo` in `style.css` to match its actual ~4:1 aspect ratio. Verified with a screenshot that it renders correctly at the top of the page, then committed and pushed everything from steps 9–10 (bullet-point facts, logo, larger sizing) to `main`.

---

### 11. Full code review, preview-card meta tags, and favicon

**Prompt:** Asked for a full review of the HTML/CSS for gaps (findings: photo cropping on the 4:3 boxes, brand header font never actually applied, borderline button-hover contrast, plus several minor nice-to-haves). Then asked to add meta tags for a social preview card, mentioned an `icon.png` was being added to use as the favicon "and where it makes sense," and asked for sample JavaScript for scroll-reveal and a photo lightbox — shown only, not added to `script.js` yet.

**Built:** Cropped `images/icon.png` to its actual circular-logo content (removing excess padding) and generated `icon-32.png`, `icon-180.png`, and `icon-512.png` from it. Added to `index.html`'s `<head>`: a `meta description`, Open Graph and Twitter Card tags (using `icon-512.png` as the preview image — noted that `og:image`/`twitter:image` will need to become absolute URLs once the site has a real domain), a favicon link (`icon-32.png`), and an apple-touch-icon link (`icon-180.png`). Provided sample scroll-reveal and lightbox JavaScript in chat for review — not yet written to `script.js`, pending decisions on which elements get the reveal treatment and confirmation on the small amount of accompanying CSS the lightbox needs.

---

### 12. Implement the scroll-reveal and lightbox JavaScript

**Prompt:** After asking for a plain-language explanation of how scroll-reveal works, approved the earlier suggestion for both which elements get the fade-in treatment and the lightbox CSS as shown.

**Built:** Added `data-reveal` attributes to the three `.theme` cards, the three `.gain-photo` images, and the `.flyer` image in `index.html` (bullet lists intentionally left out, per the earlier discussion, so they don't animate line-by-line). Added the `[data-reveal]`/`.is-visible` fade+slide CSS and the `.lightbox`/`.lightbox-image`/`.lightbox-close` overlay CSS to `style.css`. Wrote the actual scroll-reveal (IntersectionObserver, respects `prefers-reduced-motion`) and lightbox (click a photo/flyer to view larger, closes on click-outside/Escape/close button) JavaScript into `script.js`. Verified in a headless browser that reveal elements start correctly hidden below the fold and that no JavaScript errors occur on load.

---

### 13. Update the stipend and swap in the updated flyer

**Prompt:** Nonprofit feedback: the stipend is changing from $800 to $500, and a replacement flyer was on its way. Confirmed "cost" meant the stipend line, then replaced `images/flyer.jpg` with the new version.

**Built:** Looked at the new flyer rather than assuming only the stipend changed — confirmed everything else (Cost, Format, Commitments, Eligibility) is identical to the original. Updated the `Stipend` bullet in `index.html`'s quick-facts list from $800 to $500. Compressed the new flyer with the same settings used before (1600px max dimension, quality-tuned) so it stays consistent with the other images' file sizes; its dimensions matched the original flyer exactly, so no CSS aspect-ratio changes were needed. Verified the text update with a screenshot before committing.

---

### 14. Add a README and go line-by-line on comments

**Prompt:** Drafted README.md content describing the site, its purpose as a First Controlled Build for the Next Chapter — Fall 2026 cohort, and the constraints it was built under (approved after one round of feedback). Separately, asked for detailed comments throughout the HTML/CSS/JS explaining each line of code.

**Built:** Wrote `README.md` with a Purpose section (org link, class/cohort context, prompt-driven process pointing to this log) and a Constraints section (plain HTML/CSS/JS only, exactly 3 sections + 1 CTA, no invented content, no extra features, accessibility-first, brand fidelity). Rewrote `index.html`, `style.css`, and `script.js` with detailed comments explaining what each tag/attribute does in HTML, what each property does in CSS, and what each statement does in the JavaScript. Verified with a screenshot and a JS-error check that the comment-only rewrite didn't change how the page looks or behaves.

---

### 15. Final instructor-style review, then fix what it found

**Prompt:** Asked for a final pass over the completed build "with an eye like a coding instructor" and a brief summary of anything missed. Findings: the CTA still pointed to `#`, two of the three Section 2 photos were being cropped (16:9 photos forced into a 4:3 box), and the lightbox was missing proper dialog accessibility semantics. Asked to fix all three — provided the real Google Form URL for the CTA, confirmed the cropping should be fixed so photos render in full, and asked for the dialog semantics fix with a plain-English explanation.

**Built:** Pointed the CTA button at the real application Google Form, opening in a new tab (`target="_blank" rel="noopener noreferrer"`) so visitors don't lose the info page. Removed the fixed `aspect-ratio`/`object-fit: cover` from `.gain-photo` so all three photos render at their true proportions with nothing cropped off (tradeoff: the three photos in the row are no longer the same height). Added modal dialog semantics to the lightbox in `script.js`: `role="dialog"`, `aria-modal="true"`, and `aria-label` on the overlay so screen readers announce it correctly; a focus trap so Tab/Shift+Tab can't escape into the page behind the open lightbox; and focus restoration so closing it returns keyboard focus to wherever it was before opening. Verified all three fixes with screenshots and a JS-error check.

---

### 16. Even out the photo row

**Prompt:** Noticed photo-3 was now visibly taller than the other two (a side effect of fixing the cropping in step 15) and asked to crop the top and bottom of that actual photo a bit so its proportions match the other two.

**Built:** Looked at photo-3.jpg first to find a safe crop line, then cropped it from 1600×1199 down to 1600×900 — trimming mostly empty ceiling from the top and empty floor from the bottom, keeping everyone in the photo fully in frame. It now shares the exact same 1600×900 dimensions as photo-1 and photo-2, so all three render at matching sizes in the row automatically — no CSS or HTML changes needed, just the image file itself. Verified with a screenshot.

---

### 17. Final header edit

**Prompt:** Last edit — change the top of the header to say "Alianza Leadership Program," and fold the old headline ("Lead From Your Values. Build Power in Community.") into the intro paragraph below it.

**Built:** Changed the `<h1>` to "Alianza Leadership Program" and merged the former headline into the intro paragraph as its opening sentences, in sentence case to match surrounding body text: "Lead from your values. Build power in community. A leadership program for emerging leaders ready to strengthen their voice, lead with authenticity, and create change alongside others." Verified with a screenshot.
