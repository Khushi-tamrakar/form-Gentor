function validateAndNavigate(destination) {
    const emailInputs = document.querySelectorAll('input[type="email"]');
    const passwordInputs = document.querySelectorAll('input[type="password"]');
    let isInputValid = true;

    emailInputs.forEach(input => {
        const email = input.value.trim();
        if (email === "") {
            isInputValid = false;
            alert("Email input field is empty");
        } else if (!isValidEmail(email)) {
            isInputValid = false;
            alert("Invalid email address. Please enter a valid email.");
        }
    });

    passwordInputs.forEach(input => {
        const password = input.value.trim();
        if (password === "") {
            isInputValid = false;
            alert("Password input field is empty");
        } else if (!isValidPassword(password)) {
            isInputValid = false;
            alert("Invalid password. Password must be at least 8 characters long and include at least one alphabet, one number, and one special character.");
        }
    });

    if (isInputValid) {
        window.location.href = "webpage2.5.html";
    }
}
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}
function isValidPassword(password) {
    const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*cter[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

