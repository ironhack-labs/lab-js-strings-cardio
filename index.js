/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";

console.log(string1.indexOf("j"));




/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";
const newString = string2[2] + string2[11] + string2[11] + string2[10];
console.log(newString);
//use of array to get the idex of specifc charcatcers



/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";
// use of .repeat() to get the numnber of copies
console.log(`${string3.repeat(4)}`,"Batman!");




/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";
console.log(fruit.indexOf("orange") , fruit.indexOf("watermelon"));
const favFruit = fruit.slice(19,25);
const newFavfruit = fruit.slice(37,47);
//useof .indexOf() to get postion of the first occurance
// sue of .slice() to extract a section of string and return new one without modifying the original one
console.log(`"my fav fruits are ${(favFruit)} and ${(newFavfruit)}"`);




/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";

// use of .includes() alues performs a case-sensitive search to determine whether a given string may be found within this string, returning true or false as appropriate

if(funnyHeadline1.includes("oxygen")){
    console.log("The string includes the word 'oxygen'");
} else {
    console.log("The string does not include the word 'oxygen'");
}

if(funnyHeadline2.includes("oxygen")){
    console.log("The string includes the word 'oxygen'");
} else{
    console.log("The string does not include the word 'oxygen'");
}

/*
if(funnyHeadline2.includes("Grandparents")){
    console.log("Yes, it's true Students Cook & Serve Grandparents");
} else {
    console.log("no it's not true Students Cook & Serve Grandparents");
}

if(funnyHeadline2.includes("kids")){
    console.log("Yes, it's true Students Cook & Serve Grandparents");
} else {
    console.log("no it's not true Students Cook & Serve Grandparents");
}
*/

/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9w1";


// a) Print the string length
console.log(string4.length);


// b) Print the last character in the string
//trying directly with array index  and length
console.log(string4[16]);
console.log(string4[string4.length -1]);
