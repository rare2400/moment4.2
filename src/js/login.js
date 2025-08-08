"use strict";

const loginForm = document.getElementById("login-form");
const registerBtn = document.getElementById("register-btn");

window.onload = init;

function init() {

    if (loginForm) {
        loginForm.addEventListener("submit", loginUser);
    }

}

registerBtn.addEventListener("click", () => {
    window.location.href = "register.html";
})


async function loginUser(e) {
    e.preventDefault();

    let usernameInput = document.getElementById("username").value;
    let passwordInput = document.getElementById("password").value;
    let errorMsg = document.getElementById("error-msg");

    if (!usernameInput || !passwordInput) {
        errorMsg.textContent = "Användarnamn och lösenord krävs!";
        return;
    }

    let user = {
        username: usernameInput,
        password: passwordInput
    }

    try {
        const response = await fetch("http://127.0.0.1:3000/api/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)
        })

        if (response.ok) {
            const data = await response.json();

            localStorage.setItem("user-token", data.response.token);
            localStorage.setItem("userId", data.response.user._id);
            window.location.href = "addpost.html";

        } else {
            throw new Error("Login failed");
        }

    } catch (error) {
        console.error("Error during login:", error);
        errorMsg.textContent = "Felaktigt användarnamn eller lösenord";
    }
}