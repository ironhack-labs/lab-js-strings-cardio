/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";

// Your code here...
console.log(string1.indexOf("j"))




/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";

// Your code here...
const coolString = string2[2] + string2[string2.length - 1] + string2[string2.length - 1] + string2[string2.length -2];

console.log(coolString);



/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

// Your code here...
const string3 = "Na";

console.log ( string3.repeat(4) + " Batman!" )



/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string


// Your code here...

const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";
const mangoIndex = fruit.indexOf("mango");
const favoriteFruit = fruit.slice(mangoIndex, mangoIndex + 5);

console.log(favoriteFruit);


/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";


// Check the first headline
// Your code here ...
if (funnyHeadline1.includes("oxygen")) {
    console.log("The string includes the word 'oxygen'");
} else {
    console.log("The string does not include the word 'oxygen'");
}

// Check the second headline
// Your code here ...
if (funnyHeadline2.includes("oxygen")) {
    console.log("The string includes the word 'oxygen'");
} else {
    console.log("The string does not include the word 'oxygen'");
}


/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9w1";


// a) Print the string length
// Your code here ...
console.log("The length of the string is " + string4.length);


// b) Print the last character in the string
// Your code here ...
console.log("The last character of string4 is " + string4[string4.length - 1]);

