// Take input from the user
var cityName = prompt("Enter the name of your city:");

// Check if the city is Karachi
if (cityName.toLowerCase() === "karachi") {
  // Display the welcome message
  document.write("Welcome to the city of lights!");
} else {
  // Display a generic welcome message
  document.write("Welcome!");
}

// Take input from the user
var gender = prompt("Enter your gender:");

// Check the gender and display the appropriate greeting
if (gender.toLowerCase() === "male") {
  document.write("Good Morning Sir.");
} else if (gender.toLowerCase() === "female") {
  document.write("Good Morning Ma'am.");
} else {
  document.write("Good Morning!");
}

// Take input from the user
var signalColor = prompt("Enter the color of the road traffic signal:");

// Check the color and display the corresponding message
if (signalColor.toLowerCase() === "red") {
  document.write("Must Stop");
} else if (signalColor.toLowerCase() === "yellow") {
  document.write("Ready to move");
} else if (signalColor.toLowerCase() === "green") {
  document.write("Move now");
} else {
  document.write("Invalid signal color");
}

// Take input from the user
var remainingFuel = parseFloat(prompt("Enter the remaining fuel in your car (in liters):"));

// Check the fuel level and display the appropriate message
if (remainingFuel < 0.25) {
  document.write("Please refill the fuel in your car");
} else {
  document.write("Fuel level is sufficient");
}

var a = 4;
if (++a === 5){
  alert("given condition for variable a is true");
}

var b = 82;
if (b++ === 83){
  alert("given condition for variable b is true");
}

var c = 12;
if (c++ === 13){
  alert("condition 1 is true");
}
if (c === 13){
  alert("condition 2 is true");
}
if (++c < 14){
  alert("condition 3 is true");
}
if(c === 14){
  alert("condition 4 is true");
}

var materialCost = 20000;
var laborCost = 2000;
var totalCost = materialCost + laborCost;
if (totalCost === laborCost + materialCost){
  alert("The cost equals");
}

if (true){
  alert("True");
}
if (false){
  alert("False");
}

if("car" < "cat"){
  alert("car is smaller than cat");
}

// Take input from the user
var subject1Marks = parseInt(prompt("Enter marks obtained in subject 1:"));
var subject2Marks = parseInt(prompt("Enter marks obtained in subject 2:"));
var subject3Marks = parseInt(prompt("Enter marks obtained in subject 3:"));
var totalMarks = parseInt(prompt("Enter total marks:"));

// Calculate total obtained marks and percentage
var totalObtainedMarks = subject1Marks + subject2Marks + subject3Marks;
var percentage = (totalObtainedMarks / totalMarks) * 100;

// Determine the grade based on the percentage
var grade, remarks;
if (percentage >= 80) {
  grade = "A+";
  remarks = "Excellent";
} else if (percentage >= 70) {
  grade = "A";
  remarks = "Good";
} else if (percentage >= 60) {
  grade = "B";
  remarks = "Satisfactory";
} else if (percentage >= 50) {
  grade = "C";
  remarks = "Average";
} else {
  grade = "Fail";
  remarks = "Poor";
}

// Display the result
document.write("Total Marks: " + totalMarks + "<br>");
document.write("Marks Obtained: " + totalObtainedMarks + "<br>");
document.write("Percentage: " + percentage.toFixed(2) + "%<br>");
document.write("Grade: " + grade + "<br>");
document.write("Remarks: " + remarks);

// Generate a random secret number between 1 and 10
var secretNumber = Math.floor(Math.random() * 10) + 1;

// Prompt the user to guess the secret number
var userGuess = parseInt(prompt("Guess the secret number (between 1 and 10):"));

// Check if the user's guess is correct or close enough
if (userGuess === secretNumber) {
  document.write("Bingo! Correct answer.");
} else if (userGuess === secretNumber + 1 || userGuess === secretNumber - 1) {
  document.write("Close enough to the correct answer.");
} else {
  document.write("Sorry, incorrect guess.");
}

// Take input from the user
var number = parseInt(prompt("Enter a number:"));

// Check if the number is divisible by 3
if (number % 3 === 0) {
  document.write("The number is divisible by 3.");
} else {
  document.write("The number is not divisible by 3.");
}

// Take input from the user
var number = parseInt(prompt("Enter a number:"));

// Check if the number is even or odd
if (number % 2 === 0) {
  document.write("The number is even.");
} else {
  document.write("The number is odd.");
}

// Take input from the user
var temperature = parseInt(prompt("Enter the temperature in degrees:"));

// Check the temperature and display the appropriate message
if (temperature > 40) {
  document.write("It is too hot outside.");
} else if (temperature > 30) {
  document.write("The weather today is normal.");
} else if (temperature > 20) {
  document.write("Today's weather is cool.");
} else if (temperature > 10) {
  document.write("OMG! Today's weather is so cool.");
} else {
  document.write("It is extremely cold outside.");
}

// Take input from the user
var firstNumber = parseFloat(prompt("Enter the first number:"));
var secondNumber = parseFloat(prompt("Enter the second number:"));
var operation = prompt("Enter the operation (+, -, *, /, %):");

// Perform the operation based on the user's input
var result;
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
  document.write("Invalid operation.");
}

// Display the calculated result
document.write("Result: " + result);
