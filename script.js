const input1 = document.querySelector(".color1");
const input2 = document.querySelector(".color2");
const h3 = document.querySelector("h3");
const body = document.querySelector("#bodyy");

const changeBackground = () => {
	body.style.background = `linear-gradient(to right, ${input1.value}, ${input2.value})`;
	h3.textContent = body.style.background;
}

input1.addEventListener("input", changeBackground);
input2.addEventListener("input", changeBackground);
