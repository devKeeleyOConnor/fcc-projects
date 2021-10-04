// freeCodeCamp - JavaScript Algorithms and Data Structures Certification

//Caesar Cipher - Project Three - Instructions
// One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
// In a shift cipher the meanings of the letters are shifted by some set amount.

// A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places. 
// Thus A ↔ N, B ↔ O and so on.

// Write a function which takes a ROT13 encoded string as input and returns a decoded string.

// All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation), but do pass them on.
function caesarCipher(str){

//Initialize and set values for variables to be used in the function.
let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M",
"N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let scrambledAlphabet = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", 
"A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];
let answer = "";
// Function that will take a numeric imput, reference it with the
// alphabet array, then return a value with +13 to the index creating
// a single letter cipher. 
function cipher(letter){
    let uncipher = scrambledAlphabet.indexOf(letter);
    let noncipher = alphabet[uncipher];
    return noncipher;
}

//Loop over the input string to create a new string that has been scrambled.
for(let ltr of str){
    if(alphabet.indexOf(ltr) < 0){
        answer = answer.concat(ltr);
    }else{
        answer = answer.concat(cipher(ltr));
    }
}
console.log(answer);
    return answer;
};
caesarCipher("SIC SIMPER MAH DICK BITCHES!!!");