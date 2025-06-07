console.clear();

const starContainer = document.querySelector('[data-js="star-container"]');

function renderStars(filledStars = 3) {
  // Reset the star container before re-rendering stars
  starContainer.innerHTML = "";
  for (let i = 0; i < 5; i++) {
    const star = document.createElement("img");
    filledStars <= i ? star.setAttribute("src", "assets/star-empty.svg") : star.setAttribute('src', 'assets/star-filled.svg')
    console.log(star);

    starContainer.append(star);
  }

}
renderStars(4);
