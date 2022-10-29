const signupBtn = document.getElementById('signupBtn');
const loginBtn = document.getElementById('loginBtn')

const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#username-login").value.trim();
    const password = document.querySelector("#password-login").value.trim();

    if (username && password) {
        const response = await fetch("/api/user/login", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
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

    const username = document.querySelector("#username-signup").value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    console.log(username)
    if (username && password) {
        const response = await fetch("/api/user/signup ", {
            method: "POST",
            body: JSON.stringify({
                username: username,
                password: password
            }),
            headers: { "Content-Type": "application/json" },
        });
        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Failed sign up attempt.")
        }
    }
};

loginBtn.addEventListener("click", loginFormHandler);

signupBtn.addEventListener("click", signupFormHandler);