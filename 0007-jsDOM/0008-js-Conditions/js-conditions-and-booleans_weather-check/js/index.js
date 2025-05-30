// Change this value to test different "weather" conditions.
const weather = "rainy";
let reply;
switch (weather) {
  case "rainy":
    reply = "Brass monkey weather";
    break;
  case "sunny":
    reply = "Praise Ra";
    break;
  case "windy":
    reply = "Let us go surfing";
    break;
  default:
    reply = "Weather always exists";
}
console.log(reply);
// Adjust the "temperature" value to trigger different messages (for Part 2 only).
const temperature = 22;
