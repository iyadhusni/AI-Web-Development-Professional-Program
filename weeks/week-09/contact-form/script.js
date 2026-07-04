const form = document.getElementById('contactForm');
const successMsg = document.getElementById('formSuccess');

const validators = {
  name: (v) => v.trim().length >= 2 || 'Name must be at least 2 characters.',
  email: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || 'Enter a valid email address.',
  message: (v) => v.trim().length >= 10 || 'Message must be at least 10 characters.',
};

function validateField(field) {
  const errorEl = document.getElementById(field.id + 'Error');
  const validate = validators[field.name];
  const result = validate(field.value);
  if (result === true) {
    errorEl.textContent = '';
    field.removeAttribute('aria-invalid');
    return true;
  }
  errorEl.textContent = result;
  field.setAttribute('aria-invalid', 'true');
  return false;
}

// Real-time validation on blur
['name', 'email', 'message'].forEach((id) => {
  const field = document.getElementById(id);
  field.addEventListener('blur', () => validateField(field));
});

// Submit handler
form.addEventListener('submit', async (e) => {
  e.preventDefault();

  let allValid = true;
  ['name', 'email', 'message'].forEach((id) => {
    if (!validateField(document.getElementById(id))) allValid = false;
  });

  if (!allValid) return;

  const submitBtn = form.querySelector('.btn--submit');
  submitBtn.disabled = true;
  submitBtn.textContent = 'Sending...';

  try {
    const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
      method: 'POST',
      body: new FormData(form),
      headers: { Accept: 'application/json' },
    });

    if (response.ok) {
      form.reset();
      form.hidden = true;
      successMsg.hidden = false;
    } else {
      alert('Something went wrong. Please try again.');
    }
  } catch {
    alert('Network error. Please check your connection.');
  } finally {
    submitBtn.disabled = false;
    submitBtn.textContent = 'Send Message';
  }
});
