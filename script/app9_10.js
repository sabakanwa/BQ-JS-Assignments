// 1. Write a program to take “city” name as input from user. If
// user enters “Karachi”, welcome the user like this:
// “Welcome to city of lights”

let city = prompt("Enter a city name:");

if (city.toLowerCase() === "karachi") {
  document.write("Welcome to the city of lights" + "</br>");
}

// 2. Write a program to take “gender” as input from user. If the
// user is male, give the message: Good Morning Sir. If the
// user is female, give the message: Good Morning Ma’am.

let gender = prompt("Enter your gender (male/female):");

if (gender.toLowerCase() === "male") {
    document.write("Good Morning Sir");
} else if (gender.toLowerCase() === "female") {
    document.write("Good Morning Ma'am" + "</br>");
}

// 3. Write a program to take input color of road traffic signal
// from the user & show the message according to this table:

let color = prompt("Enter the color of the traffic signal:");

if (color.toLowerCase() === "red") {
    document.write("Must Stop");
} else if (color.toLowerCase() === "yellow") {
   document.write("Ready to move");
} else if (color.toLowerCase() === "green") {
  document.write("Move nnow");
} else {
   document.write("Invalid input. Please enter red, yellow, or green." + "</br>");
}

// 4. Write a program to take input remaining fuel in car (in
//   litres) from user. If the current fuel is less than 0.25litres,
//   show the message “Please refill the fuel in your car”

let fuel = parseFloat(
  prompt("Enter the remaining fuel in your car (in litres):")
);

if (fuel < 0.25) {
    document.write("Please refill the fuel in your car.");
}

// 5. Run this script, & check whether alert message would be
// displayed or not. Record the outputs.
// a. var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// User Input & Conditional Statement | JAVASCRIPT
// Page 2 of 4
// b. var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// c. var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// if (c === 13){
// alert("condition 2 is true");
// }
// if (++c < 14){
// alert("condition 3 is true");
// }
// if(c === 14){
// alert("condition 4 is true");
// }
// d. var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }
// e. if (true){
// alert("True");
// }
// if (false){
// alert("False");
// }
// User Input & Conditional Statement | JAVASCRIPT
// Page 3 of 4
// f. if("car" < "cat"){
// alert("car is smaller than cat");
// }

var a = 4;
if (++a === 5) {
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83) {
  alert("given condition for variable b is true");
}
var c = 12;
if (c++ === 13) {
  alert("condition 1 is true");
}
if (c === 13) {
  alert("condition 2 is true");
}
if (++c < 14) {
  alert("condition 3 is true");
}
if (c === 14) {
  alert("condition 4 is true");
}
var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost) {
  alert("The cost equals");
}
if (true) {
  alert("True");
}
if (false) {
  alert("False");
}

if ("car" < "cat") {
  alert("car is smaller than cat");
}

// 6. Write a program to take input the marks obtained in three
// subjects & total marks. Compute & show the resulting
// percentage on your page. Take percentage & compute
// grade as per following table:
// Show the total marks, marks obtained, percentage, grade &
// remarks like:

let subject1Marks = +prompt("Enter marks obtained in subject 1:");
let subject2Marks = +prompt("Enter marks obtained in subject 2:");
let subject3Marks = +prompt("Enter marks obtained in subject 3:");
let totalMarks = +prompt("Enter total marks:");

let obtainedMarks = subject1Marks + subject2Marks + subject3Marks;
let percentage = (obtainedMarks / totalMarks) * 100;
let grade = "";
let remarks = "";

if (percentage >= 80) {
  grade = "A-one";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "You need to improve";
} else {
  grade = "Fail";
  remarks = "Sorry";
}

document.write("<h1>Marks Sheet</h1>");
document.write("<br>");
document.write("Total Marks: " + totalMarks);
document.write("<br>");
document.write("Obtained Marks: " + obtainedMarks);
document.write("<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%");
document.write("<br>");
document.write("Grade: " + grade);
document.write("<br>");
document.write("Remarks: " + remarks);

// 7. Guess game:
// Store a secret number (ranging from 1 to 10) in a variable.
// Prompt user to guess the secret number.
// a. If user guesses the same number, show “Bingo! Correct
// answer”.
// b. If the guessed number +1 is the secret number, show
// “Close enough to the correct answer”.

// Store a secret number (ranging from 1 to 10) in a variable.
let secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt user to guess the secret number.
let guessedNumber = parseInt(
  prompt("Guess the secret number between 1 and 10:")
);

// Check if the guessed number is correct or close enough.
if (guessedNumber === secretNumber) {
  document.write("<h1>Bingo! Correct answer.</h1>");
} else if (
  guessedNumber === secretNumber + 1 ||
  guessedNumber === secretNumber - 1
) {
  document.write("<h1>Close enough to the correct answer.</h1>");
} else {
  document.write("<h1>Sorry, try again.</h1>");
}

// 8. Write a program to check whether the given number is
// divisible by 3. Show the message to the user if the number
// is divisible by 3.

// Prompt the user to enter a number.
let numb = +prompt("Enter a number:");

// Check if the number is divisible by 3.
if (numb % 3 === 0) {
  document.write("<h1>The number is divisible by 3.</h1>");
} else {
  document.write("<h1>The number is not divisible by 3.</h1>");
}

// 9. Write a program that checks whether the given input is an
// even number or an odd number.

// Prompt the user to enter a number.
let number = +prompt("Enter a number:");

// Check if the number is even or odd.
if (number % 2 === 0) {
  document.write("<h1>The number is even.</h1>");
} else {
  document.write("<h1>The number is odd.</h1>");
}

// 10. Write a program that takes temperature as input and
// shows a message based on following criteria
// a. T > 40 then “It is too hot outside.”
// b. T > 30 then “The Weather today is Normal.”
// c. T > 20 then “Today’s Weather is cool.”
// d. T > 10 then “OMG! Today’s weather is so Cool.”

// Prompt the user to enter the temperature.
let temperature = parseInt(prompt("Enter the temperature:"));

// Check the temperature and display a message accordingly.
if (temperature > 40) {
  document.write("<h1>It is too hot outside.</h1>");
} else if (temperature > 30) {
  document.write("<h1>The Weather today is Normal.</h1>");
} else if (temperature > 20) {
  document.write("<h1>Today’s Weather is cool.</h1>");
} else if (temperature > 10) {
  document.write("<h1>OMG! Today’s weather is so Cool.</h1>");
} else {
  document.write("<h1>The temperature is too low.</h1>");
}

// 11. Write a program to create a calculator for +,-,*, / & %
// using if statements. Take the following input:
// a. First number
// b. Second number
// c. Operation (+, -, *, /, %)
// Compute & show the calculated result to user.

let firstNumber = +prompt("Enter first number:");
let secondNumber = +prompt("Enter second number:");
let operation = prompt("Enter operation (+, -, *, /, %):");

let result;

if (operation === "+") {
  result = firstNumber + secondNumber;
} else if (operation === "-") {
  result = firstNumber - secondNumber;
} else if (operation === "*") {
  result = firstNumber * secondNumber;
} else if (operation === "/") {
  result = firstNumber / secondNumber;
} else if (operation === "%") {
  result = firstNumber % secondNumber;
} else {
    document.write("Invalid operation!");
}

document.write(`Result: ${result}`);