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
        /[\d{3}-\d{3}-\d{4}]/,
        /[(\d{3})\d{3}-\d{4}]/,
        /[\d{10}]/,
        /[/d{11}]/];

    for(let i = 0; i <= regexNum.length; i++){
        if(regexNum[i].test(str) == true){
            return true;
        }else {
            return false;
        }
    };
};
console.log(telephoneCheck("800-(2  11)-4566"));