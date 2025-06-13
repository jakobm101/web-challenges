/*
Now that you've practiced destructuring, default parameters, and the spread operator,
try reversing the challenge by rewriting this code without using these modern features.
*/

// export const getNameAndCountry = ({ name, country }) => [name, country];
function getNameAndCountry(object) {
  return [object.name, object.country];
}
/*
export const getRelocatedCity = (
  city1,
  city2 = { name: "Berlin", country: "Germany" }
) => {
  const [, country] = getNameAndCountry(city2);
  return {
    ...city1,
    country,
  };
};
console.table(getRelocatedCity({name:'Hmarbrg', country:'Roman Empire'}));
*/

function getRelocatedCity(city1, city2) {
  var city2 = city2 || { name: 'Berlin', country: 'Germany' };
  var city2Arr = getNameAndCountry(city2);
  var result = { name: city1.name, country: city2Arr[1] };
  return result;
}

console.table(getRelocatedCity({ name: "Hmarbrg", country: "Roman Empire" }));

 export { getNameAndCountry, getRelocatedCity };
