document.addEventListener("DOMContentLoaded", () => {
    const enterButton = document.getElementById("enterButton");
    enterButton.addEventListener("click", enterButtonClicked);
})

function enterButtonClicked() {
    const userName = document.getElementById('userName').value;
    const student = document.getElementById('studentRadio');
    const teacher = docuemtn.getElementById('teacherRadio');

    localStorage.userName = userName;
    if (student.ariaChecked) {
        localStorage.role = "student";
    } else if (teacher.ariaChecked) {
        localStorage.role = "teacher";
    }
    console.log("I won't redirect you!")
    location.href = "information.html";
}