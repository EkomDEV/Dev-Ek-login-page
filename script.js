document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form from submitting normally

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMessage = document.getElementById('errorMessage');

    // Simple form validation
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in both fields.';
    } else {
        errorMessage.textContent = '';
        // Simulate successful login
        alert('Login successful!');
        // In a real application, you would typically send a request to the server here
    }
});
