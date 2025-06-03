console.clear();

const box = document.querySelector('[data-js=box]')
// box.style.background = 'green'
const inputColor = document.querySelector('[data-js=input-color]')
console.log(inputColor);

inputColor.addEventListener('mouseup', () => {
    box.style.background = `hsl(${inputColor.value}, 60%, 70%)`
})
console.log('yo');
