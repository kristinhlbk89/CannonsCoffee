const form = document.querySelector("#login-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;

    console.log(name);
    console.log(email);
    console.log(password);

    const message = `Welcome, ${name}! You are logged in!`;

    const welcomeMessage = document.querySelector("#welcome-message");
    welcomeMessage.textContent = message;
});