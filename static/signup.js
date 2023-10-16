document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirmPassword').value;

    var errorMessage = '';

    if (password !== confirmPassword) {
        errorMessage = 'Passwords do not match!';
    } else if (password.length < 6) {
        errorMessage = 'Password must be at least 6 characters long.';
    }

    if (errorMessage) {
        document.getElementById('error-message').textContent = errorMessage;
    } else {
        document.getElementById('error-message').textContent = '';
        alert('Registration successful!');
        // You can add code here to send registration data to the server.
    }
});
