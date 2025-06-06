console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars() {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("img");
    star.setAttribute("src", "assets/star-empty.svg");
    console.log(star);

    starContainer.append(star);
  }
}
renderStars();
