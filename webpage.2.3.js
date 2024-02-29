const form = document.querySelector("form"),
    nextbtn = form.querySelector(".nextbtn"),
    allInput = form.querySelectorAll(".first input");

nextbtn.addEventListener("click", () => {

    let isInputValid = true;

    allInput.forEach(input => {
        const inputValue = input.value.trim();


        switch (input.id) {
            case "email":
                if (!isValidEmail(inputValue)) {
                    alert("Invalid email address. Please enter a valid email.");
                    isInputValid = false;
                }
                break;
            case "phone":
                if (!isValidPhoneNumber(inputValue)) {
                    alert("Invalid phone number. Please enter a valid 10-digit phone number.");
                    isInputValid = false;
                }
                break;
            case "identity":
                if (!isValidIdentityNumber(inputValue)) {
                    alert("Invalid identity number. Please enter a valid 12-digit identity number.");
                    isInputValid = false;
                }
                break;
            default:
                if (inputValue === "") {
                    alert("Input is empty");
                    isInputValid = false;
                }
                break;
        }
    })
    ;
    if (isInputValid) {
        form.classList.add('secActive');
    }
});

// Function for email format
function isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
}









