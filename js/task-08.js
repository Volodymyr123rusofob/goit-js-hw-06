const formLink = document.querySelector(".login-form");

const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.elements.email.value;
    const password = form.elements.password.value;
    if (email === "" || password === "") {
        alert("Всі поля мають бути заповненні");
    } else {
        const userOdject = {
            email: email,
            password: password,
        };
        console.log(userOdject);
        form.reset();
    }
};

formLink.addEventListener("submit", handleSubmit);
