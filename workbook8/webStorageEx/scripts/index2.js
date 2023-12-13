document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.role == "Student") {
        alert(`Welcome Student ${localStorage.userName}`)
    } else if (localStorage.role == "Teacher") {
        alert(`Welcome Instructor ${localStorage.userName}`)
    }
})