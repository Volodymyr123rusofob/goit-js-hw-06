const inputLink = document.querySelector(
    "#font-size-control"
);
const spanLink = document.querySelector("#text");

const fontSizeUpAndDown = (event) => {
    const fontSize = event.target.value + "px";
    spanLink.style.fontSize = fontSize;
};

inputLink.addEventListener("input", fontSizeUpAndDown);
