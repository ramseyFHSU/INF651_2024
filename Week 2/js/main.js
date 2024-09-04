// Explanation of how binary works to store data
let number = 13; // This is a decimal number
console.log(number.toString(2)); // Convert number to binary string and log it
// Output: "1101" which is the binary representation of 13

// Using let and const to declare and initialize variables
let myName = "Chris"; // Variable declared with let; can be reassigned
const age = 25; // Variable declared with const; cannot be reassigned

console.log(myName); // Output: Chris
console.log(age); // Output: 25

myName = "Alex"; // This is allowed
console.log(myName); // Output: Alex

// age = 30; // This will throw an error because 'const' cannot be reassigned

// Correct and incorrect variable names
let userName = "Alice"; // Correct: descriptive and uses camelCase
let $user = "Bob"; // Valid but not recommended for beginners
let _user = "Charlie"; // Valid but not recommended for beginners

// let 1name = 'Eve'; // Incorrect: starts with a number
// let user-name = 'Dylan'; // Incorrect: contains a hyphen

console.log(userName); // Output: Alice
console.log($user); // Output: Bob
console.log(_user); // Output: Charlie

// Arithmetic operations and order of precedence
const int1 = 4;
const int2 = 5;
const int3 = int1 + int2;
console.log(int3);
const int4 = int1 * int2;
console.log(int4);
let result1 = 10 + 5 * 2; // Multiplication before addition
console.log(result1); // Output: 20

let result2 = (10 + 5) * 2; // Parentheses change order
console.log(result2); // Output: 30

// String concatenation and template literals
let string1 = "this is double quote";
let string2 = "this is single quote";
let string3 = `this is from string3 ${string1} and ${string2}`;
let firstName = "John";
let lastName = "Doe";

// String concatenation
let fullNameConcat = firstName + " " + lastName;
console.log(fullNameConcat); // Output: John Doe

// Template literals
let fullNameTemplate = `${firstName} ${lastName}`;
console.log(fullNameTemplate); // Output: John Doe

// Special numbers in JavaScript
console.log(10 / 0); // Output: Infinity
console.log(-10 / 0); // Output: -Infinity
console.log(0 / 0); // Output: NaN

// Boolean values and comparison operators
let isGreater = 5 > 3; // true
let isLess = 3 > 5; // false

console.log(isGreater); // Output: true
console.log(isLess); // Output: false

// Logical operators
let isSunny = true;
let isRaining = false;

console.log(isSunny && isRaining); // Output: false (AND operator)
console.log(isSunny || isRaining); // Output: true (OR operator)
console.log(!isSunny); // Output: false (NOT operator)

// Using the Math object for mathematical calculations
console.log(Math.round(4.6)); // Output: 5 (rounds to nearest integer)
console.log(Math.floor(4.6)); // Output: 4 (rounds down)
console.log(Math.ceil(4.2)); // Output: 5 (rounds up)
console.log(Math.pow(2, 3)); // Output: 8 (2 raised to the power of 3)
console.log(Math.max(1, 5, 10)); // Output: 10 (largest number)
console.log(Math.min(1, 5, 10)); // Output: 1 (smallest number)

// Methods to manipulate strings
let text = "JavaScript";

// Convert to lowercase and split into characters
console.log(text.toLowerCase().split("")); // Output: ['j', 'a', 'v', 'a', 's', 'c', 'r', 'i', 'p', 't']

// Convert to uppercase
console.log(text.toUpperCase()); // Output: JAVASCRIPT

// Concatenate strings
let greeting = "Hello";
let audience = "World";
console.log(greeting.concat(" ", audience)); // Output: Hello World

// Find the length of a string
console.log(text.length); // Output: 10

// Using the ternary operator for conditional expressions
let age2 = 20;
let canVote = age >= 18 ? "Yes" : "No";
console.log(canVote); // Output: Yes

let score = 85;
let grade = score > 90 ? "A" : score > 80 ? "B" : "C";
console.log(grade); // Output: B
