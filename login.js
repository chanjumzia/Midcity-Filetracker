/**
 * Handles the login form submission.
 */
document.addEventListener('DOMContentLoaded', () => {
    /**
     * The login form element.
     * @type {HTMLFormElement|null}
     */
    const loginForm = document.getElementById('login-form');

    if (loginForm) {
        loginForm.addEventListener('submit', (event) => {
            // Prevent the default form submission behavior.
            event.preventDefault();

            // Redirect to the welcome page.
            // In a real application, you would perform validation and authentication here.
            window.location.href = 'welcome.html';
        });
    } else {
        console.warn('Login form with id "login-form" not found.');
    }
});
