const textInput = document.querySelector(
    "#validation-input"
);

const validationValue = parseInt(
    textInput.getAttribute("data-length")
);

const changesBorder = (event) => {
    const isValid =
        event.currentTarget.value.length ===
        validationValue;
    textInput.classList.toggle("valid", isValid);
    textInput.classList.toggle("invalid", !isValid);
};

textInput.addEventListener("blur", changesBorder);
