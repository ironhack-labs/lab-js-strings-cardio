/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";

// Your code here...
console.log(string1.indexOf("j"));



/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";

// Your code here...
const text = "COOL";
let result ="";

for (let i=0;i<text.length;i++){
    result += string2[string2.indexOf(text[i])];
}
console.log(result);



/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";

// Your code here...
let result3 = `${string3.repeat(4)} Batman!`;
console.log(result3);


/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

// Your code here...
const favoriteFruit = "grapes";
const start = fruit.indexOf(favoriteFruit);
const end = start + favoriteFruit.length;
let result4 = fruit.slice(start, end);

console.log(result4);



/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";
const token = "oxygen";
const answerTrue = `The string includes the word ${token}`;
const answerFalse = `The string does not include the word ${token}`;

 
function checkString(text,token){
    if(text.includes(token)){
        console.log(answerTrue)
    }
    else{
        console.log(answerFalse)
    }
}
// Check the first headline
// Your code here ...
checkString(funnyHeadline1, token);

// Check the second headline
// Your code here ...
checkString(funnyHeadline2, token);




/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9w1";


// a) Print the string length
// Your code here ...
const length = string4.length;
console.log(length);

// b) Print the last character in the string
// Your code here ...
console.log(string4[length - 1]);