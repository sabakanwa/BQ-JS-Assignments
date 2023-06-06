// 1. Write a program that takes a positive integer from user &
// display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Prompt the user for a positive integer
var userInput = prompt("Enter a positive integer:");

// Convert the user input to a number
var number = parseInt(userInput);

// Calculate the round off value
var roundOff = Math.round(number);

// Calculate the floor value
var floorValue = Math.floor(number);

// Calculate the ceil value
var ceilValue = Math.ceil(number);

// Display the results in the browser
document.write("<h3>Number Information</h3>");
document.write("<p>Number: " + number + "</p>");
document.write("<p>Round Off: " + roundOff + "</p>");
document.write("<p>Floor Value: " + floorValue + "</p>");
document.write("<p>Ceil Value: " + ceilValue + "</p>");

//  2. Write a program that takes a negative floating point
// number from user & display the following in your browser.
// a. number
// b. round off value of the number
// c. floor value of the number
// d. ceil value of the number

// Prompt the user for a negative floating-point number
var userInput = prompt("Enter a negative floating-point number:");

// Convert the user input to a number
var number = parseFloat(userInput);

// Calculate the round off value
var roundOff = Math.round(number);

// Calculate the floor value
var floorValue = Math.floor(number);
// Calculate the floor value
var floorValue = Math.floor(number);

// Calculate the ceil value
var ceilValue = Math.ceil(number);

// Display the results in the browser
document.write("<h3>Number Information</h3>");
document.write("<p>Number: " + number + "</p>");
document.write("<p>Round Off: " + roundOff + "</p>");
document.write("<p>Floor Value: " + floorValue + "</p>");
document.write("<p>Ceil Value: " + ceilValue + "</p>");

// 3. Write a program that displays the absolute value of a
// number.
// E.g. absolute value of -4 is 4 & absolute value of 5 is 5

// Prompt the user for a number
var userInput = prompt("Enter a number:");

// Convert the user input to a number
var number = parseFloat(userInput);

// Calculate the absolute value
var absoluteValue = Math.abs(number);

// Display the result in the browser
document.write("<h3>Absolute Value</h3>");
document.write(
  "<p>The absolute value of " + number + " is " + absoluteValue + "</p>"
);

// 4. Write a program that simulates a dice using random()
// method of JS Math class. Display the value of dice in your
// browser.:

// Generate a random number between 1 and 6 (inclusive) for the dice
var diceValue = Math.floor(Math.random() * 6) + 1;

// Display the dice value in the browser
document.write("Dice value: " + diceValue);

// 5. Write a program that simulates a coin toss using random()
// method of JS Math class. Display the value of coin in your
// browser

// Generate a random number between 0 and 1
var randomNum = Math.random();

// Determine the coin value based on the random number
var coinValue = randomNum < 0.5 ? "Heads" : "Tails";

// Display the coin value in the browser
document.write("Coin value: " + coinValue);

// 6. Write a program that shows a random number between 1
// and 100 in your browser.
// Generate a random number between 1 and 100
var randomNumber = Math.floor(Math.random() * 100) + 1;

// Display the random number in the browser
document.write("Random number: " + randomNumber);

// 7. Write a program that asks the user about his weight. Parse
// the user input and display his weight in your browser.
// Possible user inputs can be:
// a. 50
// b. 50kgs
// c. 50.2kgs
// d. 50.2kilograms

// Ask the user for their weight
var userInput = prompt("Enter your weight:");

// Remove any non-digit characters from the user input
var weight = userInput.replace(/[^\d.]/g, "");

// Display the weight in the browser
document.write("Your weight is: " + weight + " kgs");

// 8. Write a program that stores a random secret number from
// 1 to 10 in a variable. Ask the user to input a number
// between 1 and 10. If the user input equals the secret
// number, congratulate the user.

// Generate a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Ask the user to input a number
var userInput = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user input equals the secret number
if (userInput === secretNumber) {
  alert("Congratulations! You guessed the secret number.");
} else {
  alert("Sorry, the secret number was " + secretNumber + ". Try again!");
}