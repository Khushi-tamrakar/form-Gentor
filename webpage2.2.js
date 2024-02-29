const pwshowHid = document.querySelector(".box"),
    pwshowHide = document.querySelector(".showHidePw"),
    pwFields = document.querySelectorAll(".password"),
    signupLinks = document.querySelectorAll(".signup-link"),
    loginLinks = document.querySelectorAll(".login-link");

// code for show/hide password and change icon
pwshowHide.addEventListener("click", () => {
    pwFields.forEach(pwField => {
        if (pwField.type === "password") {
            pwField.type = "text";
            pwshowHide.forEach(icon => {
                icon.classList.replace("uil-eye-slash", "uil-eye");
            });
        } else {
            pwField.type = "password";
            pwshowHide.forEach(icon => {
                icon.classList.replace("uil-eye", "uil-eye-slash");
            });
        }
    });
});
function validateAndNavigate(targetPage) {
    const emailInput = document.querySelector('.form input[type="text"]');
    const passwordInput = document.querySelector('.form input[type="password"]');

    if (emailInput.value.trim() === "" || passwordInput.value.trim() === "") {
        alert("Email and password fields cannot be empty");
    } else if (!isValidEmail(emailInput.value.trim())) {
        alert("Invalid email address. Please enter a valid email.");
    } else if (!isValidPassword(passwordInput.value.trim())) {
        alert("Invalid password. Password must be at least 8 characters long and include at least one uppercase letter, one number, and one special character.");
    } else {
        window.location.href = targetPage;
    }
}

// Function for email format
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}

// Function for password format
function isValidPassword(password) {
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

// event listeners to signup 
signupLinks.forEach(link => {
    link.addEventListener("click", () => {
        validateAndNavigate("webpage2.3.html");
    });
});

// event listeners to login
loginLinks.forEach(link => {
    link.addEventListener("click", () => {
        validateAndNavigate("webpage2.3.html");
    });
});
function validateAndNavigate(targetPage, formId) {
    var form = document.getElementById(formId);

    // Validation for empty fields
    for (var i = 0; i < form.elements.length - 1; i++) {
        if (form.elements[i].type !== "button" && form.elements[i].value.trim() === "") {
            alert("All fields must be filled.");
            return false;
        }
    }

    // If all validations pass, navigate to the target page
    window.location.href = targetPage;
    return false;}

// function changecolor(id) {
//     document.body.style.background = document.getElementById(id).innerHTML;
// }


