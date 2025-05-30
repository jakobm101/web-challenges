const bodyElement = document.querySelector('[data-js="body"]');
const buttonOn = document.querySelector('[data-js="dark-mode-button"]');
const buttonOff = document.querySelector('[data-js="light-mode-button"]');

buttonOn.addEventListener('mouseup', () => bodyElement.className = 'dark');
buttonOff.addEventListener('mouseup', () => bodyElement.className = '');




