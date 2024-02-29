function validateForm() {
    var fullName = document.getElementById('full-name').value;
    var username = document.getElementById('username').value;
    var email = document.getElementById('email').value;
    var phoneNumber = document.getElementById('phone-number').value;
    var password = document.getElementById('password').value;
    var confirmPassword = document.getElementById('confirm-password').value;
    var gender = document.querySelector('input[name="gender"]:checked');

    // Validation for email
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    // Validation for password
    var passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,10}$/;
    if (!passwordPattern.test(password)) {
        alert("Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character, and be between 8 to 10 characters.");
        return false;
    }

    // Validation for phone number
    var phoneNumberPattern = /^\d{10}$/;
    if (!phoneNumberPattern.test(phoneNumber)) {
        alert("Phone number must be 10 digits long and contain only numbers.");
        return false;
    }

    if (!fullName || !username || !email || !phoneNumber || !password || !confirmPassword || !gender) {
        alert("Please fill in all the fields.");
        return false;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // If all validations pass, redirect to the next page
    window.location.href = "webpage2.1.html";
    return false;
}
