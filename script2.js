const menuButton = document.querySelector('#menuButton');
const mobileMenu = document.querySelector('#mobileMenu');
const quoteForm = document.querySelector('#quoteForm');
const formStatus = document.querySelector('#formStatus');
const year = document.querySelector('#year');

if (menuButton && mobileMenu) {
  const closeMenu = ({ restoreFocus = false } = {}) => {
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Open navigation');
    mobileMenu.hidden = true;
    if (restoreFocus) menuButton.focus();
  };

  menuButton.addEventListener('click', () => {
    const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
    menuButton.setAttribute('aria-expanded', String(!isOpen));
    menuButton.setAttribute('aria-label', isOpen ? 'Open navigation' : 'Close navigation');
    mobileMenu.hidden = isOpen;
  });

  mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => closeMenu()));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && !mobileMenu.hidden) closeMenu({ restoreFocus: true });
  });
}

if (quoteForm && formStatus) {
  const fields = [...quoteForm.querySelectorAll('input, select, textarea')];

  const validateField = (field) => {
    const errorId = field.getAttribute('aria-describedby');
    const error = errorId ? document.getElementById(errorId) : null;
    const hasRequiredValue = !field.required || field.value.trim().length > 0;
    const valid = hasRequiredValue && field.validity.valid;

    if (valid) field.removeAttribute('aria-invalid');
    else field.setAttribute('aria-invalid', 'true');
    if (error) error.hidden = valid;
    return valid;
  };

  fields.forEach((field) => {
    field.addEventListener('blur', () => validateField(field));
    field.addEventListener('input', () => {
      if (field.hasAttribute('aria-invalid')) validateField(field);
    });
    field.addEventListener('change', () => {
      if (field.hasAttribute('aria-invalid')) validateField(field);
    });
  });

  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const invalidFields = fields.filter((field) => !validateField(field));

    formStatus.hidden = false;
    if (invalidFields.length) {
      formStatus.classList.add('is-error');
      formStatus.textContent = 'Complete the highlighted fields to prepare the quote request.';
      formStatus.focus();
      invalidFields[0].focus({ preventScroll: true });
      return;
    }

    formStatus.classList.remove('is-error');
    formStatus.textContent = 'Project details are ready. This demo does not send data yet—call +1 758 450 5997 for a live quote.';
    formStatus.focus();
  });
}

if (year) year.textContent = new Date().getFullYear();
