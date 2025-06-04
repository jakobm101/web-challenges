console.clear();

const toastContainer = document.querySelector('[data-js="toast-container"]');
const addButton = document.querySelector('[data-js="add-button"]');
const clearButton = document.querySelector('[data-js="clear-button"]');

addButton.addEventListener("click", () => {
  // Exercise: Append a new entry to the toast messages container
const newMessage = document.createElement('li')
newMessage.classList.add('toast-container__message')
  newMessage.textContent = 'TOAST'
  toastContainer.append(newMessage)
  console.log(newMessage);
  
});

clearButton.addEventListener("click", () => {
  // Exercise: Clear the stack of toast messages
  toastContainer.innerHTML = ''
});

/*
    <ol class="toast-container" data-js="toast-container">
<li class="toast-container__message">I'm a toast message.</li>
*/