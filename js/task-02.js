const ingredients = [
    "Potatoes",
    "Mushrooms",
    "Garlic",
    "Tomatos",
    "Herbs",
    "Condiments",
];
const listIngredients =
    document.querySelector("#ingredients");

ingredients.forEach((element) => {
    const createsLi = document.createElement("li");
    createsLi.textContent = element;
    createsLi.classList.add("item");
    listIngredients.append(createsLi);
});
