// 1. Write a program that displays current date and time in
// your browser.
// Function to update the date and time
function updateDateTime() {
    var datetimeElement = document.getElementById("datetime");
    var now = new Date();
  
    // Format the date and time
    var date = now.toDateString();
    var time = now.toLocaleTimeString();
  
    // Set the text content of the element
    datetimeElement.textContent =
      "Current Date: " + date + " | Current Time: " + time;
  }
  
  // Call the updateDateTime function when the page loads
  window.onload = updateDateTime;
  
  // 2. Write a program that alerts the current month in words.
  // For example December.
  
  // Function to alert the current month in words
  function alertCurrentMonth() {
    var months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];
    var now = new Date();
    var currentMonth = now.getMonth();
  
    // Get the month name from the months array
    var monthName = months[currentMonth];
  
    // Alert the current month
    alert("Current Month: " + monthName);
  }
  
  // Call the alertCurrentMonth function
  alertCurrentMonth();
  
  // 3. Write a program that alerts the first 3 letters of the current
  // day, for example if today is Sunday then alert will show
  // Sun.
  
  // Function to alert the first 3 letters of the current day
  function alertCurrentDay() {
    var days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    var now = new Date();
    var currentDay = now.getDay();
  
    // Get the day name from the days array
    var dayName = days[currentDay];
  
    // Alert the first 3 letters of the current day
    alert("Current Day: " + dayName);
  }
  
  // Call the alertCurrentDay function
  alertCurrentDay();
  
  // 4. Write a program that displays a message “It’s Fun day” if
  // its Saturday or Sunday today.
  
  // Function to check if it's Saturday or Sunday
  function checkIfFunDay() {
    var now = new Date();
    var currentDay = now.getDay();
  
    // Check if it's Saturday (day 6) or Sunday (day 0)
    if (currentDay === 6 || currentDay === 0) {
      alert("It's Fun day");
    } else {
      alert("It's not Fun day");
    }
  }
  
  // Call the checkIfFunDay function
  checkIfFunDay();
  
  //   5. Write a program that shows the message “First fifteen
  // days of the month” if the date is less than 16th of the month
  // else shows “Last days of the month”.
  
  // Function to check if it's the first fifteen days or last days of the month
  function checkDateRange() {
    var now = new Date();
    var currentDate = now.getDate();
  
    // Check if the date is less than 16th
    if (currentDate < 16) {
      alert("First fifteen days of the month");
    } else {
      alert("Last days of the month");
    }
  }
  
  // Call the checkDateRange function
  checkDateRange();
  
  //   6. Write a program that determines the minutes since
  // midnight, Jan. 1, 1970 and assigns it to a variable that
  // hasn't been declared beforehand. Use any variable you like
  // to represent the Date object.
  const now = new Date();
  const minutesSinceEpoch = Math.floor(now.getTime() / 60000);
  console.log("Current Date and Time:", now);
  console.log("Minutes since midnight, Jan. 1, 1970:", minutesSinceEpoch);
  
  // 7. Write a program that tests whether it's before noon and
  // alert “Its AM” else “its PM”.
  const still = new Date();
  const hours = still.getHours();
  
  if (hours < 12) {
    console.log("It's AM");
  } else {
    console.log("It's PM");
  }
  
  // 8. Write a program that creates a Date object for the last day
  // of the last month of 2020 and assigns it to variable named
  // laterDate.
  const laterDate = new Date(2020, 11, 0);
  console.log("Later Date:", laterDate);
  
  // 9. Create a date object of the starting date of this Ramadan
  // and alert the number of days past since 1st Ramadan?
  // Note: 1st Ramadan was on June 18, 2015
  const ramadanStart = new Date(2023, 2, 22);
  const firstRamadan = new Date(2015, 5, 18);
  const timeDiff = Math.abs(ramadanStart.getTime() - firstRamadan.getTime());
  const daysDiff = Math.ceil(timeDiff / (1000 * 3600 * 24));
  console.log(`Number of days past since 1st Ramadan: ${daysDiff}`);
  
  // 10. Write a program that displays in your browser the
  // seconds that elapsed between the reference date and the
  // beginning of 2015.
  const referenceDate = new Date();
  const beginningOf2015 = new Date(2015, 0, 1);
  const timeDiffe = Math.abs(referenceDate.getTime() - beginningOf2015.getTime());
  const secondsDiff = Math.floor(timeDiffe / 1000);
  document.write(`Seconds elapsed since the beginning of 2015: ${secondsDiff}`);
  
  // 11. Create a Date object for the current date and time.
  // Extract the hours, reset the date object an hour ahead and
  // finally display the date object in your browser.
  
  const currentDate = new Date();
  const currentHours = currentDate.getHours();
  currentDate.setHours(currentHours + 1);
  document.write(`Date object one hour ahead: ${currentDate.toLocaleString()}`);
  
  // 12. Write a program that creates a date object and show the
  // date in an alert box that is reset to 100 years back?
  
  const currenDate = new Date();
  currentDate.setFullYear(currenDate.getFullYear() - 100);
  const dateStr = currenDate.toDateString();
  alert(`Date 100 years back: ${dateStr}`);
  
  // 13. Write a program to ask the user about his age. Calculate
  // and show his birth year in your browser.
  const age = prompt("Enter your age:");
  const currentDt = new Date();
  const birthYear = currentDt.getFullYear() - age;
  document.write(`Your birth year is: ${birthYear}`);
  
  // 14. Write a program to generate your K-Electric bill in your
  // browser. All the amounts should be rounded off to 2
  // decimal places. Display the following fields:
  // a. Customer Name
  // b. Current Month
  // c. Number of units
  // d. Charges per unit
  // e. Net Amount Payable (within Due Date)
  // f. Late Payment Surcharge
  // g. Gross Amount Payable (after Due Date)
  // Where,
  // Net Amount Payable (within Due Date) = Number of units * Charges per unit
  // & Gross Amount Payable (after Due Date) = Net Amount + Late Payment Surcharge
  
  const customerName = prompt("Enter your name:");
  const currentMonth = prompt("Enter current month:");
  const numberOfUnits = parseFloat(prompt("Enter number of units consumed:"));
  const chargesPerUnit = 16;
  const netAmountPayable = numberOfUnits * chargesPerUnit;
  const latePaymentSurcharge = netAmountPayable * 0.1;
  const grossAmountPayable = netAmountPayable + latePaymentSurcharge;
  const formattedNetAmountPayable = netAmountPayable.toFixed(2);
  const formattedLatePaymentSurcharge = latePaymentSurcharge.toFixed(2);
  const formattedGrossAmountPayable = grossAmountPayable.toFixed(2);
  
  document.write(`<h1>K-Electric Bill</h1>
                  <p>Customer Name: ${customerName}</p>
                  <p>Current Month: ${currentMonth}</p>
                  <p>Number of units: ${numberOfUnits}</p>
                  <p>Charges per unit: ${chargesPerUnit}</p>
                  <p>Net Amount Payable (within Due Date): ${formattedNetAmountPayable}</p>
                  <p>Late Payment Surcharge: ${formattedLatePaymentSurcharge}</p>
                  <p>Gross Amount Payable (after Due Date): ${formattedGrossAmountPayable}</p>`);