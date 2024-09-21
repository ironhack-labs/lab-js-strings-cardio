const string1 = "My favorite dessert is jello";

// Use indexOf to find the index of the character "j"
const indexOfJ = string1.indexOf("j");

// Print the index
console.log(indexOfJ);




/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";

// Use bracket notation to access the characters and concatenate them
const newString = string2[2] + string2[9] + string2[9] + string2[10];

// Print the result
console.log(newString);  // Output: "COOL"





/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";

// Use the repeat method to repeat "Na" four times and concatenate " Batman!"
const result = string3.repeat(4) + " Batman!";

// Print the result
console.log(result);




/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

// Use the slice method to extract the word "mango"
const favoriteFruit = fruit.slice(13, 18); // "mango" starts at index 13 and ends at index 18

// Print the result
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
if (funnyHeadline1.includes("oxygen")) {
    console.log("The string includes the word 'oxygen'");
} else {
    console.log("The string does not include the word 'oxygen'");
}

// Check the second headline
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
console.log("Length of string4:", string4.length);

// b) Print the last character in the string
console.log("Last character of string4:", string4[string4.length - 1]);

