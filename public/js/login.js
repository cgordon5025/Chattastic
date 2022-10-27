
const loginFormHandler = async (event) => {
event.preventDefault();
  
const userId = document.querySelector("#email-login").value.trim();
const password = document.querySelector("#password-login").value.trim();

if (email && password) {
    const reponse = await fetch("/api/users/login", {
        method:"POST",
        body: JSON.stringify({ email, password }),
        headers: { "Content-Type": "application/json" },
    });

    if (response.ok) {
        document.location.replace("/");
    } else {
        alert("Failed login attempt.");
    }
  }  
};

const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector("username-signup").value.trim();
    const email = document.querySelector("#email-signup");
    const password = document.querySelector('#password-signup').value.trim();

    if (username && email && password) {
        const reponse = await fetch("/controller/homeroutes", {
            method: "POST",
            body: JSON.stringify({ username, email, password}),
            headers: { "Content-Type": "application/json"},
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Failed sign up attempt.")
        }
    }
};
  
document
    .querySelector(".login-form")
    .addEventListener("submit", loginFormHandler);

document
    .querySelector(".sugnup-form")
    .addEventListener("submit", signupFormHandler);