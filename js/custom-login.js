let container = document.getElementById("welcome-message");
let form = document.getElementById("login-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
	event.preventDefault();

	const data = new FormData(form);
	const dataObj = Object.fromEntries(data.entries());

    console.log("our data:", dataObj);
    
    form.reset();
    
	let name = dataObj.name;
	let email = dataObj.email;
	let password = dataObj.password;

	console.log(name);
	console.log(email);
	console.log(password);

	let message = `Welcome, ${name}! You are logged in!`;

	let messagePara = document.createElement("p");
	messagePara.textContent = message;
	container.appendChild(messagePara);
}