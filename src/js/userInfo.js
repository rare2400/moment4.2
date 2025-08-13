"use strict";

//fetch users token and id
const token = localStorage.getItem("user-token");
const userId = localStorage.getItem("userId");

//check if token and userid is available
if (userId && token) {
    fetchUserInfo(token, userId);
} else {
    //redirect to login-page
    window.location.href = "login.html";
    console.log("userID or token not found");
}

//fetch userinfo from api
async function fetchUserInfo(token, userId) {
    if (!token || !userId) {
        console.error("No token or userID provided");
        window.location.href = "login.html";
        return;
    }

    try {
        const response = await fetch(`https://moment4-backend.onrender.com/api/users/${userId}`, {
            method: "GET",
            headers: {
                "authorization": "Bearer " + token
            },
        });

        if (!response.ok) {
            throw new Error("Failed to fetch user info");
        }

        const user = await response.json();

        //update DoOM with the userinfo
        document.getElementById("welcome-msg").textContent = `Välkommen tillbaka ${user.firstName}!`;

        const userInfoElement = document.getElementById("user-info");
        userInfoElement.textContent = `Användarnamn: ${user.username}, E-post: ${user.email}`;

    } catch (error) {
        window.location.href = "login.html";
        console.error("Kunde inte hämta användarinformation:", error);
    }
}