const signupBtn = document.getElementById('signupBtn');

const signupFormHandler = async (event) => {
    event.preventDefault();

    const username = document.querySelector("#userInput").value.trim();
    const password = document.querySelector('#passInput').value.trim();
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
        console.log(response.ok)
        if (response.ok) {
            console.log("redirecting")
            document.location.replace("/");
        } else {
            console.log("fuck!!!!!!!!")
            alert("Failed sign up attempt.")
        }
    }
};

signupBtn.addEventListener("click", signupFormHandler);