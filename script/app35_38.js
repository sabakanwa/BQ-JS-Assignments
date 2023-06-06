// 1. Write a function that displays current date & time in your
// browser.
function displayDateTime() {
    const now = new Date();
    const date = now.toDateString();
    const time = now.toLocaleTimeString();
    const dateTimeString = `${date} ${time}`;
    document.write(dateTimeString +"<br>");
  }
  displayDateTime();
  
  // 2. Write a function that takes first & last name and then it
  // greets the user using his full name.
  function greetUser(firstName, lastName) {
    const fullName = `${firstName} ${lastName}`;
    const greeting = `Hello, ${fullName}!`;
    document.write(greeting +"<br>");
  }
  greetUser("Dear", "Saba");
  
  // 3. Write a function that adds two numbers (input by user)
  // and returns the sum of two numbers.
  
  function addNumbers(num1, num2) {
    const sum = num1 + num2;
    return sum;
  }
  const num1 = Number(prompt("Enter the first number:"));
  const num2 = Number(prompt("Enter the second number:"));
  const sum = addNumbers(num1, num2);
  document.write(`The sum of ${num1} and ${num2} is ${sum}.` +"<br>");
  
  // 4. Calculator:
  // Write a function that takes three arguments num1, num2
  // & operator & compute the desired operation. Return and
  // show the desired result in your browser.
  
  function calculator(num1, num2, operator) {
    let result;
    switch (operator) {
      case "+":
        result = num1 + num2;
        break;
      case "-":
        result = num1 - num2;
        break;
      case "*":
        result = num1 * num2;
        break;
      case "/":
        result = num1 / num2;
        break;
      default:
        result = "Invalid operator";
    }
    document.write(`The result of ${num1} ${operator} ${num2} is ${result}.` +"<br>");
    return result;
  }
  
  calculator(8, 7, "+"); 
  calculator(8, 3, "-"); 
  calculator(10, 3, "*"); 
  calculator(11, 3, "/"); 
  calculator(5, 7, "%"); 
  
  // 5. Write a function that squares its argument.
  function square(num) {
    const result = num * num;
    document.write(`The square of ${num} is ${result}.` +"<br>");
    return result;
  }
  //To call this function and square a number, you we pass the number as an argument to the square function:
  square(5); // Output: The square of 5 is 25.
  square(10); // Output: The square of 10 is 100.
  
  // 6. Write a function that computes factorial of a number.
  function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    document.write(`The factorial of ${num} is ${result}.` +"<br>");
    return result;
  }
  
  //To call this function and compute the factorial of a number, we can pass the number as an argument to the factorial function:
  factorial(5); // Output: The factorial of 5 is 120.
  factorial(10); // Output: The factorial of 10 is 3628800.
  
  // 7. Write a function that take start and end number as inputs & display counting in your browser.
  function countNumbers(start, end) {
    let message = "";
    for (let i = start; i <= end; i++) {
      message += i + " ";
    }
    document.write(message);
    document.write(message);
  }
  
  //To call this function and display the counting in your browser, you can pass the start and end numbers as arguments to the countNumbers function:
  countNumbers(1, 10); // Output: 1 2 3 4 5 6 7 8 9 10
  
  // 8. Write a nested function that computes hypotenuse of a
  // right angle triangle.
  // Hypotenuse2 = Base2 + Perpendicular2
  // Take base and perpendicular as inputs.
  // Outer function : calculateHypotenuse()
  // Inner function: calculateSquare()
  function calculateHypotenuse(base, perpendicular) {
    function calculateSquare(num) {
      return num * num;
    }
    const baseSquare = calculateSquare(base);
    const perpendicularSquare = calculateSquare(perpendicular);
    const hypotenuse = Math.sqrt(baseSquare + perpendicularSquare);
    document.write(`The hypotenuse of the right angle triangle is ${hypotenuse}.`);
    return hypotenuse;
  }
  
  //To call this function and compute the hypotenuse of a right angle triangle, you can pass the base and perpendicular numbers as arguments to the calculateHypotenuse function:
  calculateHypotenuse(6, 4);
  calculateHypotenuse(5, 12);
  
  // 9. Write a function that calculates the area of a rectangle.
  //  A = width * height
  //  Pass width and height in following manner:
  // i. Arguments as value
  // ii. Arguments as variables
  // Arguments as value
  function calculateArea(width, height) {
    const area = width * height;
    document.write(`The area of the rectangle is ${area}.` +"<br>");
    return area;
  }
  
  // Arguments as variables
  const width = 9;
  const height = 7;
  calculateArea(width, height);
  
  // 10. Write a JavaScript function that checks whether a passed
  // string is palindrome or not?
  // A palindrome is word, phrase, or sequence that reads the same backward as
  // forward, e.g., madam.
  function checkPalindrome(str) {
    const reversedStr = str.split("").reverse().join("");
    if (str === reversedStr) {
        document.write(`The string "${str}" is a palindrome.`);
      return true;
    } else {
        document.write(`The string "${str}" is not a palindrome.`);
      return false;
    }
  }
  checkPalindrome("madam");
  checkPalindrome("hello");
  
  // 11. Write a JavaScript function that accepts a string as a
  // parameter and converts the first letter of each word of the
  // string in upper case.
  // EXAMPLE STRING : 'the quick brown fox'
  // EXPECTED OUTPUT : 'The Quick Brown Fox'
  
  function capitalizeFirstLetter(str) {
    const words = str.split(" ");
    const capitalizedWords = words.map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    );
    const capitalizedStr = capitalizedWords.join(" ");
    document.write(`The capitalized string is "${capitalizedStr}".` +"<br>");
    return capitalizedStr;
  }
  
  capitalizeFirstLetter("the quick brown fox");
  
  // 12. Write a JavaScript function that accepts a string as a
  // parameter and find the longest word within the string.
  // EXAMPLE STRING : 'Web Development Tutorial'
  // EXPECTED OUTPUT : 'Development'
  
  function findLongestWord(str) {
    const words = str.split(" ");
    let longestWord = "";
    for (let i = 0; i < words.length; i++) {
      if (words[i].length > longestWord.length) {
        longestWord = words[i];
      }
    }
    document.write(`The longest word in the string is "${longestWord}".` +"<br>");
    return longestWord;
  }
  
  findLongestWord("Web Development Tutorial");
  
  // 13. Write a JavaScript function that accepts two arguments, a
  // string and a letter and the function will count the number of
  // occurrences of the specified letter within the string.
  // Sample arguments : 'JSResourceS.com', 'o
  
  function countLetter(str, letter) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === letter) {
        count++;
      }
    }
    document.write(`The letter "${letter}" occurs ${count} times in the string.` +"<br>");
    return count;
  }
  
  countLetter("JSResourceS.com", "o");
  
  // 14. The Geometrizer
  // Create 2 functions that calculate properties of a circle, using the definitions here.
  // Create a function called calcCircumference:
  // • Pass the radius to the function.
  // • Calculate the circumference based on the radius, and output "The circumference is NN".
  // Create a function called calcArea:
  // • Pass the radius to the function.
  // • Calculate the area based on the radius, and output "The area is NN".
  // Circumference of circle = 2πr
  // Area of circle = πr2
  
  function calcCircumference(radius) {
    const circumference = 2 * Math.PI * radius;
    document.write(`The circumference is ${circumference}.` +"<br>");
    return circumference;
  }
  
  //The calcArea function should take the radius as a parameter, calculate the area based on the radius using the formula Area of circle = πr^2, and output "The area is NN".
  function calcArea(radius) {
    const area = Math.PI * radius ** 2;
    document.write(`The area is ${area}.`+"<br>" );
    return area;
  }
  //To call these functions and calculate the properties of a circle, we can pass the radius as an argument to each function:
  calcCircumference(5);
  calcArea(5);