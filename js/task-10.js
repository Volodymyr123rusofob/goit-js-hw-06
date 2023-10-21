const linkInput = document.querySelector("input");
const butonCreate = document.querySelector("[data-create]");
const butonDestroy = document.querySelector(
    "[data-destroy]"
);
const divBox = document.querySelector("#boxes");

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, 0)}`;
}

const createBoxes = (amount) => {
    let size = 30;
    const divBoxNew = [];
    for (let i = 0; i < amount; i += 1) {
        const createDi = document.createElement("div");
        createDi.style.width = size + "px";
        createDi.style.height = size + "px";
        createDi.style.backgroundColor =
            getRandomHexColor();
        size += 10;
        divBoxNew.push(createDi);
    }
    divBox.append(...divBoxNew);
};

const destroyBoxes = () => {
    divBox.innerHTML = "";
};

butonCreate.addEventListener("click", () => {
    createBoxes(Number(linkInput.value));
});
butonDestroy.addEventListener("click", destroyBoxes);
