// Scroll-reveal: fades/slides each [data-reveal] element in the moment it enters the viewport
(function () {
  const revealEls = document.querySelectorAll('[data-reveal]');
  if (!revealEls.length) return;

  // Respect users who've asked their system to reduce motion: show everything immediately
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (prefersReducedMotion) {
    revealEls.forEach(el => el.classList.add('is-visible'));
    return;
  }

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        obs.unobserve(entry.target); // only animate in once per element
      }
    });
  }, { threshold: 0.15 });

  revealEls.forEach(el => observer.observe(el));
})();

// Lightbox: clicking a program photo or the flyer opens it larger in an overlay
(function () {
  const galleryImages = document.querySelectorAll('.gain-photo, .flyer');
  if (!galleryImages.length) return;

  const overlay = document.createElement('div');
  overlay.className = 'lightbox';
  overlay.hidden = true;
  overlay.innerHTML = `
    <button class="lightbox-close" aria-label="Close image">&times;</button>
    <img class="lightbox-image" alt="">
  `;
  document.body.appendChild(overlay);

  const lightboxImage = overlay.querySelector('.lightbox-image');
  const closeButton = overlay.querySelector('.lightbox-close');

  function openLightbox(img) {
    lightboxImage.src = img.src;
    lightboxImage.alt = img.alt;
    overlay.hidden = false;
    closeButton.focus();
  }

  function closeLightbox() {
    overlay.hidden = true;
    lightboxImage.src = '';
  }

  galleryImages.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => openLightbox(img));
  });

  closeButton.addEventListener('click', closeLightbox);
  overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeLightbox(); // click on the dark backdrop, not the image itself
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !overlay.hidden) closeLightbox();
  });
})();
