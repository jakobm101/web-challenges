console.clear();

const pizzaInput1 = document.querySelector('[data-js="pizza-input-1"]');
const pizza1 = document.querySelector('[data-js="pizza-1"]');
const pizzaInput2 = document.querySelector('[data-js="pizza-input-2"]');
const pizza2 = document.querySelector('[data-js="pizza-2"]');
const outputSection = document.querySelector('[data-js="output-section"]');

const output = document.querySelector('[data-js="output"]');

pizzaInput1.addEventListener("input", () => {
  calculatePizzaGain(pizzaInput1.value, pizzaInput2.value);
  updatePizzaDisplay(pizza1, pizzaInput1.value);
  updateOutputColor(pizzaInput1.value, pizzaInput2.value);
  // Write your code here
});

pizzaInput2.addEventListener("input", () => {
  calculatePizzaGain(pizzaInput1.value, pizzaInput2.value);
  updatePizzaDisplay(pizza2, pizzaInput2.value);

  updateOutputColor(pizzaInput1.value, pizzaInput2.value);
  // Write your code here
});

// Task 1: Define the function `calculatePizzaGain` here
function circleArea(diameter) {
  const pi = Math.PI;
  return (diameter / 2) ** 2 * pi;
}
function calculatePizzaGain(diameter1, diameter2) {
  const area1 = circleArea(diameter1);
  const area2 = circleArea(diameter2);
  const gain = ((area2 - area1) / area1) * 100;
  const gainRounded = Math.round(gain);
  outputSection.textContent = gainRounded;
  pizzaSize1 = pizzaInput1.value;
  pizzaSize2 = pizzaInput2.value;
}

// Task 2: Define the function `updatePizzaDisplay` here
function updatePizzaDisplay(pizzaElement, newSize) {
  pizzaElement.style.width = `${(newSize / 24) * 100}px`;
}
// Task 3: Define the function `updateOutputColor` here
function updateOutputColor(size1, size2) {
  outputSection.style.backgroundColor =
    size1 > size2 ? "var(--red)" : "var(--green)";
}
// setting pizza to 8 and 55 causes bug