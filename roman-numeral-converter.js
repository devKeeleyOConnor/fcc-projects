// freeCodeCamp - JavaScript Algorithms and Data Structures Certificate

// Roman Numeral Convertor - Project Two

function convertToRoman(num) {

//Initialize and set values for variables to be used in the function.
let thousand = "M";
let fivehundred = "D";
let hundred = "C";
let fifty = "L";
let ten = "X";
let five = "V";
let one = "I";
let romanNum = [];

// Make sure the value of num is a string, then change the string into an array. 
num = num.toString();
let numBreakDown = num.split("");

//Make sure there are four digits, even if they are 0. Breaks down the number into thousands, hundreds, tens, and ones.
if(numBreakDown.length < 4){
  while(numBreakDown.length < 4){
    numBreakDown.unshift("0");
  }
};

//Reference the combinations to push each numeral into an array, used only with hundreds, tens, and ones.
function numberPush(romanVal, romanVal5, romanVal10, arbVal){
  if((arbVal > 0) && (arbVal < 4)){
      for(let i = 0; i < arbVal; i++){
        romanNum.push(romanVal);
      }
    }else if(arbVal == 4){
      romanNum.push(romanVal, romanVal5);
    }else if(arbVal == 5){
      romanNum.push(romanVal5);
    }else if((arbVal > 5) && (arbVal < 9)){
      romanNum.push(romanVal5)
      for(let i = 0; i < (arbVal - 5); i++){
        romanNum.push(romanVal);
      }  
    }else if(arbVal == 9){
      romanNum.push(romanVal,romanVal10);
    }
  }
//Function version to be used with thousands.
function numberPushThou(romanVal, arbVal){
  if(arbVal > 0){
    for(let i = 0; i < arbVal; i++){
      romanNum.push(romanVal);
    }
  }
}
//Call Functions on Array to get Answer
numberPushThou(thousand, numBreakDown[0]);
numberPush(hundred, fivehundred, thousand, numBreakDown[1]);
numberPush(ten, fifty, hundred, numBreakDown[2]);
numberPush(one,five,ten, numBreakDown[3]);

//Convert the array to str or int and return that number.
romanNum = romanNum.join("");

console.log(romanNum);
return romanNum;
}
convertToRoman(3050);