document.addEventListener("DOMContentLoaded", () => {
    let submitButton = document.getElementById("submitButton");
    submitButton.addEventListener("click", loadUsers)

    let userInput = document.getElementById("userNameInput");
    userInput.addEventListener("change", displayUserInfo)
})

function loadUsers() {
    fetch("https://jsonplaceholder.typicode.com/users")
            .then(response => response.json())
            .then(users => {
                console.log(users)

                let userSelect = document.getElementById("userNameInput");

                users.forEach(user => {
                    let option = new Option(user.name, user.id);
                    userSelect.appendChild(option);
                })
            })
}

function displayUserInfo() {
    let userSelect = document.getElementById("userNameInput")
    let id = userSelect.value;

    let url = `https://jsonplaceholder.typicode.com/users/${id}`;

    let details = document.getElementById("userNameDisplay");
    details.innerHTML = ""

    fetch(url).then(response => response.json())
              .then(user => {
                // display info

                let title = document.createElement("h1");
                title.innerText = user.name;

                details.appendChild(title)
              })
}