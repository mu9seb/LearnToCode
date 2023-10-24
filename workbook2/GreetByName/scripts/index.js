window.onload = init();

function init() {
    const greenBtn = document.getElementById("greenBtn")
    greenBtn.onclick = onGreetUserBtnClicked;
    alert("Hello User, input your name");
}

function onGreetUserBtnClicked() {
    const nameFieldInput = document.getElementById("nameField");
    let greetingMessage = "Hello " + nameFieldInput.value;
    alert(greetingMessage);
}
