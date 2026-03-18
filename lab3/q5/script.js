var isVisible = false;

function togglePassword() {
    var input  = document.getElementById("passwordInput");
    var button = document.getElementById("toggleBtn");
    var status = document.getElementById("statusMsg");

    if (isVisible === false) {
        input.type = "text";
        button.textContent = "Hide";
        status.textContent = "● Password is visible";
        status.className = "visible";
        isVisible = true;
    } else {
        input.type = "password";
        button.textContent = "Show";
        status.textContent = "● Password is hidden";
        status.className = "hidden";
        isVisible = false;
    }
}