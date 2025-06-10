import { countries } from "./utils/countries.js";
import { Country } from "./components/Country/Country.js";

const container = document.querySelector('[data-js="card-container"]');
const queryInput = document.querySelector('[data-js="query-input"]');

queryInput.addEventListener("input", (event) => {
  container.innerHTML = "";

  const searchString = event.target.value.toLowerCase();

  // const foundCountry = countries.find( cou => cou.name.startsWith(searchString))
  const foundCountries = countries.filter( cou => cou.name.toLowerCase().startsWith(searchString))

  if (foundCountries) {
    for(const country of foundCountries){
    const countryElement = Country(country);
    container.append(countryElement);
    }
  }
});
