 //Q:1
 var age = "My age is 21 Year old";
 alert(age);



 //Q:2
 var visitCount = 0;

// Function to update and display the visit count
function updateVisitCount() {
visitCount++;
document.getElementById("visitCountText").innerHTML = "You have visited this site " + visitCount + " times.";

}
window.onload = updateVisitCount;


//Q:3
var birthyear = " My Birth year is 2002";
document.write(birthyear + "\n" + "Declare datatype of my variable  is number \n");


//Q:4
var visitor = prompt("Enter your name");
var product = prompt("Enter Product Title");
var quant  = prompt("How Many Product You want to order"); 
document.write(visitor +"Done Ordered " +quant + product+"From XYZ Clothing Store")