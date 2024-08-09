const form = document.getElementById("form");
const email = document.getElementById("email");
const errorMsg = document.getElementById("error__message");
const successCard = document.querySelector(".success__card");
const formCard = document.querySelector(".form__card");
const userEmail = document.getElementById("user__email");
const dismissBtn = document.getElementById("dismiss__btn");

function isValid(email) {
	const emailRegex = /\S+@\S+\.\S+/;
	return emailRegex.test(email);
}

function validateEmail() {
	if (!isValid(email.value) || email.value.length === 0) {
		errorMsg.style.display = "block";
		email.style.background = "var(--tomato)";
		email.focus();
	} else {
		successCard.style.display = "flex";
		formCard.style.display = "none";
		userEmail.innerHTML = `${email.value}`;
	}
}

function handleSubmit(e) {
	e.preventDefault();

	validateEmail();
}

form.addEventListener("submit", handleSubmit);

dismissBtn.addEventListener("click", () => {
	successCard.style.display = "none";
	formCard.style.display = "grid";
	email.value = "";
	email.focus();
});
