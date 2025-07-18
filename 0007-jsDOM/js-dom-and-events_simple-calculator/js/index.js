console.clear();

let operand1 = 12;
let operand2 = 5;

// ----- Mathematical Operations -----

// Step 1: Use `document.querySelector` to select each button by its `data-js` attribute.
const buttonAdd = document.querySelector('[data-js="add"]');
const buttonSubtract = document.querySelector('[data-js="subtract"]');
const buttonMultiply = document.querySelector('[data-js="multiply"]');
const buttonDivide = document.querySelector('[data-js="divide"]');
const buttonExponent = document.querySelector('[data-js="exponent"]');
const buttonModulo = document.querySelector('[data-js="modulo"]');

/* 
Step 2: Add event listeners for each mathematical operation:

For each operation (add, subtract, multiply, divide, exponent, and modulo):
1. Add an event listener to the corresponding button.
2. Within the event listener, perform the operation using `operand1` and `operand2`.
3. Store the result in a variable.
4. Log the result to the console.
*/

// --v-- write your code here --v--
buttonAdd.addEventListener("mouseup", () => console.log(operand1 + operand2));
buttonSubtract.addEventListener("mouseup", () =>
  console.log(operand1 - operand2)
);
buttonMultiply.addEventListener("mouseup", () =>
  console.log(operand1 * operand2)
);
buttonDivide.addEventListener("mouseup", () =>
  console.log(operand1 / operand2)
);
buttonExponent.addEventListener("mouseup", () =>
  console.log(operand1 ** operand2)
);
buttonModulo.addEventListener("mouseup", () => console.log(operand1 % operand2));

// ----- Update the First Operand -----

/*
In the following section, update the value of `operand1` using the buttons in the "Update the First Operand" section.
Each button should adjust the value of `operand1` and log the new value to the console.

Hint: To allow `operand1` to be updated, you might need to change its declaration.

Step 1: Select each button for updating `operand1` by its `data-js` attribute.
Step 2: Add event listeners to update `operand1` based on the button clicked. Log the updated value to the console.
*/

const buttonIncrease1 = document.querySelector('[data-js="increase-by-one"]');
const buttonIncrease5 = document.querySelector('[data-js="increase-by-five"]');
const buttonDecrease1 = document.querySelector('[data-js="decrease-by-one"]');
const buttonDecrease5 = document.querySelector('[data-js="decrease-by-five"]');
const buttonMultiplyOperand = document.querySelector(
  '[data-js="multiply-by-two"]'
);
const buttonDivideOperand = document.querySelector('[data-js="divide-by-two"]');

function variableChanger(amount = 1, operation = "add") {
  if (operation === "add") {
    operand1 += amount;
  } else if (operation === "subtract") {
    operand1 -= amount;
  }
  switch (operation) {
    case "divide":
      operand1 /= amount;
      break;
    case "multiply":
      operand1 *= amount;
      break;
  }
  console.log(operand1);
}
buttonIncrease1.addEventListener("mouseup", () => variableChanger());
buttonIncrease5.addEventListener("mouseup", () => variableChanger(5, "add"));
buttonDecrease1.addEventListener("mouseup", () =>
  variableChanger(1, "subtract")
);
buttonDecrease5.addEventListener("mouseup", () =>
  variableChanger(5, "subtract")
);
buttonMultiplyOperand.addEventListener("mouseup", () =>
  variableChanger(2, "multiply")
);
buttonDivideOperand.addEventListener("mouseup", () =>
  variableChanger(2, "divide")
);
