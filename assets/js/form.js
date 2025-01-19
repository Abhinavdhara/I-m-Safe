const formOpenBtn = document.querySelector("#get-started"),
    home = document.querySelector(".home"),
    formContainer = document.querySelector(".form_container"),
    formCloseBtn = document.querySelector(".form_close"),
    signupBtn = document.querySelector("#signup"),
    loginBtn = document.querySelector("#login"),
    pwShowHide = document.querySelectorAll(".pw_hide"),
    loginForm = document.querySelector(".login_form form"),
    signupForm = document.querySelector(".signup_form form");

// Open the login form
formOpenBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default link behavior
    home.classList.add("show");
});
formCloseBtn.addEventListener("click", () => home.classList.remove("show"));

// Password visibility toggle
pwShowHide.forEach((icon) => {
    icon.addEventListener("click", () => {
        let getPwInput = icon.parentElement.querySelector("input");
        if (getPwInput.type === "password") {
            getPwInput.type = "text";
            icon.classList.replace("uil-eye-slash", "uil-eye");
        } else {
            getPwInput.type = "password";
            icon.classList.replace("uil-eye", "uil-eye-slash");
        }
    });
});

// Switch to signup form
signupBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.add("active");
});

// Switch to login form
loginBtn.addEventListener("click", (e) => {
    e.preventDefault();
    formContainer.classList.remove("active");
});

// Login form submission
loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = loginForm.querySelector('input[type="email"]').value;
    const password = loginForm.querySelector('input[type="password"]').value;

    // Validate login details
    if (email && password) {
        window.location.href = "home.html";
    } else {
        alert("Please enter both email and password.");
    }
});

// Signup form submission
signupForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const email = signupForm.querySelector('input[type="email"]').value;
    const password = signupForm.querySelector('input[type="password"]').value;
    const confirmPassword = signupForm.querySelector('input[placeholder="Confirm password"]').value;

    // Signup details
    if (email && password && confirmPassword) {
        if (password === confirmPassword) {
            window.location.href = "home.html";
        } else {
            alert("Passwords do not match.");
        }
    } else {
        alert("Please fill in all fields.");
    }
});

