const bodyElement = document.querySelector('[data-js="body"]');
const buttonOn = document.querySelector('[data-js="dark-mode-button"]');
const buttonOff = document.querySelector('[data-js="light-mode-button"]');
const buttonToggle = document.querySelector('[data-js="toggle-button]');
buttonOn.addEventListener('mouseup', () => bodyElement.className = 'dark');
buttonOff.addEventListener('mouseup', () => bodyElement.className = '');

function toggleDarkness(){
    if (bodyElement.className === 'dark') {
        bodyElement.className = '';
    } else {
        bodyElement.className = 'dark';
    }
}

buttonToggle.addEventListener('mouseup', () => toggleDarkness());

