const textInput = document.querySelector("#name-input");
const output = document.querySelector("#name-output");
const changeValue = (event) => {
    const inputValue = event.currentTarget.value;
    if (inputValue !== "") {
        output.textContent = event.currentTarget.value;
    } else {
        output.textContent = "Anonymous";
    }
};
textInput.addEventListener("input", changeValue);
