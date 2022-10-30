const loginBtn = document.getElementById('loginBtn')

const loginFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#userInput").value.trim();
    const password = document.querySelector("#passInput").value.trim();

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



loginBtn.addEventListener("click", loginFormHandler);

