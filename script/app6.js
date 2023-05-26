// 1. Write a program to take a number in a variable, do the
// required arithmetic to display the following result in your
// browser:
var a = 10;
document.write("The value of a is: " + a + "</br>"); 
a = ++a;
document.write("The value of a is: " + +a + "</br>"); 
document.write("The value of a is: " + a + "</br>"); 
a = a++
document.write("The value of a is: " + a + "</br>"); 
a = --a;
document.write("The value of a is: " + a + "</br>" ); 
a = a--;
document.write("The value of a is: " + a + "</br>"); 


// 2. What will be the output in variables a, b & result after
// execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Explain the output at each stage:
// --a;
// --a - --b;
// --a - --b + ++b;
// --a - --b + ++b + b--;



// 3. Write a program that takes input a name from user & 
// greet the user.
var name = prompt("Enter your name: ");
document.write("hello " + name + " Good morning!" +  "</br>");





// 4. Write a program to take input a number from user & 
// display it’s multiplication table on your browser. If user 
// does not enter a new number, multiplication table of 5 
// should be displayed by default.





// 5. Take
// a) Take three subjects name from user and store them in 3 
// different variables.
// b) Total marks for each subject is 100, store it in another 
// variable.
// c) Take obtained marks for first subject from user and 
// stored it in different variable
// d) Take obtained marks for remaining 2 subjects from user 
// and store them in variables.
// e) Now calculate total marks and percentage and show the 
// result in browser like this.(Hint: user table)
var sub1 = prompt("Enter subject 1: ");
var sub2 = prompt("Enter subject 2: ");
var sub3 = prompt("Enter subject 3: ");
var eachMarks = 100;
var totalMarks = 100 * 3;

var marks1 = +prompt("Enter marks of subject 1: ");
var marks2 = +prompt("Enter marks of subject 2: ");
var marks3 = +prompt("Enter marks of subject 3: ");
var obtained = marks1 + marks2 + marks3;
// var percentage = (marks1 + marks2 + marks3 / totalMarks) * 100;
var percentage1 = (marks1 / eachMarks) * 100 ;
var percentage2 = (marks2 / eachMarks) * 100 ;
var percentage3 = (marks3 / eachMarks) * 100 ;
var average = (percentage1 + percentage2 + percentage3) / 3;
document.write(sub1 + "    " +eachMarks + "   " + marks1 + "  " + percentage1 + "%" + "</br>");
document.write(sub2 + "    " +eachMarks + "   " + marks2 + "  " + percentage2 + "%" + "</br>");
document.write(sub3 + "    " +eachMarks + "   " + marks3 + "  " + percentage3 + "%" + "</br>");
document.write(totalMarks + "   " + obtained+ "  " + average + "%");