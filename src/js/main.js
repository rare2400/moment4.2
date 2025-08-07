/** Moment 4 DT207G
 * Frontend-applikation med användarhantering
 * Av Ramona Reinholdz
 * rare2400
 */

"use strict";

const menu = document.getElementById("menu");
const postList = document.getElementById("posts");


window.onload = init;

function init() {
    changeMenu();

    if (postList) {
        fetchPosts();
    }

}

//dynamic menu based on wether the user is logged in or not
function changeMenu() {

    if (localStorage.getItem("user-token")) {
        menu.innerHTML = `
        <li><button class="log-out-btn">Logga ut</button></li>
        <li><a href="addpost.html">Skriv inlägg</a></li>
        `
    } else {
        menu.innerHTML = `
        <li><a href="login.html">Logga in</a></li>
        <li><a href="register.html">Registrera konto</a></li>
        `;
    }

    const logOutBtn = document.querySelector(".log-out-btn");

    if (logOutBtn) {
        logOutBtn.addEventListener("click", () => {
            localStorage.removeItem("user-token");
            window.location.href = "login.html";
        });
    }
}

//fetch posts from API
async function fetchPosts() {
    try {
        const response = await fetch("http://127.0.0.1:3000/api/posts")

        if (response.ok) {
            const data = await response.json();
            displayPosts(data);
        }
    } catch (error) {
        console.log("Error fetching data:", error);
    }
}

//display fetched posts from API
async function displayPosts(data) {
    postList.innerHTML = "";
    
    if(data.length === 0) {
        postList.textContent = "Det finns inga inlägg att visa";
        return;
    }

    data.forEach(post => {
        const title = document.createElement("h3");
        const content = document.createElement("p");
        const sign = document.createElement("p");

        title.textContent = post.title;
        content.textContent = post.content;
        sign.textContent = `${post.sign} - ${new Date(post.date).toLocaleDateString()}`;

        postList.appendChild(title);
        postList.appendChild(content);
        postList.appendChild(sign);
    });
}