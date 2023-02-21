// To run this assignment, right click on index.html in the Visual Studio Code file explorer to the left
// and select "Open with Live Server"

/***********************/
/* Functions           */
/***********************/

// ----------------------------------------------------------------------------------------------
// Exercise One 
// - Return the number 5 from this function.
//
// Write your code here 👇

let getNumberFive = function() {
  let result = 5;
  return result;
}

console.log(getNumberFive());

// ----------------------------------------------------------------------------------------------
// Exercise Two
// - Complete the function named "add" that takes the two parameters (a and b), adds them 
//   together, and returns their sum.
// - For example, calling add(2, 4) should return a result of 6.
//
// Write your code here 👇


let add = function(a, b) {
  let sum = a + b
  return sum;
}

console.log(add(2, 4));

// ----------------------------------------------------------------------------------------------
// Exercise Three
// - Complete the function named "multiply" that takes the three parameters (x, y, and z),
//   multiplies them together, and returns their product.  
// - For example, calling multiply(4, 5, 6) should return a result of 120. 
//
// Write your code here 👇

let multiply = function(x, y, z) {
  let result = x * y * z;
  return result;
}

console.log(multiply(4, 5, 6));

// ----------------------------------------------------------------------------------------------
// Exercise Four
// - Complete the function named "concatenate" that takes two parameters (message and text).  
// - Add the text to the end of the message, and then return the complete string.
//
// Write your code here 👇

let concatenate = function(message, text) {
  let result = message + text;
  return result;
}

console.log(concatenate("Hello ", "World!"));

// ----------------------------------------------------------------------------------------------
// Exercise Five
// - Complete the function named "areaOfTriangle" that accepts two parameters
//   (base and height). The function will calculate the area of a triangle where "base"
//   is the length of the triangle's base and "height" is the length of the triangle's
//   height.
// - The area of a triangle can be found using the following equation:
//   Area of a triangle = length of base * length of height / 2
// - Create and return a string that concatenates this string, "The total area of the triangle is",
//   with the total area found by performing the calculation above.
// - Example: If the value of the base parameter is 5 and the value of the height
//   parameter is 10, the total area is 25, and the string to be returned 
//   is "The total area of the triangle is 25"
// 
// Write your code here 👇

let areaOfTriangle = function(base, height) {
  let triangleArea = base * height / 2;
  let result = "The total area of the triangle is " + triangleArea;
  return result;
}

console.log(areaOfTriangle(5, 10));

/* 
Leave the following code unmodified
*/

export {
    getNumberFive,
	add,
	multiply,
	concatenate,
	areaOfTriangle
};
