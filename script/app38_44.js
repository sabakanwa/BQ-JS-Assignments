// 1. Write a custom function power ( a, b ), to calculate the value of
// a raised to b.

function power(a, b) {
    const result = Math.pow(a, b);
    document.write(`${a} raised to ${b} is ${result}.`);
    return result;
  }
  
  power(2, 3);
  
  // 2. Any year is entered through the keyboard. Write a function to
  // determine whether the year is a leap year or not.
  // Leap years ..., 2012, 2016, 2020, …
  function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
           document.write(`${year} is a leap year.`);
          return true;
        } else {
            document.write(`${year} is not a leap year.`);
          return false;
        }
      } else {
         document.write(`${year} is a leap year.`);
        return true;
      }
    } else {
       document.write(`${year} is not a leap year.`);
      return false;
    }
  }
  isLeapYear(2020); // Output should be : 2020 is a leap year.
  
  // 3. If the lengths of the sides of a triangle are denoted by a, b, and
  // c, then area of triangle is given by
  // area = S(S − a)(S − b)(S − c)
  // where, S = ( a + b + c ) / 2
  // Calculate area of triangle using 2 functions
  function calcS(a, b, c) {
    const s = (a + b + c) / 2;
    return s;
  }
  
  function calcArea(a, b, c) {
    const s = calcS(a, b, c);
    const area = Math.sqrt(s * (s - a) * (s - b) * (s - c));
     document.write(`The area of the triangle is ${area}.`);
    return area;
  }
  calcArea(6, 4, 5); // Output: It will return the area of triangle
  
  // 4. Write a function that receives marks received by a student in 3
  // subjects and returns the average and percentage of these
  // marks. there should be 3 functions one is the mainFunction
  // and other are for average and percentage. Call those functions
  // from mainFunction and display result in mainFunction.
  
  function calcAverage(subject1, subject2, subject3) {
    const average = (subject1 + subject2 + subject3) / 3;
    return average;
  }
  
  function calcPercentage(totalMarks, obtainedMarks) {
    const percentage = (obtainedMarks / totalMarks) * 100;
    return percentage;
  }
  
  function mainFunction(subject1, subject2, subject3) {
    const totalMarks = 300;
    const obtainedMarks = subject1 + subject2 + subject3;
    const average = calcAverage(subject1, subject2, subject3);
    const percentage = calcPercentage(totalMarks, obtainedMarks);
     document.write(
      `The average marks are ${average} and the percentage is ${percentage}%.` +"<br>"
    );
  }
  
  mainFunction(80, 90, 70);
  
  // 5. You have learned the function indexOf. Code your own custom
  // function that will perform the same functionality. You can code
  // for single character as of now.
  function myIndexOf(str, substr) {
    for (let i = 0; i < str.length; i++) {
      if (str[i] === substr[0]) {
        let match = true;
        for (let j = 1; j < substr.length; j++) {
          if (str[i + j] !== substr[j]) {
            match = false;
            break;
          }
        }
        if (match) {
          return i;
        }
      }
    }
    return -1;
  }
  
   document.write(myIndexOf("hello world", "o") +"<br>");
  
  // 6. Write a function to delete all vowels from a sentence. Assume
  // that the sentence is not more than 25 characters long.
  function removeVowels(sentence) {
    const vowels = ["a", "e", "i", "o", "u"];
    let result = "";
    for (let i = 0; i < sentence.length; i++) {
      if (!vowels.includes(sentence[i])) {
        result += sentence[i];
      }
    }
    return result;
  }
   document.write(removeVowels("This is a sentence with vowels.") +"<br>");
  
  // Write a function with switch statement to count the number of
  // occurrences of any two vowels in succession in a line of text.
  // For example, in the sentence
  // “Pleases read this application and give me gratuity”
  // Such occurrences are ea, ea, ui
  
  function countSuccessiveVowels(text) {
    let count = 0;
    const vowels = ["a", "e", "i", "o", "u"];
    for (let i = 1; i < text.length; i++) {
      const prevChar = text[i - 1].toLowerCase();
      const currChar = text[i].toLowerCase();
      if (vowels.includes(prevChar) && vowels.includes(currChar)) {
        count++;
      }
    }
    return count;
  }
  //To call this function and count the number of occurrences of any two successive vowels in a line of text, we can pass the text as an argument to the countSuccessiveVowels function:
  const text = "Pleases read this application and give me gratuity";
  const occurrences = countSuccessiveVowels(text);
  document.write(`Number of occurrences: ${occurrences}`+"<br>");
  
  // 8. The distance between two cities (in km.) is input through the
  // keyboard. Write four functions to convert and print this
  // distance in meters, feet, inches and centimeters.
  
  function kmToMeters(km) {
    return km * 1000;
  }
  
  function kmToFeet(km) {
    return km * 3280.84;
  }
  
  function kmToInches(km) {
    return km * 39370.1;
  }
  
  function kmToCentimeters(km) {
    return km * 100000;
  }
  
  const distanceInKm = 100;
  const distanceInMeters = kmToMeters(distanceInKm);
  const distanceInFeet = kmToFeet(distanceInKm);
  const distanceInInches = kmToInches(distanceInKm);
  const distanceInCentimeters = kmToCentimeters(distanceInKm);
  
 document.write(`Distance in meters: ${distanceInMeters}`);
 document.write(`Distance in feet: ${distanceInFeet}`+"<br>");
 document.write(`Distance in inches: ${distanceInInches}` +"<br>");
 document.write(`Distance in centimeters: ${distanceInCentimeters}`+"<br>");
  
  // 9. Write a program to calculate overtime pay of employees.
  // Overtime is paid at the rate of Rs. 12.00 per hour for every hour
  // worked above 40 hours. Assume that employees do not work
  // for fractional part of an hour.
  function calculateCurrencyNotes(amountInHundreds) {
    const denominations = [100, 50, 10];
    const notes = [0, 0, 0];
  
    for (let i = 0; i < denominations.length; i++) {
      notes[i] = Math.floor(amountInHundreds / denominations[i]);
      amountInHundreds = amountInHundreds % denominations[i];
    }
  
    return notes;
  }
  
  const amountInHundreds = prompt(
    "Enter the amount to be withdrawn in hundreds:"
  );
  const notes = calculateCurrencyNotes(parseInt(amountInHundreds));
  const hundredNotes = notes[0];
  const fiftyNotes = notes[1];
  const tenNotes = notes[2];
  
  document.write(
    `You will have ${hundredNotes} hundred notes, ${fiftyNotes} fifty notes, and ${tenNotes} ten notes.`
  );