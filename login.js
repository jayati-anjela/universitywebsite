const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");
const loginSuccessMsg = document.getElementById("login-success-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "jayati" && password === "pass1234") {
        loginSuccessMsg.style.opacity = 1;
    } else if (username === "jayati" && password != "pass1234") {
        loginErrorMsg.style.opacity = 1;
    } else {
        alert("We encountered an error. :(");
    }
})
