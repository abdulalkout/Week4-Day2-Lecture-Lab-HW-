//-------------------------------//
//-----Arrays & Control flow----//

//What are the things in an array called?
// an element

//Do Arrays guarantee those things will be in order?
//Yes.

//What real-life thing could you model with an array?
//List of users 


//------------------------------//
//------Easy Does It------------//
console.log('---------Easy Does It------')


//Create an array that contains three quotes and store it in a variable called quotes
let quotes = ["Keep on coding", "eat, sleep, Code, Repeat", "JS is the best :)"]



//------------------------------//
//-----Accessing elements-------//

console.log('---------Accessing elements---------')

//Given the following array const randomThings = [1, 10, "Hello", true]
const randomThings = [1, 10, "Hello", true]

//How do you access the 1st element in the array?
console.log(randomThings[0])

//Change the value of "Hello"to "World"
randomThings[2]= "World"

//Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)



//------------------------------//
//-------Change values----------//
console.log('-----------Change values----------')

//Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]

//What would you write to access the 3rd element of the array?
console.log(ourClass[2])

// Change the value of "Github" to "Octocat"
// will make some fun with it :)
for(let i=0; i<= ourClass.length; i++){
    if(ourClass[i] === "Github"){
        ourClass[i] = "Octocat"
    }
}

//Add a new element, "Cloud City" to the array
ourClass.push("Cloud City")
console.log(ourClass)


//------------------------------//
//--------- Mix It Up----------//

console.log('-----------Mix It Up----------')

const myArray = [5, 10, 500, 20]

/*Add the string "Aegon"to the end of the array. 
    Add another string of your choice to the end of the array. */
myArray.push("Aegon")
myArray.push("Abdul")


//Remove the 5 from the beginning of the array.
myArray.shift()

//Add the string "Bob Marley"to the beginning of the array.
myArray.unshift("Bob Marley")

//Remove the string of your choice from the end of the array.
myArray.pop()

/*Reverse this array using Array.prototype.reverse(). 
    Did you mutate the array? What does mutate mean?
    Did the .reverse()method return anything? */

/* Yes I did. 
Mutate the array changing the array itself instead of returning a new array 
    with the new changes. */
/**
 Reverses the elements in an array in place.
 This method mutates the array and returns a reference to the same array.
*/
myArray.reverse()
console.log(myArray)



//------------------------------//
//---------Biggie Smalls----------//

console.log('-----------Biggie Smalls----------')

//Create a variable that contains an integer.
let variable = 0;

/**Write an if ... else statement that:
console.log()s "little number" if the number is entered is less than 100
console.log()s big number if the number is greater than or equal to 100. */

if(variable < 100){
    console.log("little number")
}else if(variable >= 100){
    console.log("big number")
}



//------------------------------//
//---------Monkey in the Middle----------//

console.log('--------Monkey in the Middle--------')

/**Write an if ... else if ... elsestatement:

console.log()little numberif the number entered is less than 5.
If the number entered is more than 10, log big number.
Otherwise, log "monkey".
 */
let number = 7;
if(number < 5){
    console.log("little number")
}else if(number > 10){
    console.log("big number")
}else{
    console.log('monkey')
}


//------------------------------//
//---------What's in Your Closet?----------//

console.log('-------Whats in Your Closet?--------')


const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
];

/*What's Kristyn wearing today? 
Using bracket notation to access items in kristynsCloset, 
log the sentence "Kristyn is rocking that " + 
the third item in Kristyn's closet + " today!" to the console. */

console.log("Kristyn is rocking that " + kristynsCloset[2] + " today!")

//Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
for(let i=0; i<=kristynsCloset.length; i++){
    if(kristynsCloset[i] === "yellow knit hat"){
        theAfterValue = kristynsCloset[i+1]
        kristynsCloset[i+1] = "raybans"
        kristynsCloset[i+2] = theAfterValue
    }
}
console.log(kristynsCloset)


//Kristyn spilled coffee on her hat... 
// modify this item to read "stained knit hat"instead of yellow.
for(let i=0; i<=kristynsCloset.length; i++){
    if(kristynsCloset[i] === "yellow knit hat"){
        kristynsCloset[i] = "stained knit hat"
    }
}
console.log(kristynsCloset)


//Put together an outfit for Thom! Using bracket notation, 
// access the first element in Thom's shirts array.
console.log(thomsCloset[0][0])


//In the same way, access one item from Thom's pants array.
console.log(thomsCloset[1][0])

//Access one item from Thom's accessories array.
console.log(thomsCloset[2][1])

//Log a sentence about what Thom's wearing. 
// Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${thomsCloset[0][0]}, ${thomsCloset[1][1]} and ${thomsCloset[2][1]}!`)


//Get more specific about what kind of PJs Thom's wearing this winter. 
// Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = "Footie Pajamas"
console.log(thomsCloset)
