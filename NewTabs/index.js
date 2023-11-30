"use strict"

const sites = [
    {
        name: "Google",
        url: "https://www.google.com/",
        buttonColor: "btn-warning"
    },
    {
        name: "W3Schools JS Docs",
        url: "https://www.w3schools.com/js",
        buttonColor: "btn-success"
    },
    {
        name: "Images Page",
        url: "images.html",
        buttonColor: "btn-primary"
    }
]

document.addEventListener("DOMContentLoaded", () => {
    const main = document.getElementById("content");
    main.classList.add("container");

    sites.forEach(site => {
        const newButton = document.createElement("button");

        newButton.innerText = site.name;
        newButton.classList.add("btn");
        newButton.classList.add(site.buttonColor);
        newButton.classList.add("m-3");

        newButton.addEventListener("click", () => {
            window.open(site.url, "_self");
        })

        main.appendChild(newButton);
    })
})