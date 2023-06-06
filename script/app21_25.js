// 1. Write a program that takes two user inputs for first and
// last name using prompt and merge them in a new variable
// titled fullName. Greet the user using his full name.

let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");

let fullName = firstName + " " + lastName;

document.write("Hello, " + fullName + "! Welcome!" +"<br>");

// 2. Write a program to take a user input about his favorite
// mobile phone model. Find and display the length of user
// input in your browser

let favoriteModel = prompt("Enter your favorite mobile phone model:");

let length = favoriteModel.length;

document.write("The length of your input is: " + length +"<br>");

// 3. Write a program to find the index of letter “n” in the word
// “Pakistani” and display the result in your browser .

let indexWord = "Pakistani";
let index = indexWord.indexOf("n");

document.write("The index of 'n' in the word 'Pakistani' is: " + index +"<br>");

// 4. Write a program to find the last index of letter “l” in the
// word “Hello World” and display the result in your browser.

let lastWord = "Hello World";
let lastIndex = -1;

for (let i = 0; i < lastWord.length; i++) {
  if (lastWord[i] === "l") {
    lastIndex = i;
  }
}

document.write(
  "The last index of 'l' in the word 'Hello World' is: " + lastIndex +"<br>"
);

// 5. Write a program to find the character at 3rd index in the
// word “Pakistani” and display the result in your browser.

let word = "Pakistani";
let character = word.charAt(3);

document.write(
  "The character at the 3rd index in the word 'Pakistani' is: " + character +"<br>"
);

// 6. Repeat Q1 using string concat() method
let firsName = prompt("Enter your first name:");
let lasName = prompt("Enter your last name:");

let fulName = firsName.concat(" ", lasName);

document.write("Hello, " + fulName + "! Welcome!" +"<br>");

// 7. Write a program to replace the “Hyder” to “Islam” in the
// word “Hyderabad” and display the result in your browser.

let replaceWord = "Hyderabad";
let newWord = replaceWord.replace("Hyder", "Islam");

document.write("Original word: " + replaceWord + "<br>");
document.write("Modified word: " + newWord);

// 8. Write a program to replace all occurrences of “and” in the
// string with “&” and display the result in your browser.
// var message = “Ali and Sami are best friends. They play cricket and
// football together.”;

var message =
  "Ali and Sami are best friends. They play cricket and football together.";

// Replace all occurrences of "and" with "&"
var modifiedMessage = message.replace(/and/g, "&");

// Display the modified message in the browser
document.write(modifiedMessage +"<br>");

// 9. Write a program that converts a string “472” to a number
// 472. Display the values & types in your browser.

var str = "472";

// Convert the string to a number
var num = parseInt(str);

// Display the values and types in the browser
document.write("Original string: " + str + "<br>");
document.write("Converted number: " + num + "<br>");
document.write("Type of original string: " + typeof str + "<br>");
document.write("Type of converted number: " + typeof num + "<br>");

// 10. Write a program that takes user input. Convert and
// show the input in capital letters.
user_input = input("Enter a text: ");
capitalized_text = user_input.upper();
print("Capitalized text:", capitalized_text);

// 11. Write a program that takes user input. Convert and
// show the input in title case.

const userInput = prompt("Enter a sentence: ");

const titleCase = userInput
  .toLowerCase()
  .split(" ")
  .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
  .join(" ");

console.log("Title Case: " + titleCase);

// 12. Write a program that converts the variable num to
// string.
// var num = 35.36 ;
// Remove the dot to display “3536” display in your browser.

var num = 35.36;
var numString = num.toString().replace(".", "");

document.write("Result: " + numString);

// 13. Write a program to take user input and store username
// in a variable. If the username contains any special symbol
// among [@ . , !], prompt the user to enter a valid username.
// For character codes of [@ .
// Note:
// ASCII code of ! is 33
// ASCII code of , is 44
// ASCII code of . is 46
// ASCII code of @ is 64

var username = prompt("Enter your username: ");
var isValid = true;

for (var i = 0; i < username.length; i++) {
  var charCode = username.charCodeAt(i);
  if (
    charCode === 64 ||
    charCode === 33 ||
    charCode === 44 ||
    charCode === 46
  ) {
    isValid = false;
    break;
  }
}

if (!isValid) {
  alert("Please enter a valid username without special symbols [@ . , !]");
} else {
  alert("Username is valid!");
}

// 14. You have an array
// A = [cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array. After searching, prompt the user whether the given
// item is found in the list or not.
// Note: Perform case insensitive search. Whether the user
// enters cookie, Cookie, COOKIE or coOkIE, program
// should inform about its availability.

var A = ["cake", "apple pie", "cookie", "chips", "patties"];

var takeInput = prompt("Enter an item to search: ");
var found = false;

for (var i = 0; i < A.length; i++) {
  if (A[i].toLowerCase() === takeInput.toLowerCase()) {
    found = true;
    break;
  }
}

if (found) {
  alert("Item found in the list!");
} else {
  alert("Item not found in the list.");
}

// 15. Write a program to take password as an input from
// user. The password must qualify these requirements:
// a. It should contain alphabets and numbers
// b. It should not start with a number
// c. It must at least 6 characters long
// If the password does not meet above requirements,
// prompt the user to enter a valid password.
// For character codes of a-z, A-Z & 0-9, refer to ASCII
// table at the end of this document.

var password = prompt("Enter a password: ");
var isValid = true;

// Check if password contains alphabets and numbers
var containsAlphabet = /[a-zA-Z]/.test(password);
var containsNumber = /\d/.test(password);

// Check if password starts with a number
var startsWithNumber = /^\d/.test(password);

// Check if password is at least 6 characters long
var isLengthValid = password.length >= 6;

// Check all requirements
if (
  !containsAlphabet ||
  !containsNumber ||
  startsWithNumber ||
  !isLengthValid
) {
  isValid = false;
}

if (!isValid) {
  alert("Please enter a valid password that meets the requirements.");
} else {
  alert("Password is valid!");
}

// 16. Write a program to convert the following string to an
// array using string split method.
// var university = “University of Karachi”;
// Display the elements of array in your browser.

var university = "University of Karachi";
var array = university.split(" ");

document.write("Array Elements: " + array.join(", "));

// 17. Write a program to display the last character of a user
// input.
var uInput = prompt("Enter a string: ");
var lastCharacter = uInput.charAt(uInput.length - 1);

alert("Last character: " + lastCharacter);

// 18. You have a string “The quick brown fox jumps over the
// lazy dog”. Write a program to count number of
// occurrences of word “the” in given string.

var sentence = "The quick brown fox jumps over the lazy dog";
var wordToCount = "the";
var count = 0;

// Convert the sentence to lowercase for case-insensitive matching
var lowercaseSentence = sentence.toLowerCase();

// Split the sentence into an array of words
var words = lowercaseSentence.split(" ");

// Iterate through the words and count the occurrences of the specified word
for (var i = 0; i < words.length; i++) {
  if (words[i] === wordToCount.toLowerCase()) {
    count++;
  }
}

alert("Number of occurrences of '" + wordToCount + "': " + count);