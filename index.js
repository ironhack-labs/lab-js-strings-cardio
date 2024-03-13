/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";

// Your code here...
let index = string1.indexOf("j");
console.log(index);



/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";

// Your code here...
let ind =string2.indexOf('L');
let newString = string2[2] + string2.slice(-1) + string2.slice(-1) + string2.slice(ind,-1);
console.log(newString);




/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";

// Your code here...
let newString2 = string3.repeat(3) + " Batman!";
console.log(newString2);


/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

// Your code here...
let index2= fruit.indexOf("kiwi");
let favFruit = fruit.slice(index2,index2+4);
console.log(favFruit);

/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";


function checkHeadLine(headLine){
    if(headLine.includes("oxygen")){
        return true;
    }
    return false;
}


// Check the first headline
// Your code here ...
let result = checkHeadLine(funnyHeadline1);

if(result === true) {
    console.log("The string includes the word 'oxygen'");
}
else{
    console.log("The string does not include the word 'oxygen'");
}


// Check the second headline
// Your code here ...


result = checkHeadLine(funnyHeadline2);

if(result === true) {
    console.log("The string includes the word 'oxygen'");
}
else{
    console.log("The string does not include the word 'oxygen'");
}

/*******************************************
       Iteration 6 | String Length
*******************************************/
// Using console.log() print to the console the length of the string and the last character in the string.

const string4 = "zEAWrTC9EgtxmK9w1";


// a) Print the string length
// Your code here ...
console.log(string4.length);

// b) Print the last character in the string
// Your code here ...
console.log(string4.slice(-1));