console.clear();

/*
Update the content and style of the page based on the current day and time.

- Write a function `getGreeting` that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: You can get the current hour with `new Date().getHours()`)

- Write a function `getDayColor` that returns a different color depending on the current weekday:
  - Monday: "darkgray"
  - Tuesday - Friday: "lightblue"
  - Saturday - Sunday: "hotpink"

(HINT: You can get the current weekday with `new Date().getDay()`)

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  let hour = new Date().getHours();
  hour = 22;
  let greeting = "Hello";
  switch (true) {
    case 6 < hour && hour < 13:
      greeting = "Good Morning";
      break;
    case 13 < hour && hour < 19:
      greeting = "Good Afternoon";
      break;
    case 19 < hour && hour < 23:
      greeting = "Good Evening";
      break;
    case 22 < hour && hour < 25:
    case 0 < hour && hour < 6:
      greeting = "Good Night";
      break;
  }
  console.log(greeting);
}

function getDayColor() {
  let date = new Date().getDay();
  console.log({ date });
  //  - Monday: "darkgray"
  // - Tuesday - Friday: "lightblue"
  //  - Saturday - Sunday: "hotpink"
  if (date === 1) {
    return "darkgray";
  } else if (date < 6) {
    return "lightblue";
  } else {
    return "hotpink";
  }
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
