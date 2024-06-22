document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('signInForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        // Check if the password is correct
        if (password === '0000') {
            // Redirect to success page
            window.location.href = 'success.html';
        } else {
            // Display error message or handle incorrect password scenario
            document.getElementById('access-message').textContent = 'Invalid Password. Please contact the administrator';
        }
    });
});