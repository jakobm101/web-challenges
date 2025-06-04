console.clear();

const form = document.querySelector('[data-js="form"]');
const tosError = document.querySelector('[data-js="tos-error"]');
const tosCheckbox = document.querySelector('[data-js="tos"]');
const test = 1;
function testing (){}

function hideTosError() {
  tosError.setAttribute("hidden", "");
}

function showTosError() {
  tosError.removeAttribute("hidden");
}
hideTosError();
tosCheckbox.addEventListener(
  "input",
  // (tosCheckbox.checked ? hideTosError() : showTosError())
  () => {
    tosCheckbox.checked ? hideTosError() : showTosError();
  }
);

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const data = Object.fromEntries(new FormData(event.target));
  console.log(data);
  if (!data.tos) {
    showTosError();
    return;
  }
  // eslint-disable-next-line no-alert
  alert("Form submitted");
});
