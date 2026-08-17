let container = document.getElementById("thank-you-message");
let form = document.getElementById("inquiry-form");

form.addEventListener("submit", onSubmit);

function onSubmit(event) {
	event.preventDefault();

	const data = new FormData(form);
	const dataObj = Object.fromEntries(data.entries());

	console.log("our data:", dataObj);

	form.reset();

	let name = dataObj.name;
	let email = dataObj.email;
	let phone = dataObj.phone;
	let comments = dataObj.comments;
	let favflavor = dataObj["coffee-flavor"];
	let interest = dataObj.interest;

	console.log(name);
	console.log(email);
	console.log(phone);
	console.log(comments);
	console.log(favflavor);
	console.log(interest);

	let message = `Thank you ${name}! We appreciate your interest in ${interest}. Your favorite coffee flavor is ${favflavor} and your comments are ${comments}. We will soon contact you at ${email} or ${phone}.`;

	let messagePara = document.createElement("p");
	messagePara.textContent = message;
	container.appendChild(messagePara);
}