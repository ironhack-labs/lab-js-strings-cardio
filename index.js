/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";

console.log('The index of j is ' + string1.indexOf('j'));




/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";

const index1 = string2.indexOf('C');
const index2 = string2.indexOf('O');
const index3 = string2.indexOf('L');

const string2cool = string2[index1] + string2[index2] + string2[index2] + string2[index3];
console.log(string2cool);


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

const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

const favFruit = 'mango';
const indexFruit = fruit.indexOf(favFruit);
const lengthFruit = favFruit.length;

console.log(fruit.slice(indexFruit,indexFruit+lengthFruit+1));


/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";


// Check the first headline
const check1 = funnyHeadline1.includes('oxygen');
if(check1) console.log(`The string includes the word 'oxygen'`);
else console.log(`The string does not include the word 'oxygen'`);

// Check the second headline
const check2 = funnyHeadline2.includes('oxygen');
if(check2) console.log(`The string includes the word 'oxygen'`);
else console.log(`The string does not include the word 'oxygen'`);



/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9w1";


// a) Print the string length
console.log(`The length is ${string4.length}`);


// b) Print the last character in the string
console.log(`The last character is ${string4[string4.length-1]}`);
