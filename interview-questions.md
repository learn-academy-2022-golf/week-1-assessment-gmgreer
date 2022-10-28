# ASSESSMENT 1: Tech Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory as if you were in a job interview. If you don't know the answer a good tip is to answer a simpler version of the question.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely, there is always something more to learn. Write your researched answer in your OWN WORDS.

INSTRUCTOR EXAMPLE: What is a conditional statement?

Your answer: A conditional statement is a statement that checks to see if the input meets a certain condition then performs some action or inaction based on that result. 

Researched answer:

1. What is git? What is the difference between git and Github?

Your answer: git is a version control system that allows a user to track changes made to a repository. Also allows for greater control over what changes are allowed and can even revert changes or call back up previous versions of the repository. Using git through Github allows the saving of a remote repository which opens up the development process to many collaborators while keeping the base or main code relatively safe from errors. 

The differense between git and Github is that git is living on your local computer and is the actual program that tracks changes made to a repository. Github is a remote repository in the cloud that you are able to upload your repository to so that multiple people can work on it and it also protects you from fatal computer damage that could otherwise wipe out all of your work.

Researched answer:

2. Which JavaScript operators will return a Boolean value?

Your answer: The and &&, or ||, and not ! operator are all boolean operators which when used in conditional statements will allow you to check if multiple or no condition is met.

Researched answer:

3. What is an index? What is the difference between index and value?

Your answer:Index is the number value given to a peice of data in an array or string. It is part of a key: value where the index is the unique key that points to a value. For example in the array [1,2,3], array[1] will point to the value 2 because the array is zero indexed. 1 is the key to the value. 

Researched answer:

4. Compare and contrast arrays and strings. Please include ways in which they are the same and ways in which they are different.

Your answer: First the similarities, both strings and arrays have an index key value pair that starts with 0. Both can use the method .length to check for their respective lengths. You can use .slice on both to remove a portion and put it into a new string. Important to note that this does not change the string.

THe differences, first strings are immutable meaning you can't change the string with any method such as push, pop, splice, reverse, shift, unshift basically anything that would actually change the value of the string, however you can turn a string into an array with .split. Then manipulate it with any array method listed above including sort and the join it back into a string using .join.

Researched answer:

5. Give a brief description of proper pair programming techniques. What are the roles of each person?

Your answer: Pair programming has a driver and a navigator. It is the job of the navigator to make all inputs into the code while the navigator instructs the driver on what to input. This allows for two sets of eyes to be on the document at all times and in some cases gives some ability to research and code at the same time. This cuts down on time correction errors as two people are much more likely to pick up on any small mistakes.

Researched answer:

## Looking Ahead: Terms for Next Week

Research and define the following terms to the best of your ability.

1. Higher Order Functions: In short higher order functions are built in methods that take other functions as an argument. Some very common use examples are map and filter. The map method takes in an array and outputs an array of equal length. The map method uses a second function to perform some action on each item in an array.  A filter method takes in an array and returns an array with only the values that meet the condition of the function used within it. Some other examples are the .reduce() Method which can keep a running sum and the .forEach() method with executes a callback function on each element in an array.

2. Jest: Jest is a Javascript Testing Framework. It is used to run tests on your javascript code. Jest requires many dependencies and is best utilized with yarn wich is a package manager created by facebook. It is best practices to use testing because it will likely save you time in the end if you are writing tests while you are coding making sure each step of the process is safe. Testing prevents feature creep, communicate intent, and allow for safe refactorying. 

3. Objects:

4. Method:

5. Classes:
