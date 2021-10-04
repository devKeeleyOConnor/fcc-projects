// freeCodeCamp - JavaScript Algorithms and Data Structures Certification

//Telephone Number Validator - Project Four - Instructions
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
// Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
// The area code is required. If the country code is provided, you must confirm that the country code is 1. 
// Return true if the string is a valid US phone number; otherwise return false.

//Allowed number formats: 
// 555-555-5555
// (555)555-5555
// (555) 555-5555
// 555 555 5555
// 5555555555
// 1 555 555 5555

function telephoneCheck(str) {
    str = str.replace(/\s/g, ""); //Remove any whitespace in the str.
    let regexNum = [
        /\d{3}-\d{3}-\d{4}/g,
        /(\d{3})\d{3}-\d{4}/g,
        /\d{10,11}/g,
        /1\(\d{3}\)\d{3}-\d{4}/g,
        /\(\d{3}\)\d{3}-\d{4}/g,
        /\(\d{3}-\d{3}-\d{4}\)/g,
        /\(\d{10,15}\)/g
    ];
    let regexLetter = /[a-z]/gi;


// if ((regexLetter.test(str) == true) ||       //Check arguement for letters
//     (str.length < 10) ||                     //Check arguement for correct length w/o area code
//     (((str.length == 11) || (str.length == 14)) && (str[0] != 1)) ||
//     ((str.length > 14))){  //Check arguement for correct length with area code & correct country code
//         return false;
// }else 
    if(  (regexNum[0].test(str) == true) ||
           (regexNum[1].test(str) == true) ||
           (regexNum[2].test(str) == true) ||
           (regexNum[3].test(str) == true) ||
           (regexNum[4].test(str) == true) ||
           (regexNum[5].test(str) == true)){
               return true;
           }
return false;
};    
   

console.log(telephoneCheck("333-333-3333"));