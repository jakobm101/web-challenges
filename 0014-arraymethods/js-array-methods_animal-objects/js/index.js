console.clear();

const animals = [
  {
    name: "cat",
    weight: 4,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  {
    name: "dog",
    weight: 10,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "elephant", weight: 4000, continents: ["Africa", "Asia"] },
  {
    name: "rabbit",
    weight: 2,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "lion", weight: 200, continents: ["Africa"] },
  { name: "tiger", weight: 150, continents: ["Asia"] },
  {
    name: "horse",
    weight: 500,
    continents: [
      "Europe",
      "Asia",
      "Africa",
      "Australia",
      "North-America",
      "South-America",
    ],
  },
  { name: "giraffe", weight: 600, continents: ["Africa"] },
  { name: "zebra", weight: 300, continents: ["Africa"] },
  {
    name: "penguin",
    weight: 12,
    continents: ["Africa", "Australia", "Antarctica", "South-America"],
  },
  {
    name: "polar bear",
    weight: 450,
    continents: ["North-America", "Asia", "Arctic"],
  },
  { name: "panda", weight: 120, continents: ["Asia"] },
  { name: "koala", weight: 13, continents: ["Australia"] },
  { name: "kangaroo", weight: 70, continents: ["Australia"] },
  {
    name: "monkey",
    weight: 20,
    continents: ["South-America", "Asia", "Africa"],
  },
  { name: "sloth", weight: 8, continents: ["South-America"] },
  { name: "hippo", weight: 1500, continents: ["Africa"] },
  { name: "rhino", weight: 2000, continents: ["Asia", "Africa"] },
];

// Hint: Besides the array method, check out the string method `startsWith()`.
const firstAnimalStartingWithLetterG = animals.filter((ani) =>
  ani.name.startsWith("g")
)[0];
console.table(firstAnimalStartingWithLetterG);

const indexOfAnimalWithNameLongerFive = animals.findIndex(
  (ani) => ani.name.length > 5
);
console.table(indexOfAnimalWithNameLongerFive);

// Note:
// - Sorting strings is slightly more complicated than sorting numbers.
// - You will need if-statements and return values of -1, 1, and 0.
// - Check out MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort

// Hint: There is no need to upper-/lowercase the strings before sorting them.
// Hint: sort() mutates the original array, which is bad.
// Make sure to use toSorted() instead.

const animalsSortedAlphabetically = animals.toSorted((a, b) => {
  const aname = a.name;
  const bname = b.name;
  if (aname < bname) {
    return -1;
  }
  if (bname < aname) {
    return 1;
  }
  return 0;
});
console.table(animalsSortedAlphabetically);

const animalsSortedByWeightStartingWithLowest = animals.toSorted(
  (a, b) => a.weight - b.weight
);
console.table(animalsSortedByWeightStartingWithLowest);

// Note:
// - reverse() mutates the original array (like sort() does), which is bad.
// Use toReversed() instead (or any other method to get the expected result)

const animalsSortedByWeightReversed = animals.toSorted(
  (a, b) => b.weight - a.weight
);
console.table(animalsSortedByWeightReversed);

const animalWithWeightMoreThanFivehundredExists =
  animals.filter((ani) => ani.weight > 500).length > 0;
console.log(animalWithWeightMoreThanFivehundredExists);

// Hint: Filter for Europe first, then check every animal for its weight.
const allAnimalsInEuropeWeighLessThanOnehundred =
  animals
    .filter((ani) => ani.continents.includes("Europe"))
    .filter((ani) => ani.weight > 100).length < 1;
console.table(allAnimalsInEuropeWeighLessThanOnehundred);

// Hint: filter + map + reduce
const weightOfAllAnimalsInAfrica = animals.filter(ani => ani.continents.includes("Africa")).map(ani => ani.weight).reduce((acc , curr ) => acc + curr)
console.log(weightOfAllAnimalsInAfrica)

// Hint: As above, but divided by the number of animals in Africa.
const averageWeightOfAllAnimalsInAfrica = weightOfAllAnimalsInAfrica/(animals.filter(ani => ani.continents.includes("Africa")).length)
console.log(averageWeightOfAllAnimalsInAfrica);


const aniSort = animals.map(ani => ani.name).toSorted()
console.table(aniSort)

export {
  firstAnimalStartingWithLetterG,
  indexOfAnimalWithNameLongerFive,
  animalsSortedAlphabetically,
  animalsSortedByWeightStartingWithLowest,
  animalsSortedByWeightReversed,
  animalWithWeightMoreThanFivehundredExists,
  allAnimalsInEuropeWeighLessThanOnehundred,
  weightOfAllAnimalsInAfrica,
  averageWeightOfAllAnimalsInAfrica,
};
