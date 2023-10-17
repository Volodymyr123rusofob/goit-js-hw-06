const buttonAdds = document.querySelector(
    'button[data-action="increment"]'
);

const buttonSubtracts = document.querySelector(
    'button[data-action="decrement"]'
);

const counterDisplay = document.querySelector("#value");

let currentCounterValue = 0;

const adds = () => {
    currentCounterValue += 1;
    counterDisplay.textContent = currentCounterValue;
};

const subtracts = () => {
    currentCounterValue -= 1;
    counterDisplay.textContent = currentCounterValue;
};

buttonAdds.addEventListener("click", adds);

buttonSubtracts.addEventListener("click", subtracts);
