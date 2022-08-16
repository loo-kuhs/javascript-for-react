const showText = () => `Hola Mundo`;
const showNumber = () => 22;
const showBool = () => true;
const showArr = () => [1, 2, 3];

const button = document.createElement("button");
button.innerText = `Click me`;

button.addEventListener("click", () => {
  alert(`Clicked`);
});

document.body.append(button);
