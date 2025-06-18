console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const article = document.createElement("article");
article.classList.add("product");
const section = document.createElement("section");
section.classList.add("product__body");
const productTextContainer = document.createElement("div");
productTextContainer.classList.add("product__text-container");
const productName = document.createElement("h2");
productName.classList.add("product__name");
productName.textContent = name;
const categories = document.createElement("ul");
categories.classList.add("product__categories");
const categoryArray = [];

document.body.append(article);
article.append(section);
section.append(productTextContainer);
productTextContainer.append(productName);
productTextContainer.append(categories);

let i = 3;
while (i > 0) {
  i--;
  const cat = document.createElement("li");
  cat.classList.add("product__category");
  cat.textContent = "test";
  categoryArray.unshift(cat);
  categories.append(categoryArray[0]);
}
categoryArray[0].textContent = category1;
categoryArray[1].textContent = category2;
categoryArray[2].textContent = category3;
const productDescription = document.createElement("p");
productDescription.textContent = description;
productDescription.classList.add("product__description");
productTextContainer.append(productDescription);
const productImageContainer = document.createElement("div");
productImageContainer.classList.add("product__image-container");
section.append(productImageContainer);
const productImage = document.createElement("img");
productImage.classList.add("product__image");
productImage.setAttribute("src", imageSrc);
productImageContainer.append(productImage);
const footer = document.createElement("footer");
footer.classList.add("product__footer");
article.append(footer);
const productPrice = document.createElement("span");
productPrice.innerHTML = price;
productPrice.classList.add("product__price");
footer.innerHTML = `
        <span class="product__price">${price}</span>
        <button type="button" class="product__buy-button">Buy</button>
`

