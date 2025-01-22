// Smooth scrolling animation for product cards
const productCards = document.querySelectorAll('.product-card');

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    }
  });
});

productCards.forEach((card) => {
  observer.observe(card);
});

// Color picker preview
const colorPicker = document.getElementById('colorPicker');
const colorPreview = document.getElementById('colorPreview');

colorPicker.addEventListener('input', () => {
  colorPreview.style.backgroundColor = colorPicker.value;
});

// Customer registration form submission
const registrationForm = document.getElementById('registrationForm');
const responseMessage = document.getElementById('responseMessage');

registrationForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;

  // Simulating form submission
  responseMessage.textContent = `Thank you, ${name}! We've received your details at ${email}.`;
  registrationForm.reset();
});
