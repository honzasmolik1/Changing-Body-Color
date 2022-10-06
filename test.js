`strict`;

let myForm = document.querySelector("#my-form");
let myBody = document.querySelector("body");
myForm.addEventListener("submit", function (e) {
	e.preventDefault();
	let inputColor = e.target.elements.color.value;
	myBody.style.backgroundColor = inputColor;
	e.target.elements.color.value = "";
});
