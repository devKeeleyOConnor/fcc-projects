// freeCodeCamp - JavaScript Algorithms and Data Structures Certification

//Telephone Number Validator - Project Four - Instructions
// For this challenge you will be presented with a string such as 800-692-7753 or 8oo-six427676;laskdjf. 
// Your job is to validate or reject the US phone number based on any combination of the formats provided above. 
// The area code is required. If the country code is provided, you must confirm that the country code is 1. 
// Return true if the string is a valid US phone number; otherwise return false.

//Allowed number formats: 
// 555-555-5555 || 1 555-555-5555
// 555 555 5555 || 1 555 555 5555 (5555555555 || 15555555555)
// (555)555-5555 || 1 (555)555-5555
// (555)555 5555 || 1 (555)555 5555

function telephoneCheck(str) {
// Create an array containing regex to match for correct validation with and without country code (1).
let regex = [
    /^\d{10}$/g,                           // 555 555 5555
    /^1\d{10}$/g,                          // 1 555 555 5555
    /^\(\d{3}\)\d{7}$/g,                   // (555) 555 5555
    /^1\(\d{3}\)\d{7}$/g,                  // 1 (555) 555 5555
    /^\(\d{3}\)\d{3}\-\d{4}$/g,             // (555) 555 - 5555
    /^1\(\d{3}\)\d{3}\-\d{4}$/g,            // 1 (555) 555 - 5555
    /^\d{3}-\d{3}-\d{4}$/g,                // 555 - 555 - 5555
    /^1\d{3}\-\d{3}\-\d{4}$/g,                // 1 555 - 555 - 5555
];
//Remove any whitespace in the str
    str = str.replace(/\s/g, "");       
console.log(str);
//Check the str against each index in the regex array for a proper match
if ((regex[0].test(str) == true) ||
    (regex[1].test(str) == true) ||
    (regex[2].test(str) == true) ||
    (regex[3].test(str) == true) ||
    (regex[4].test(str) == true) ||
    (regex[5].test(str) == true) ||
    (regex[6].test(str) == true) ||
    (regex[7].test(str) == true)){
        return true;
    }else{
        return false;
    }
};    

console.log(telephoneCheck("5555555555"));
console.log(telephoneCheck("(555)555-5555"));
console.log(telephoneCheck("555-555-5555"));
console.log(telephoneCheck("1 555-555-5555"));
