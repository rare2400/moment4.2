"use strict";

//check if the user is authenticated
if(!localStorage.getItem("user-token")) {
    window.location.href = "index.html";
}