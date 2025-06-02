console.clear();

// Part 1: Password
const SUPER_SECRET_PASSWORD = "h4x0r1337";

const receivedPassword = "password1234";
if (receivedPassword === SUPER_SECRET_PASSWORD) {
  console.log("Welcome Brunhilde1984");
} else {
  console.log("Denied");
}
// Part 2: Even / Odd
const number = 6;
number % 2 ? console.log("even") : console.log("odd");

// Part 3: Hotdogs
const numberOfHotdogs = 13245;
console.log({ numberOfHotdogs });
console.log("Total $ cost of hot dog order is:");
switch (true) {
  case numberOfHotdogs < 0: console.log(`none. Thanks for the hot dogs.`);break;
  case numberOfHotdogs < 5:
    console.log(numberOfHotdogs * 2);
    break;
  case numberOfHotdogs < 100:
    console.log(numberOfHotdogs * 1.5);
    break;
  case numberOfHotdogs < 1000000:
    console.log(numberOfHotdogs * 1);
    break;
  default: console.log('Input should be Number.');

}

// Part 4: Daytime
const currentHour = 190;
const statement = currentHour < 17 ? 'learn' : 'Party';

console.log(statement);

// Part 5: Greeting
let userName = "Archibald";
// userName = 'Marcel';

const greeting = "Hello " + (userName==='Marcel'? 'coach': userName) + "!";

console.log(greeting);
