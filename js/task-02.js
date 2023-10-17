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

const createsLi = ingredients.map((element) => {
    const listLi = document.createElement("li");
    listLi.textContent = element;
    listLi.classList.add("item");
    return listLi;
});
listIngredients.append(...createsLi);
