// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer: 5
// b) Verify and explain: We did it together in class but basically the push methods output is the length of the array it produces.

// --------------------1) What will this log?

const cohort = "LEARN 2022"
 // console.log(cohort.length)

// a) Your answer: 10
// b) Verify and explain: The output was 10 as the total length of the string was 10 counting the space.

// --------------------2) What will this log?

const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer: 'o'
// b) Verify and explain: The answer is 'o' because strings are zero indexed meaning the first letter starts at 0 and the second letter is 1 so on and so forth meaning that index of 4 is actually the 5th letter. Also bracket notation with a number after either a string or an array will point at the character or item at that index.

// --------------------3) What will this log?

const languages = ["JavaScript", "Ruby", "Python", "C++"]
const index = 1
// console.log(languages[index])

// a) Your answer: "Ruby"
// b) Verify and explain: The answer is Ruby because arrays are 0 indexed meaning the first item in the array starts at 0, therefore the item at the 1 index is actually the 2nd item in the array. Square brackets after an array will point to the item at that index.

// --------------------4) What will this log?

const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer: can not read undefined or possibly toUpperCase is not a function due to toUpperCase being a string method and not an array method.
// b) Verify and explain: TypeError: weekendDays.toUpperCase is not a function is the answer given and that is because like I said before toUpperCase is a string method and does not work on arrays.

// --------------------5) What will this log?

const dataTypes = ["number", "string", "Boolean", "undefined"]
console.log(typeof dataTypes.length)

// a) Your answer: "number"
// b) Verify and explain: Array.length gives you the length of an array as a number data type. typeof function gives you the data type as a string of whatever data type the data is.
