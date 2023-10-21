const button = document.querySelector(".change-color");
const body = document.querySelector("body");
const valueColor = document.querySelector(".color");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}
function background() {
    body.style.backgroundColor = getRandomHexColor();
    valueColor.textContent = body.style.backgroundColor;
}

button.addEventListener("click", background);
