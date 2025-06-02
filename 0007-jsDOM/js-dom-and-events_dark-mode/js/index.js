const bodyElement = document.querySelector('[data-js="body"]');
const buttonOn = document.querySelector('[data-js="dark-mode-button"]');
const buttonOff = document.querySelector('[data-js="light-mode-button"]');

buttonOn.addEventListener("mouseup", () => (bodyElement.classList.add('dark')));
buttonOff.addEventListener("mouseup", () => (bodyElement.classList.remove('dark')));

const buttonToggle = document.querySelector('[data-js="toggle-button"]');
buttonToggle.addEventListener("mouseup", () => bodyElement.classList.toggle('dark'));
