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
//ABCDEFGHJKLO
const string2 = "ABCDEFGHJKLO";
const positionC = string2.indexOf("C");
const positionO = string2.indexOf("O");
const positionL = string2.indexOf("L");

console.log ( `${string2[positionC]}${string2[positionO]}${string2[positionO]}${string2[positionL]}`);


/*const cool = string2[2] + string2[11] + string2[11] + string2[10];
console.log(cool);*/


/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";
const bat = "Batman"
const repeatNa = string3.repeat(4);
console.log(`${repeatNa} ${bat}`);


/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

//const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple"


const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";
const favoriteFruit = "pear"; 
const fruitCaracteres = favoriteFruit.length; // 5
let indiceInicial = -1; // Inicializamos con un valor que indica "no encontrado"

// Iteramos a través de la cadena. El ciclo se detiene
// justo antes de que el corte (.slice) exceda la longitud de la cadena.
for (let i = 0; i < fruit.length; i++) {
    
    // 1. Usamos .slice(i, i + n) para tomar una porción de caracteres.
    // 2. Comparamos esa porción con la fruta buscada .
    if (favoriteFruit === fruit.slice(i, i + fruitCaracteres)) {
        
        indiceInicial = i; // 
        break; // ¡Salimos del ciclo! No necesitamos seguir buscando.
            }
}
// Verificación y Salida
if (indiceInicial !== -1) {
    // Si encontramos la fruta, la extraemos usando el índice guardado.
    const frutaEncontrada = fruit.slice(indiceInicial, indiceInicial + fruitCaracteres);
    
    console.log(frutaEncontrada);
} else {
    console.log("Error: La fruta no fue encontrada.");
}

/***************************************************
    Iteration 5 | Check If Strings Include a Word
***************************************************/
// Using the string method .include(), check if the below strings with funny newspaper headlines include the word "oxygen".
// If a string includes the word "oxygen" print to the console message "The string includes the word 'oxygen'",
// else print the message "The string does not include the word 'oxygen'".

const funnyHeadline1 = "Breathing oxygen linked to staying alive";
const funnyHeadline2 = "Students Cook & Serve Grandparents";


// Check the first headline
// Your code here ..

if (funnyHeadline1.includes("oxygen")) {
    console.log("The string includes the word 'oxygen'");
} else {
    console.log("The string does not include the word 'oxygen'")
}


// Check the second headline
// Your code here ...
if (funnyHeadline2.includes("oxygen")) {
    console.log("The string includes the word 'oxygen'");
} else {
    console.log("The string does not include the word 'oxygen'")
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
console.log(`${string4[string4.length-1]}`);
