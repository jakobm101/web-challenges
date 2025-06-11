const colors = [
  "#343434",
  "#7FB5B5",
  "#633A34",
  "#354D73",
  "#F3A505",
  "#2A6478",
  "#CC0605",
  "#497E76",
  "#D36E70",
  "#FF2301",
  "#4C514A",
  "#2E3A23",
  "#5D9B9B",
  "#474A51",
  "#EFA94A",
  "#4D5645",
  "#606E8C",
  "#A5A5A5",
];

colors.forEach(
  (color) =>
    (document.body.innerHTML += `<div class="color-box" style="background-color:${color}"/>`)
);

// const boxTest = document.createElement('div')
// boxTest.classList.add('color-box')
// document.body.append(boxTest)

//## Task 2
//
//Instead of writing the callback function directly inside the forEach method, we can use a function reference.
//
//- Create a new function called `renderColorBox`.
//- Copy your code from the arrow function into this new function.
//- Use the forEach method with renderColorBox to create the color boxes a second time!
//
//Switch to the `./js/index.js` file and make something great happen!

function renderColorBox(color = "black") {
  document.body.innerHTML += `<div class="color-box" style="background-color:${color}"/>`;
}

colors.forEach(renderColorBox)