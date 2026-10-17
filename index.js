/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";

const index = string1.indexOf("j");
console.log(index);

/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";

const stringCool =
  string2[2] +
  string2[string2.length - 1] +
  string2[string2.length - 1] +
  string2[string2.length - 2];

/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";

console.log(`${string3.repeat(4)} Batman!`);

/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruit =
  "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

const favoriteFruit = fruit.slice(13, 18);
console.log(favoriteFruit);

/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";

[funnyHeadline1, funnyHeadline2].forEach((headLine) => {
  if (headLine.includes("oxygen")) {
    console.log(`The ${headLine} includes the word 'oxygen'`);
  } else {
    console.log(`The ${headLine} does not include the word 'oxygen'`);
  }
});

/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9w1";

console.log(string4.length);

console.log(string4.charAt(string4.length - 1));
