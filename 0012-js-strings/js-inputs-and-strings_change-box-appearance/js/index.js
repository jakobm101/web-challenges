console.clear();

const box = document.querySelector("[data-js=box]");
// box.style.background = 'green'
const inputColor = document.querySelector("[data-js=input-color]");
const inputRadius = document.querySelector("[data-js=input-radius]");
const inputRotation = document.querySelector("[data-js=input-rotation]");
inputColor.addEventListener("input", () => {
  box.style.background = `hsl(${inputColor.value}, 60%, 70%)`;
});
inputRadius.addEventListener("input", () => {
  box.style.borderRadius = `${inputRadius.value * 2}px`;
});
inputRotation.addEventListener("input", () => {
  box.style.transform = `rotate(${inputRotation.value}deg)`;
});
