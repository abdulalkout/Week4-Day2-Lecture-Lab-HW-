//-----------------------------------------------//
// -----------Variables & Datatypes-------------//

// How do we assign a value to a variable? 
// creat a variable and pass value : variable = value
let Variable = 5;

// How do we change the value of a variable?
// if you have a variable that was dicleared. pass a new value like: 
Variable = 6;

// How do we assign an existing variable to a new variable?
// we also can pass a variable to another where the one we pass will be after = sign
let newVariable = Variable;

// Remind me, what are declare, assign, and define?
// declare is when we first declere a variable * let V 
// assign is when we assign a value to that variable v = 0
// Defining a variable includes giving it a name, specifying its type, the values the variable can take

// What is pseudocoding and why should you do it?
/* pseudocoding is a simple way to explain what we should do with our code in English 
pseudocoding will make the coding much easeir once we understand what we have to do, We will 
just implement the pseudocode in the language that we are using */


//What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
//I will spend 80% thinking about the solution, Once I have a good approach for the problem coding the solution will become easier  


//-------------------------------------------------//
//-------------------Strings-----------------------//

// Create a variable called firstVariable
let firstVariable;

//Assign it the value of the string "Hello World"
firstVariable = "Hello World";

//Change the value of this variable to some number
firstVariable = 15;

//Store the value of firstVariable in a new variable called secondVariable
let secondVariable = firstVariable;

//Change the value of secondVariableto any string.
secondVariable = "any String :)";


// What is the value of firstVariable?
// firstVariable = 15
console.log(firstVariable);

/* Create a variable called yourName and set it equal to your name as a string. Then,
 write an expression that takes the string "Hello, my name is " 
and the variable yourName so that it returns a new string with them concatenated. */

let yourName = "Abdul";
let expression = `Hello, my name is ${yourName}`;
console.log(expression);




// -----------------------------------------------//
//-------------------Booleans---------------------//

const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

console.log('-------- Booleans -----------')
console.log(a < b);
console.log(c > d);
console.log('Name' === 'Name');
// FOR THE NEXT TWO, USE ONLY && OR ||
console.log(true || false);
console.log(false && false && false && false && false || true);
console.log(false === false)
console.log(e === 'Kevin');
console.log(a < b && a < c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a === a && a < d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(48 == '48');


// -------------------------------------//
// --------------The farm--------------//

//Declare a variable animal. Set it to be either "cow" or something else
let animal = "cow";

//Write code that will print out "mooooo" if the it is equal to cow

/* Change your code so that if the variable animalis anything other than a cow,
 it will print "Hey! You're not a cow." */

if(animal === "cow"){
    console.log("mooooo")
}else{
    console.log("Hey! You're not a cow.")
}
// Commit Will commit on gitHub



