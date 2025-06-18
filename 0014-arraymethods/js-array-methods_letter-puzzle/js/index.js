import { employees } from "../utils/data.js";

// EXAMPLE:
// QUESTION 1: Is there any employee that is older than 65 years?
// Hint: use some()

const hasEmployeesOlderThan65 = employees.some((employee) => employee.age > 65);

// Now it's your turn...
//----------------------------------------
// QUESTION 2: Is there any employee with first name 'Frederique'?
// Hint: use some()

const employeeNamedFrederique = employees.some(
  (emp) => emp.firstName === "Frederique"
);

//----------------------------------------
// QUESTION 3: Is there any employee younger than 18 years?
// Hint: use some()

const employeeYoungerThan18 = employees.some((emp) => emp.age < 18);

//----------------------------------------
// QUESTION 4: Has every employee a phone number?
// Hint: use every()

const everyEmployeeHasPhoneNumber = employees.every((emp) => emp.phone);

//----------------------------------------
// QUESTION 5: Does every id start with '0'?
// Hint: Use every()

const everyIdStartsWith0 = employees.every((emp) => emp.id.startsWith("0"));

//----------------------------------------
// QUESTION 6: Has every employee a first name AND a last name?
// Hint: use every()

const everyEmployeeHasFirstAndLastName = employees.every(
  (emp) => emp.firstName && emp.lastName
);

//----------------------------------------
// QUESTION 7: Can you find the employee named 'Louise' that is 33 years old?
// Hint: use find()

const employeeLouise33 = employees.find(
  (emp) => emp.firstName === "Louise" && emp.age === 33
);

//----------------------------------------
// QUESTION 8: We need to find the employee with the id '0.0795620650485831'
// Hint: Use find()

const employeeWithId = employees.find((emp) => emp.id === "0.0795620650485831");

//----------------------------------------
// QUESTION 9: Please find the employee with first name 'Edna' and profession 'Investment Manager'
// Hint: use find()

const ednaInvestment = employees.find(
  (emp) => emp.firstName === "Edna" && emp.profession === "Investment Manager"
);

//----------------------------------------
// QUESTION 10: We need a new employees array now sorted by age ascending (1 -> 100)
// Hint: Use toSorted()

const employeesSortedByAge = employees.toSorted((a, b) => {
  if (a.age === b.age) 0;
  return a.age < b.age ? -1 : 1;
});

//----------------------------------------
// QUESTION 11: We want a new employees array sorted by last name descending (Z -> A)
// Hint use toSorted()

const employeesSortedByLastName = employees.toSorted((a, b) => {
  if (a.lastName === b.lastName) 0;
  return a.lastName > b.lastName ? -1 : 1;
});
console.log(employeesSortedByLastName);

// Great! 🎉 You got it! 🚀 Now you can read the solution of the letter puzzle. 💪

export {
  hasEmployeesOlderThan65,
  employeesSortedByAge,
  employeeNamedFrederique,
  employeeWithId,
  employeeYoungerThan18,
  everyEmployeeHasPhoneNumber,
  employeesSortedByLastName,
  everyIdStartsWith0,
  everyEmployeeHasFirstAndLastName,
  employeeLouise33,
  ednaInvestment,
};
