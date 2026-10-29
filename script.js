const menuButton = document.querySelector('#menuButton');
const mobileMenu = document.querySelector('#mobileMenu');
const quoteForm = document.querySelector('#quoteForm');
const formStatus = document.querySelector('#formStatus');

if (menuButton && mobileMenu) {
  const closeMenu = () => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    mobileMenu.hidden = true;
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    mobileMenu.hidden = isOpen;
  });

  mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      menuButton.focus();
    }
  });
}

if (quoteForm && formStatus) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const requiredFields = [...quoteForm.querySelectorAll('[required]')];
    requiredFields.forEach((field) => field.removeAttribute('aria-invalid'));
    const invalid = requiredFields.filter((field) => !field.value.trim());

    if (invalid.length) {
      invalid.forEach((field) => field.setAttribute('aria-invalid', 'true'));
      formStatus.hidden = false;
      formStatus.style.background = '#fff0f0';
      formStatus.style.borderColor = '#d71920';
      formStatus.style.color = '#7b0d11';
      formStatus.textContent = 'Please complete the required fields before sending your request.';
      formStatus.focus();
      return;
    }

    formStatus.hidden = false;
    formStatus.removeAttribute('style');
    formStatus.textContent = 'Your project details are ready. This demo does not send data yet—please call +1 758 450 5997 to request a live quote.';
    formStatus.focus();
  });
}

document.querySelector('#year').textContent = new Date().getFullYear();
