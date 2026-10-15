/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";

console.log(string1.indexOf("j"));

console.log(string1[23]);

/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";

const concatString = string2[2] + string2[string2.length - 1] + string2[string2.length - 1] + string2[string2.length - 2];

console.log(concatString);

/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";

const batmanSong = (string3.repeat(4) + " Batman!");

console.log(batmanSong)

/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

// console.log(fruit.length); - 69

const myFavFruit = fruit.slice(55, 59);

console.log(myFavFruit);

/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// 
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";

const oxygenFound = "This string includes the word 'oxygen'";
const oxygenNotFound = "This string does not include the word 'oxygen'";

// Check the first headline

if (funnyHeadline1.includes("oxygen")) {

	console.log(oxygenFound);
}

else {

	console.log(oxygenNotFound);
}

// Check the second headline

if (funnyHeadline2.includes("oxygen")) {

	console.log(oxygenFound);
}

else {

	console.log(oxygenNotFound);
}

/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9w1";


// a) Print the string length

console.log(string4.length);

// b) Print the last character in the string

console.log(string4.length - 1);
