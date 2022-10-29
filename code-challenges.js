// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Describing your process is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in two strings and determines which of the two strings has more characters. Use the two sets of test variables provided.

// Describe your process:
// Create a function that takes two paramaters that are strings.
// Use a conditional statement to check to see which string is longer.
// Return the longer string.
// Correct for equal length strings and for an incorrect input.
// Log the results to check for correct function.
// Set one:
const fruit1 = "apple"
const fruit2 = "banana"
// Expected outcome: "banana"

// Set two:
const fruit3 = "cherry"
const fruit4 = "kiwi"
// Expected outcome: "cherry"

let fruitCheck = (str1,str2) => {
    if (str1.length == str2.length) {
        return `${str1} is the same length as ${str2}`;
    } else if (str1.length > str2.length){
        return str1;
    } else if (str1.length < str2.length){
        return str2;
    } else {
        return "An error has occured, please try again";
    }
}

console.log(fruitCheck(fruit1,fruit2)); //banana
console.log(fruitCheck(fruit3,fruit4)); //cherry
console.log(fruitCheck(fruit2,fruit3)); //banana is the same length as cherry

// --------------------1) Create a function that takes in a number and determines if the given number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below.

// Describe your process:
// Create a function that takes a number as a paramater.
// Create a conditional statement within the function that will check to see if the temperature is at, below, or above boiling.
// The output should state the input number and wheter it is at, below, or above the boiling point.
// Log the output to check

const temp1 = 42
// Expected output: "42 is below boiling point"

const temp2 = 350
// Expected output: "350 is above boiling point"

const temp3 = 212
// Expected output: "212 is at boiling point"

let checkBoil = (num) => {
    if (num > 212){
        return `${num} is above boiling point`
    }else if (num === 212) {
        return `${num} is at boiling point`
    } else {
        return `${num} is below boiling point`
    }
}

console.log(checkBoil(temp1)); //42 is below boiling point
console.log(checkBoil(temp2)); //350 is above boiling point
console.log(checkBoil(temp3)); //212 is at boiling point

// --------------------2) Create the code that will combine the two arrays and return the length using the test variables provided below.

// Describe your process:
//No function is necessary though it is possible to create one that would work.
//Use the built in concat method to combine the strings then use the built in length method to get the length. 
//Need to create a new array variable because we are using an accessor method.
//Also possible to concat with the spread operator like ...arr. This is also an accessor method as it will not change the original array.
//bonus function that takes in two arrays, concats them, then returns their length

const padres1984WorldSeriesRuns = [2, 5, 2, 2, 4]
const padres1998WorldSeriesRuns = [6, 3, 5, 3]
// Expected output: 9

let padresCombined = padres1984WorldSeriesRuns.concat(padres1998WorldSeriesRuns)
console.log(padresCombined.length); // 9

let padsCombined = [...padres1984WorldSeriesRuns, ...padres1998WorldSeriesRuns]
console.log(padsCombined.length); // 9

let combine = (arr1, arr2) => {
    let combined = [...arr1, ...arr2]
    return combined.length
}
console.log(combine(padres1984WorldSeriesRuns, padres1998WorldSeriesRuns)); // 9

// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below.

// Describe your process:
//Can simple used the build in method .reverse but this will only work on an array.
//First use .split("") on the string to form it into an array, then .reverse() to reverse the array, then .join("") form it into a string.
//Can be used all together within the log.

const currentCohort = "Golf 2022"
// Expected output: "2202 floG"
console.log(currentCohort.split("").reverse().join(""));  //2202 floG

// --------------------4) Create the code that will return the last index of the given value from the array using the test variables provided below.

// Describe your process:
// Just use the lastIndexOf built in method to log the last index of the given value.
const myNumbers = [13, 34, 42, 5, 5, 10, 27, 42, 10]
const givenValue1 = 42
// Expected output: 7

const givenValue2 = 10
// Expected output: 8

console.log(myNumbers.lastIndexOf(givenValue1)); // 7
console.log(myNumbers.lastIndexOf(givenValue2)); // 8
// --------------------5) Create the code that will sort all the numbers in an array from largest to smallest. Use the test variables provided below.

// Describe your process:
// Use the built in sort method .sort((a,b)=> b-a) to sort the array from largest to smallest
//Could also just use the .sort() which will go smallest to largest then reverse the array.

const sanDiegoSummerTemperatures = [79, 80, 72, 73, 82, 77, 76]
// Expected output: [82, 80, 79, 77, 76, 73, 72]

const sanDiegoWinterTemperatures = [59, 68, 62, 59, 66, 67, 66]
// Expected output: [68, 67, 66, 66, 62, 59, 59]

console.log(sanDiegoSummerTemperatures.sort((a,b) => b-a)); //[82, 80, 79, 77, 76, 73, 72]
console.log(sanDiegoWinterTemperatures.sort((a,b) => b-a)); //[68, 67, 66, 66, 62, 59, 59]
console.log(sanDiegoSummerTemperatures.sort().reverse()); //[82, 80, 79, 77, 76, 73, 72]
console.log(sanDiegoWinterTemperatures.sort().reverse()); //[68, 67, 66, 66, 62, 59, 59]

//testing to see if toUpperCase changes the string or creates a new string
let string = "This is my string and I like it"
string.toUpperCase()
console.log(string); //This is my string and I like it