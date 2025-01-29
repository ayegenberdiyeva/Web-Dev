const passwordInput = document.getElementById('password');
const toggleButton = document.getElementById('toggleButton');

passwordInput.addEventListener('input', () => {
    toggleButton.style.display = passwordInput.value ? 'block' : 'none';
});

toggleButton.addEventListener('click', (e) => {
    e.preventDefault()
    if (passwordInput.type == 'password') {
        passwordInput.type = 'text';
        toggleButton.textContent = 'Hide';
    } else  {
        passwordInput.type = 'password';
        toggleButton.textContent = 'Show';
    }
});