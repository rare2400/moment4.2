/** Moment 4 DT207G
 * Frontend-applikation med användarhantering
 * Av Ramona Reinholdz
 * rare2400
 */

"use strict";

const createAccountForm = document.getElementById("create-account-form");

    if (createAccountForm) {
        createAccountForm.addEventListener("submit", createAccount);
    }

async function createAccount(e) {
    e.preventDefault();

    let usernameInput = document.getElementById("username").value;
    let firstNameInput = document.getElementById("firstName").value;
    let lastNameInput = document.getElementById("lastName").value;
    let emailInput = document.getElementById("email").value;
    let passwordInput = document.getElementById("password").value;
    let errorMsg = document.getElementById("error-msg");

    if (!usernameInput || !passwordInput || !firstNameInput || !lastNameInput || !emailInput) {
        errorMsg.textContent = "Alla fält behöver fyllas i!";
        return;
    }

    let user = {
        username: usernameInput,
        firstName: firstNameInput,
        lastName: lastNameInput,
        email: emailInput,
        password: passwordInput
    }

    try {
        const response = await fetch("https://moment4-backend.onrender.com/api/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user)
        });

        if (response.ok) {
            window.location.href = "index.html";

        } else {
            errorMsg.textContent = "Ett fel uppstod vid skapandet av kontot";
            throw new Error("Account creation failed");
        }

    } catch (error) {
        console.log("Något blev fel när kontot skapades:", error);
        errorMsg.textContent = "Ett fel uppstod vid skapandet av kontot";
    }
}