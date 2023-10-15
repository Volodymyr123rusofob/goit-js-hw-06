const buttonAdds = document.querySelector(
    'button[data-action="increment"]'
);

const buttonSubtracts = document.querySelector(
    'button[data-action="decrement"]'
);

const result = document.querySelector("#value");

let counterValue = 0;

const adds = () => {
    counterValue += 1;
    result.textContent = counterValue;
};

const subtracts = () => {
    counterValue -= 1;
    result.textContent = counterValue;
};

buttonAdds.addEventListener("click", adds);

buttonSubtracts.addEventListener("click", subtracts);
console.log(counterValue);
