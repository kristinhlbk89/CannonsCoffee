const form = document.querySelector("#inquiry-form");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.querySelector("#name").value;
    const email = document.querySelector("#email").value;
    const phone = document.querySelector("#phone").value;
    const comments = document.querySelector("#comments").value;
    const favflavor = document.querySelector("#coffee-flavor").value;

    const interest = document.querySelector('input[name="interest"]:checked').value;

    console.log(name);
    console.log(email);
    console.log(phone);
    console.log(comments);
    console.log(favflavor);
    console.log(interest);

    const message = `
        Thank you ${name}! We appreciate your interest in ${interest}.
        Your favorite coffee flavor is ${favflavor} and your comments are ${comments}.
        We will soon contact you at ${email} or ${phone}.
    `;

    const thankYouMessage = document.querySelector("#thank-you-message");
    thankYouMessage.textContent = message;
});