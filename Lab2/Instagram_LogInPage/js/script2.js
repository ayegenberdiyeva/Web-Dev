const userNameInput = document.getElementById('username');
const passwordInput1 = document.getElementById('password');
const submitButton = document.getElementById('submit-btn');

function validateForm() {
    const username = userNameInput.value.trim();
    const password = passwordInput1.value.trim();

    if (username.length > 0 && password.length >= 8) {
        submitButton.style.opacity = '1';
        submitButton.disabled = false;
    } else {
        submitButton.style.opacity = '0';
        submitButton.disabled = true;
    }
}

userNameInput.addEventListener('input', validateForm);
passwordInput1.addEventListener('input', validateForm);