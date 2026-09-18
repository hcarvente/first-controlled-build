// Scroll-reveal: fades/slides each [data-reveal] element in the moment it enters the viewport

// Wrapping this whole block in (function () { ... })() is called an "IIFE" (Immediately Invoked Function
// Expression) — it runs right away, and keeps every variable inside it private so it can't clash with
// variables in the lightbox script below, even though both scripts live in the same file.
(function () {
  // querySelectorAll finds every element on the page with a data-reveal attribute (the theme cards,
  // photos, and flyer) and returns them as a list we can loop over.
  const revealEls = document.querySelectorAll('[data-reveal]');

  // If there's nothing to reveal (e.g. this HTML changes in the future), stop here instead of setting
  // up an observer for zero elements.
  if (!revealEls.length) return;

  // Respect users who've asked their system to reduce motion: show everything immediately
  // matchMedia lets JavaScript read the same kind of media query CSS uses. Here we check the visitor's
  // OS-level "reduce motion" accessibility setting.
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    // classList.add adds a CSS class to an element — this immediately jumps every element to its
    // "revealed" state (see the .is-visible rule in style.css) with no animation.
    revealEls.forEach(el => el.classList.add('is-visible'));
    return; // exit early — skip setting up the scroll-based animation entirely
  }

  // IntersectionObserver is a built-in browser feature that watches elements and runs a callback
  // function whenever one scrolls into (or out of) view — without us having to manually track
  // scroll position or do any math ourselves.
  const observer = new IntersectionObserver((entries, obs) => {
    // "entries" is a list of elements whose visibility just changed. We check each one:
    entries.forEach(entry => {
      if (entry.isIntersecting) { // true = this element is now visible on screen
        entry.target.classList.add('is-visible'); // trigger the CSS fade/slide-in animation
        obs.unobserve(entry.target); // stop watching it — only animate in once per element
      }
    });
  }, { threshold: 0.15 }); // threshold: 0.15 means "fire once 15% of the element is visible", not just 1 pixel

  // Tell the observer to actually start watching each of our elements
  revealEls.forEach(el => observer.observe(el));
})();

// Lightbox: clicking a program photo or the flyer opens it larger in an overlay

(function () {
  // Select every photo in the "What You'll Gain" row plus the flyer image — these are the clickable images.
  const galleryImages = document.querySelectorAll('.gain-photo, .flyer');
  if (!galleryImages.length) return;

  // Build the lightbox overlay entirely in JavaScript (it doesn't exist in index.html) since it's only
  // ever needed after a click, not when the page first loads.
  const overlay = document.createElement('div'); // creates a new, empty <div> element in memory
  overlay.className = 'lightbox';                // gives it the CSS class that styles it as a full-screen overlay
  overlay.hidden = true;                          // starts hidden — nobody's clicked a photo yet
  // innerHTML lets us insert a chunk of HTML at once: a close button and an (empty for now) image
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Close image">&times;</button>
    <img class="lightbox-image" alt="">
  `;
  document.body.appendChild(overlay); // actually adds the overlay to the visible page

  // Grab references to the two elements we just created, so we can update/control them later
  const lightboxImage = overlay.querySelector('.lightbox-image');
  const closeButton = overlay.querySelector('.lightbox-close');

  // Runs when any gallery image is clicked
  function openLightbox(img) {
    lightboxImage.src = img.src;   // copy the clicked photo's image file into the big lightbox image
    lightboxImage.alt = img.alt;   // copy its alt text too, so it's still accessible when enlarged
    overlay.hidden = false;         // un-hide the overlay, revealing it on screen
    closeButton.focus();            // move keyboard focus to the close button, for keyboard/screen-reader users
  }

  // Runs when the lightbox should close (close button, background click, or Escape key)
  function closeLightbox() {
    overlay.hidden = true;
    lightboxImage.src = ''; // clear the image so the browser isn't holding onto a large photo needlessly
  }

  // Attach a click listener to every gallery image
  galleryImages.forEach(img => {
    img.style.cursor = 'zoom-in'; // changes the mouse cursor to a magnifying glass on hover, hinting it's clickable
    img.addEventListener('click', () => openLightbox(img)); // when clicked, open the lightbox with THIS image
  });

  // Clicking the × button closes the lightbox
  closeButton.addEventListener('click', closeLightbox);

  // Clicking the dark background (but not the photo itself) also closes it
  overlay.addEventListener('click', (e) => {
    // e.target is whatever element was actually clicked. If it's the overlay itself (the dark backdrop)
    // rather than the image sitting on top of it, we close — clicking the photo itself does nothing here.
    if (e.target === overlay) closeLightbox();
  });

  // Pressing the Escape key closes the lightbox too, but only if it's currently open
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.hidden) closeLightbox();
  });
})();
