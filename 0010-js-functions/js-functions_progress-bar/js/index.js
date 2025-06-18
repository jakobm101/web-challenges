console.clear();

const progressBar = document.querySelector('[data-js="progress-bar"]');

function calculateScrollPercentage() {
  /**
  - `window.scrollY`: The Y position of the window on the total webpage.
  - `window.innerHeight`: The height of the visible part of the window.
  - `document.body.clientHeight`: The total height of the webpage.
*/
  progressBarUpdate = `${
    (window.scrollY / (document.body.clientHeight - window.innerHeight)) * 100
  }%`;
  progressBar.style.width = progressBarUpdate;
  console.log(progressBarUpdate);
}

// checking values
function logger() {
  console.log(
    `${window.scrollY},${window.innerHeight},${document.body.clientHeight}`
  );
}
//  document.addEventListener("scroll", logger);
document.addEventListener("scroll", calculateScrollPercentage);
