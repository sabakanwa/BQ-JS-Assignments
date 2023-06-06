// 1. Declare and initialize an empty multidimensional array.(Array of arrays)
// Declare and initialize an empty multidimensional array
const multidimensionalArray = [[]];
// Declare and initialize a 2x3 multidimensional array
const multidimensionalsArray = [[], [], []];

// 2. Declare and initialize a multidimensional array
// representing the following matrix:
// 0 1 2 3
// 1 0 1 2
// 2 1 0 1

// Declare and initialize a multidimensional array representing the matrix
const matrix = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];

// 3. Write a program to print numeric counting from 1 to 10.
for (let i = 1; i <= 10; i++) {
  document.write(i + "<br>");
}

// 4. Write a program to print multiplication table of any
// number using for loop. Table number & length should be
// taken as an input from user.

const number = parseInt(prompt("Enter the number:"));
const length = parseInt(
  prompt("Enter the length of the multiplication table:")
);

document.write(`Multiplication Table of ${number} with length ${length}:` + "<br>");

for (let i = 1; i <= length; i++) {
  const result = number * i;
  document.write(`${number} * ${i} = ${result}` + "<br>");
}

// 5. Write a program to print items of the following array
// using for loop:
// fruits = [“apple”, “banana”, “mango”, “orange”,
// “strawberry”]

const fruits = ["apple", "banana", "mango", "orange", "strawberry"];

document.write("Items of the fruits array:" + "<br>");
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i]);
}

// 6. Generate the following series in your browser. See
// example output.
// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k

// Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15
document.write("Counting: " + "<br>");
for (let i = 1; i <= 15; i++) {
  document.write(i + ", " + "<br>");
}

document.write("<br>");

// Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1
document.write("Reverse counting: " + "<br>");
for (let i = 10; i >= 1; i--) {
  document.write(i + ", " + "<br>");
}

document.write("<br>");

// Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
document.write("Even: " + "<br>");
for (let i = 0; i <= 20; i += 2) {
  document.write(i + ", " + "<br>");
}

document.write("<br>");

// Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19
document.write("Odd: " + "<br>");
for (let i = 1; i <= 19; i += 2) {
  document.write(i + ", " + "<br>");
}

document.write("<br>");

// Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
document.write("Series: ");
for (let i = 1; i <= 10; i++) {
  document.write(2 * i + "k, ");
}

// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

const A = ["cake", "apple pie", "cookie", "chips", "patties"];
const userInput = prompt("Enter an item to search:"); // Prompt user for input

let found = false;
for (let i = 0; i < A.length; i++) {
  if (A[i] === userInput) {
    found = true;
    break;
  }
}

if (found) {
  alert(`Yes, ${userInput} is found in the list.`);
} else {
  alert(`No, ${userInput} is not found in the list.`);
}

// 8. Write a program to identify the largest number in the
// given array.
// A = [24, 53, 78, 91, 12].

const large = [24, 53, 78, 91, 12];
let largest = A[0];

for (let i = 1; i < large.length; i++) {
  if (large[i] > largest) {
    largest = large[i];
  }
}

document.write("The largest number in the array is: " + largest);

// 9. Write a program to identify the smallest number in the
// given array.
// A = [24, 53, 78, 91, 12]

let small = [24, 53, 78, 91, 12];

let smallest = small[0]; // Assume the first element is the smallest

for (let i = 1; i < small.length; i++) {
  if (small[i] < smallest) {
    smallest = small[i];
  }
}
document.write("The smallest number in the array is:", smallest);

// 10. Write a program to print multiples of 5 ranging 1 to
// 100.
for (let i = 1; i <= 100; i++) {
  if (i % 5 === 0) {
    document.write(i);
  }
}