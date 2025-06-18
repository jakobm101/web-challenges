console.clear();

const form = document.querySelector('[data-js="form"]');
form.addEventListener("submit", (event) => {
  // practicing
  const formElements = Object(event.target.elements);
  // console.log(formElements.tos.checked);

  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData);
  // checkboxes are special snowflakes here
  console.log("checkbox:", data.tos ? true : false);
  console.log(data);
  console.log(`The age-badness-sum of ${data.firstName} is ${data.age+data.badness}
`);

  event.preventDefault();
  event.target.reset();
  formElements.firstName.focus();
});
