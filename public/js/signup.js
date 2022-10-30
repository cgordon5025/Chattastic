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
                username,
                password
            }),
            headers: { "Content-Type": "application/json" },
        });
        console.log(response.ok)
        if (response.ok) {
            console.log("redirecting")
            document.location.replace("/");
        } else {
        
            alert("Failed sign up attempt.")
        }
    }
};

const nameOfUser = () => {
    return username;
}
signupBtn.addEventListener("click", signupFormHandler);