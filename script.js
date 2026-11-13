const menuButton = document.querySelector('#menuButton');
const primaryNav = document.querySelector('#primaryNav');
const quoteForm = document.querySelector('#quoteForm');
const formStatus = document.querySelector('#formStatus');

if (menuButton && primaryNav) {
  const dropdowns = [...primaryNav.querySelectorAll('.nav-dropdown')];
  const isMenuOpen = () => menuButton.getAttribute('aria-expanded') === 'true';

  const setMenuOpen = (open) => {
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    if (!open) dropdowns.forEach(dropdown => { dropdown.open = false; });
  };

  menuButton.addEventListener('click', () => setMenuOpen(!isMenuOpen()));
  primaryNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) setMenuOpen(false);
  });
  document.addEventListener('click', (event) => {
    if (!primaryNav.contains(event.target) && !menuButton.contains(event.target)) {
      setMenuOpen(false);
      return;
    }
    if (!event.target.closest('.nav-dropdown')) {
      dropdowns.forEach(dropdown => { dropdown.open = false; });
    }
  });
  document.addEventListener('keydown', (event) => {
    if (event.key !== 'Escape') return;
    const openDropdown = dropdowns.find(dropdown => dropdown.open);
    if (openDropdown) {
      openDropdown.open = false;
      openDropdown.querySelector('summary').focus();
    } else if (isMenuOpen()) {
      setMenuOpen(false);
      menuButton.focus();
    }
  });
  window.matchMedia('(min-width: 1024px)').addEventListener('change', () => setMenuOpen(false));

  const contactLink = primaryNav.querySelector('[data-contact-link]');
  if (contactLink) {
    const homeLink = primaryNav.querySelector('[aria-current="page"]');
    const updateCurrentLink = () => {
      if (window.location.hash === '#contact') {
        homeLink.removeAttribute('aria-current');
        contactLink.setAttribute('aria-current', 'location');
      } else {
        contactLink.removeAttribute('aria-current');
        homeLink.setAttribute('aria-current', 'page');
      }
    };
    updateCurrentLink();
    window.addEventListener('hashchange', updateCurrentLink);
  }
}

const projectLedger = document.querySelector('.project-ledger');
if (projectLedger) {
  const openProject = (hash) => {
    const project = document.getElementById(hash.slice(1));
    if (project?.matches('details.project-record') && projectLedger.contains(project)) {
      project.open = true;
    }
  };

  openProject(window.location.hash);
  window.addEventListener('hashchange', () => openProject(window.location.hash));
  document.addEventListener('click', (event) => {
    const link = event.target.closest('a[href^="#"]');
    if (link) openProject(link.hash);
  });
}

const heroVideo = document.querySelector('#heroVideo');
if (heroVideo) {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
  let heroVisible = false;

  const updateHeroPlayback = () => {
    if (!heroVisible || reducedMotion.matches) {
      heroVideo.pause();
      if (reducedMotion.matches && heroVideo.hasAttribute('src')) {
        heroVideo.removeAttribute('src');
        heroVideo.load();
      }
      return;
    }

    if (!heroVideo.hasAttribute('src')) heroVideo.src = heroVideo.dataset.src;
    heroVideo.play().catch(() => {
      // The poster is already visible if the browser blocks playback.
    });
  };

  window.addEventListener('load', () => {
    new IntersectionObserver(([entry]) => {
      heroVisible = entry.isIntersecting;
      updateHeroPlayback();
    }).observe(heroVideo);
    reducedMotion.addEventListener('change', updateHeroPlayback);
  }, { once: true });
}

if (quoteForm && formStatus) {
  const submitButton = quoteForm.querySelector('[data-submit-button]');
  const submitLabel = quoteForm.querySelector('[data-submit-label]');
  const sourceField = quoteForm.querySelector('[name="source"]');

  const showFormStatus = (message, state) => {
    formStatus.hidden = false;
    formStatus.classList.toggle('is-error', state === 'error');
    formStatus.classList.toggle('is-success', state === 'success');
    formStatus.textContent = message;
    formStatus.focus();
  };

  quoteForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    if (!quoteForm.checkValidity()) {
      quoteForm.reportValidity();
      return;
    }

    if (sourceField) {
      sourceField.value = window.location.href;
    }

    const originalLabel = submitLabel?.textContent;
    if (submitButton) {
      submitButton.disabled = true;
      submitButton.setAttribute('aria-busy', 'true');
    }
    if (submitLabel) submitLabel.textContent = 'Sending…';
    formStatus.hidden = true;

    try {
      const response = await fetch(quoteForm.action, {
        method: 'POST',
        body: new FormData(quoteForm),
        headers: { Accept: 'application/json' }
      });
      const data = await response.json().catch(() => ({}));

      if (!response.ok || data.success === false) {
        throw new Error(data.message || 'We could not send your request.');
      }

      quoteForm.reset();
      if (sourceField) sourceField.value = window.location.href;
      window.hcaptcha?.reset?.();
      showFormStatus('Thanks—your enquiry has been sent. Our team will be in touch shortly.', 'success');
    } catch (error) {
      showFormStatus('We could not send your request. Please try again, or call +1 758 450 5997 or +1 758 719 6705.', 'error');
    } finally {
      if (submitLabel && originalLabel) submitLabel.textContent = originalLabel;
      if (submitButton) {
        submitButton.disabled = false;
        submitButton.removeAttribute('aria-busy');
      }
    }
  });
}

const testimonialCarousel = document.querySelector('[data-testimonial-carousel]');

if (testimonialCarousel) {
  const slides = [...testimonialCarousel.querySelectorAll('[data-testimonial-slide]')];
  const dots = [...testimonialCarousel.querySelectorAll('[data-testimonial-dot]')];
  const previousButton = testimonialCarousel.querySelector('[data-testimonial-prev]');
  const nextButton = testimonialCarousel.querySelector('[data-testimonial-next]');
  const status = testimonialCarousel.querySelector('[data-testimonial-status]');
  let currentIndex = 0;

  const showTestimonial = (index) => {
    currentIndex = (index + slides.length) % slides.length;

    slides.forEach((slide, slideIndex) => {
      slide.hidden = slideIndex !== currentIndex;
    });

    dots.forEach((dot, dotIndex) => {
      if (dotIndex === currentIndex) {
        dot.setAttribute('aria-current', 'true');
      } else {
        dot.removeAttribute('aria-current');
      }
    });

    if (status) {
      status.textContent = `${currentIndex + 1} of ${slides.length}`;
    }
  };

  previousButton?.addEventListener('click', () => showTestimonial(currentIndex - 1));
  nextButton?.addEventListener('click', () => showTestimonial(currentIndex + 1));

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => showTestimonial(index));
  });

  testimonialCarousel.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowLeft') {
      event.preventDefault();
      showTestimonial(currentIndex - 1);
      previousButton?.focus();
    }

    if (event.key === 'ArrowRight') {
      event.preventDefault();
      showTestimonial(currentIndex + 1);
      nextButton?.focus();
    }
  });
}

const footerYear = document.querySelector('#year');
if (footerYear) footerYear.textContent = new Date().getFullYear();
