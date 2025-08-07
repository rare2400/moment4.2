/** Moment 4 DT207G
 * Frontend-applikation med användarhantering
 * Av Ramona Reinholdz
 * rare2400
 */

"use strict";


const addPost = document.getElementById("add-post");

window.onload = init;

function init() {

    if (addPost) {
        addPost.addEventListener("submit", createPost);
    } else {
        console.log("addPost form not found");
    }
}

//create a new post
async function createPost(e) {
    e.preventDefault();

    //fetch input values
    let titleInput = document.getElementById("title").value;
    let contentInput = document.getElementById("content").value;
    let signInput = document.getElementById("sign").value;
    let errorMsg = document.getElementById("error-msg");

    //validate required input
    if (!titleInput || !contentInput || !signInput) {
        errorMsg.textContent = "Fyll i titel och text till inlägget!";
        return;
    }

    let post = {
        title: titleInput,
        content: contentInput,
        sign: signInput || "Anonym"
    }

    const token = localStorage.getItem("user-token");

    //POST new post to API
    try {
        const response = await fetch("http://127.0.0.1:3000/api/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "authorization": "Bearer " + token
            },
            body: JSON.stringify(post)
        });

        if (response.ok) {
            const data = await response.json();
            console.log(data);

            //message to user
            errorMsg.textContent = "Inlägget är publicerat";

            //clear form
            addPost.reset();

        } else {
            errorMsg.textContent = "Ett fel uppstod vid publiceringen av inlägget";
            throw new Error("Post creation failed");
        }

    } catch (error) {
        console.log("Något blev fel när inlägget skapades:", error);
        errorMsg.textContent = "Ett fel uppstod vid publiceringen av inlägget";
    }
}