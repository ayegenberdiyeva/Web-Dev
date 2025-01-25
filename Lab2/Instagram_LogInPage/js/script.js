const form = document.getElementById('login-form');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const submitButton = document.getElementById('submit-button');

function validateForm() {
  if (usernameInput.ariaValueMax.trim() !== '' && passwordInput.value.trim() !== '') {
    submitButton.classList.add('active');
    submitButton.disabled = false;
  } else {
    submitButton.classList.remove('active');
    submitButton.disabled = true;
  }
}

usernameInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);