// 1. Declare an empty array using JS literal notation to store
// student names in future.
let studentNames = []; // empty array declaration

// 2. Declare an empty array using JS object notation to store
// student names in future.
let newStudent = new Array(); // declaring empty array using object notation

// 3. Declare and initialize a strings array.
const fruits = ["apple", "banana", "orange"];

// 4. Declare and initialize a numbers array.
let numbers = [1, 2, 3, 4, 5];
console.log(numbers[0]); // output: 1
console.log(numbers[2]); // output: 3
numbers[1] = 10;
console.log(numbers); // output: [1, 10, 3, 4, 5]

// 5. Declare and initialize a boolean array.
let boolArray = [true, false, true, true];

// 6. Declare and initialize a mixed array.
let mixedArray = ["John", 25, true, "apple", false];

// 7. Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:

var qualifications = [
  "SSC",
  "HSC",
  "BCS",
  "BS",
  "BCOM",
  "MS",
  "M. Phil.",
  "PhD",
];

document.write("<h3>Educational Qualifications:</h3>");

for (var i = 0; i < qualifications.length; i++) {
  document.write(qualifications[i] + "<br>");
}

// 8. Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
// declare and initialize arrays

var studentsNames = ["John", "Sarah", "David"];
var studentsScores = [320, 450, 280];

// calculate percentage and display result
for (var i = 0; i < studentsNames.length; i++) {
  var percentage = (studentsScores[i] / 500) * 100;
  document.write(
    "Score of " +
      studentsNames[i] +
      " is " +
      studentsScores[i] +
      ". Percentage: " +
      percentage +
      "%<br>"
  );
}

// 9. Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
// Arrays | JAVASCRIPT
// Page 3 of 6
// remove the same number of color(s) from user-defined
// position/index. . Display the updated array in your
// browser.

// Initializing an array with color names
var colors = ["Red", "Green", "Blue", "Yellow", "Orange"];

// Displaying the array elements in the browser
document.write("<b>Initial array: </b>" + colors + "<br><br>");

// a. Adding a color to the beginning of the array
var colorToAddAtBeginning = prompt(
  "Enter a color to add at the beginning of the array:"
);
colors.unshift(colorToAddAtBeginning);

// Displaying the updated array in the browser
document.write(
  "<b>Array after adding a color at the beginning: </b>" + colors + "<br><br>"
);

// b. Adding a color to the end of the array
var colorToAddAtEnd = prompt("Enter a color to add at the end of the array:");
colors.push(colorToAddAtEnd);

// Displaying the updated array in the browser
document.write(
  "<b>Array after adding a color at the end: </b>" + colors + "<br><br>"
);

// c. Adding two more colors to the beginning of the array
colors.unshift("Violet", "Indigo");

// Displaying the updated array in the browser
document.write(
  "<b>Array after adding two more colors at the beginning: </b>" +
    colors +
    "<br><br>"
);

// d. Deleting the first color in the array
colors.shift();

// Displaying the updated array in the browser
document.write(
  "<b>Array after deleting the first color: </b>" + colors + "<br><br>"
);

// e. Deleting the last color in the array
colors.pop();

// Displaying the updated array in the browser
document.write(
  "<b>Array after deleting the last color: </b>" + colors + "<br><br>"
);

// f. Adding a color to the desired position/index
var positionToAddColor = prompt(
  "Enter the position where you want to add the color (starting from 1):"
);
var colorToAddAtPosition = prompt(
  "Enter a color to add at position " + positionToAddColor + ":"
);
colors.splice(positionToAddColor - 1, 0, colorToAddAtPosition);

// Displaying the updated array in the browser
document.write(
  "<b>Array after adding a color at position " +
    positionToAddColor +
    ": </b>" +
    colors +
    "<br><br>"
);

// g. Removing color(s) from the desired position/index
var positionToDeleteColor = prompt(
  "Enter the position from where you want to delete the color(s) (starting from 1):"
);
var numberOfColorsToDelete = prompt(
  "Enter the number of colors you want to delete:"
);
colors.splice(positionToDeleteColor - 1, numberOfColorsToDelete);

// Displaying the updated array in the browser
document.write(
  "<b>Array after deleting " +
    numberOfColorsToDelete +
    " color(s) from position " +
    positionToDeleteColor +
    ": </b>" +
    colors +
    "<br><br>"
);

// 10. Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.

// Initialize array with student scores
var scores = [68, 82, 91, 55, 76];

// Sort array in ascending order
scores.sort(function (a, b) {
  return a - b;
});

// Display sorted array in the console
console.log(scores);

// 11. Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.

// Initialize an array with city names
var cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];

// Copy 3 elements from cities array to selectedCities array
var selectedCities = cities.slice(1, 4);

// Display the selectedCities array in the console
console.log(selectedCities);

// 12. Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)

var arr = ["This", "is", "my", "cat"];
var str = arr.join(" ");
console.log(str); // Output: "This is my cat"

// 13. Create a new array. Store values one by one in such a way
// that you can access the values in the order in which they
// were stored. (FIFO-First In First Out)

// Initialize empty queue
var queue = [];

// Add elements to the end of the queue
queue.push("First");
queue.push("Second");
queue.push("Third");

// Remove the first element from the queue
var first = queue.shift();

// Log the first element
console.log(first); // Output: "First"

// 14. Create a new array. Store values one by one in such a way
// that you can access the values in reverse order. (Last InFirst Out)

var values = []; // initialize an empty array
values.push("value 1"); // add value 1 to the end of the array
values.push("value 2"); // add value 2 to the end of the array
values.push("value 3"); // add value 3 to the end of the array

console.log("Original array: " + values); // display original array in console

var reversedValues = []; // initialize an empty array for reversed values
while (values.length > 0) {
  reversedValues.push(values.pop()); // remove last element of values array and add it to the beginning of reversedValues array
}

console.log("Reversed array: " + reversedValues); // display reversed array in console

// 15. Write a program to store phone manufacturers (Apple,
//   Samsung, Motorola, Nokia, Sony & Haier) in an array.
//   Display the following dropdown/select menu in your
//   browser using document.write() method

var phoneManufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];

document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
  document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");