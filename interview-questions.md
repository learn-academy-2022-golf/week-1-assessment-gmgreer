# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer: A conditional statement is a statement that checks to see if the input meets a certain condition then performs some action or inaction based on that result. 

Researched answer: There are four conditional statements in Javascript:
1. if
2. else
3. else if
4. switch

The switch case can be easier to use and read when there is a large amount of potential else if statements. The switch statements looks like this:
switch (expression) {
    case 1: 
        return something
        break;
    case 2:
        return something else
        break;
    default:
        return if nothing else
}

This expression can be continued indeffinitely and works by evaluating the expression once then comparing the value against each case and breaks out of the statement when the value matches the case. The default case will catch anything that matches none of the cases.

1. What is git? What is the difference between git and Github?

Your answer: git is a version control system that allows a user to track changes made to a repository. Also allows for greater control over what changes are allowed and can even revert changes or call back up previous versions of the repository. Using git through Github allows the saving of a remote repository which opens up the development process to many collaborators while keeping the base or main code relatively safe from errors. 

The differense between git and Github is that git is living on your local computer and is the actual program that tracks changes made to a repository. Github is a remote repository in the cloud that you are able to upload your repository to so that multiple people can work on it and it also protects you from fatal computer damage that could otherwise wipe out all of your work.

Researched answer: git is a type of SCM or source code management. Git allows for something called non linear development and encourages one to work on many different branches with many different people involved. Some features of git are:
. tracks history
. free and open source
. non-linear development
. creates backups
. scalable
. supports collaboration
. branching is easier
. distributed development

As for Github well, Github is all of the above on the cloud. It is just a place to help manage multiple people and teams working together merging branches using parallel development.

2. Which JavaScript operators will return a Boolean value?

Your answer: The and &&, or ||, and not ! operator are all boolean operators which when used in conditional statements will allow you to check if multiple or no condition is met.

Researched answer: IF a value can be converted to true, the value is considered truth. If a value can be converted to false, the value is falsy.
Statemetns that can be converted to false are:
. null
. NaN which means not a number
. 0
. empty string ("" or '' or ``)
. undefined

3. What is an index? What is the difference between index and value?

Your answer:Index is the number value given to a peice of data in an array or string. It is part of a key: value where the index is the unique key that points to a value. For example in the array [1,2,3], array[1] will point to the value 2 because the array is zero indexed. The index 1 is the key to the value 2. This key value is important for keeping track of where the data actually is and allows us to quickly retrieve said data.

Researched answer: I believe my above answer is adequate. When I research this I get a lot of methods for retreiving value by using the index which is what I described above.

4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: First the similarities, both strings and arrays have an index key value pair that starts with 0. Both can use the method .length to check for their respective lengths. You can use .slice on both to remove a portion and put it into a new string. Important to note that this does not change the string.

The differences, first strings are immutable meaning you can't change the string with any method such as push, pop, splice, reverse, shift, unshift basically anything that would actually change the value of the string, however you can turn a string into an array with .split. Then manipulate it with any array method listed above including sort and the join it back into a string using .join.

Researched answer: While it is true strings are immutable in javascript that is not true in all languages, many languages treat strings as reference types. I also realized that this may seem untrue if you look at toUpperCase and toLowerCase. I tested this at the bottom of the code-challenges.js file and showed that toUpperCase() and its opposite are actually creating a new string and not modifying the previous one. So if you wanted to change it permanately you would have to create a new variable with the string.toUpperCase().


5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: Pair programming has a driver and a navigator. It is the job of the navigator to make all inputs into the code while the navigator instructs the driver on what to input. This allows for two sets of eyes to be on the document at all times and in some cases gives some ability to research and code at the same time. This cuts down on time correction errors as two people are much more likely to pick up on any small mistakes.

Researched answer: There are different styles of pair programming. 

The first is the driver-navigator style that we have been using. An advantage of this when done well is things get done quickly and accurately. Another take on this might be the driver describing what they plan to do next kind of like pseudo code then allowing the navigator to give input or decide the best way forward.

There is the unstructured pair style. This is well unstructured and has no rules. Basically its just two people sitting at a computer working through a problem. Can be beneficial if both partners are at equal skill and are working through basic problemns. Can allow you to get a lot done in a short time. This is difficult to do remotely as switch off is too much of a burden.

There is Strong style pair programming. The idea hear as that before anything goes to the computer it must pass through the partner's head first. This is described as being good for a very specific task that one partner may have a deeper knowledge on. Consists mostly of the more experienced programmer giving guidance for the less experienced programmer but you still want to switch at given time intervals. Consists of the stronger partner giving feedback on the other partners design decisions, and questions about problem solving. 

The Ping-Pong method is a where you trade off rolls where one person writes code and the partner reviews it. Can create a dynamic where neither partner can dominate the work the way maybe navigation can do.

The backseat navigator is more about a more experience navigator telling the driver every little detail about the solution in their mind and overseeing the implementation by the driver.

The Tour Guide Style is where a more experience developer is explaining maybe a new framework to so somebody and is activily coding while fielding questions about why and how things work. The tour guide will type and explain concepts and the rationale behind decisions. This is kind of what the teachers are doing with us in the lectures.

Distributed pairing is basically what we are doing. It brings people from many different locations and allows them to connect remotely and work on a project.

On an aside I think the biggest benefit is that pair programming can increases focus over a long period. It may be distracting if you are in the zone but in the long run it feels like it could lead to more productivity.



## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: In short higher order functions are built in methods that take other functions as an argument. Some very common use examples are map and filter. The map method takes in an array and outputs an array of equal length. The map method uses a second function to perform some action on each item in an array.  A filter method takes in an array and returns an array with only the values that meet the condition of the function used within it. Some other examples are the .reduce() Method which can keep a running sum and the .forEach() method with executes a callback function on each element in an array.

2. Jest: Jest is a Javascript Testing Framework. It is used to run tests on your javascript code. Jest requires many dependencies and is best utilized with yarn wich is a package manager created by facebook. It is best practices to use testing because it will likely save you time in the end if you are writing tests while you are coding making sure each step of the process is safe. Testing prevents feature creep, communicate intent, and allow for safe refactorying. 

3. Objects: Object are a javascript data type that contain key value pairs. Objects can also containe functions within them called methods. Objects use the {} notation. For example:
const person = {
    firstName: "Garrett",
    lastName: "Greer",
    characteristic: "dashingly handsome,
    sayMyName: function () {
        return `${this.firstname} ${this.lastName} is ${this.characteristic}.`
    }
}
console.log(person.sayMyName())
output: Garrett Greer is dashingly handsome.

4. Method: Javascript methods are functions stored as object properties. An example is above with the sayMyName function being a method. One can easily add a method to an object by using dot otation. For example:
person.fullName = function () {
    return this.firstName + " " + this.lastName;
}
All functions in javascript are first-class objects and have built in properties and methods. We see these as the built in methods such as .toString().

5. Classes: Classes are a type of constructor for objects. They allow one to quickly create objects by having the properties of the object prebuilt into the class then initializing a new Class object by just passing in the details of the new object using dot notation. 
