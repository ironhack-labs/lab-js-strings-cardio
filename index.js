/*******************************************
    Iteration 1 | Find index of a character
*******************************************/
// Write code that prints out to the console the index of the character “j” in

const string1 = "My favorite dessert is jello";

// Your code here...
// Iteration 1: Encontrar o índice do caractere 'j'
console.log("Índice do caractere 'j':", string1.indexOf('j'));

// Função para contar letras 'a' (maiúsculas e minúsculas) em uma string
function countLetterA(str) {
    return (str.match(/a/gi) || []).length;
}

// Exemplo de uso:
const fraseExemplo = "Ana ama abacaxi e açaí.";
console.log(`Quantidade de letras 'a' em fraseExemplo:`, countLetterA(fraseExemplo));




/*******************************************
    Iteration 2 | Concatenate Characters
*******************************************/
// Make a new string with the text "COOL" by using only the characters available in the provided string and the bracket notation

const string2 = "ABCDEFGHJKLO";

// Your code here...
// Iteration 2: Concatenar caracteres para formar "COOL"
const cool = string2[2] + string2[8] + string2[8] + string2[10];
console.log("Nova string formada:", cool);




/*****************************************************
    Iteration 3 | Repeat a String and Concatenate
*****************************************************/
// Using the method .repeat() and the provided string, print out the text "NaNaNaNa Batman!" in the console.

const string3 = "Na";

// Your code here...
// Iteration 3: Repetir string e concatenar
console.log(string3.repeat(4) + " Batman!");




/*******************************************
       Iteration 4 | Fruite Slice
*******************************************/
// Using the string method .slice(), access and print to the console the name of your favorite fruit from a given string

const fruit = "banana apple mango orange lemon kiwi watermelon grapes pear pineapple";

// Your code here...
// Iteration 4: Usar slice para pegar uma fruta favorita (exemplo: "mango")
const mango = fruit.slice(14, 19);
console.log("Minha fruta favorita:", mango);



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

// a) Print the string length
console.log("Tamanho da string:", string4.length);

// b) Print the last character in the string
console.log("Último caractere:", string4[string4.length - 1]);

// ----------------------
// BÔNUS 1: Contar vogais
function countVowels(str) {
    return (str.match(/[aeiouáéíóúãõâêîôûàèìòùäëïöü]/gi) || []).length;
}
console.log("Vogais em 'Abacaxi é ótimo':", countVowels("Abacaxi é ótimo"));

// BÔNUS 2: Remover espaços duplicados
function removeDuplicateSpaces(str) {
    return str.replace(/\s+/g, ' ').trim();
}
console.log("Remover espaços duplicados:", removeDuplicateSpaces("  Isso   é   um   teste   "));

// ----------------------
// Função para contar letras 'a' (maiúsculas e minúsculas) em uma string
function countLetterA(str) {
    return (str.match(/a/gi) || []).length;
}
const fraseExemplo = "Ana ama abacaxi e açaí.";
console.log(`Quantidade de letras 'a' em fraseExemplo:`, countLetterA(fraseExemplo));

const string4 = "zEAWrTC9EgtxmK9w1";


// a) Print the string length
// Your code here ...


// b) Print the last character in the string
// Your code here ...
