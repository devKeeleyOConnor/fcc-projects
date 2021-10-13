//freeCodeCamp - JavaScript Algorithms and Data Structures Certification

//Cash Register - Project Five - Instructions

// Design a cash register drawer function checkCashRegister() that: 
// accepts purchase price as the first argument (price),
// payment as the second argument (cash), 
// and cash-in-drawer (cid) as the third argument.

// cid is a 2D array listing available currency.

// The checkCashRegister() function should always return an object with a status key and a change key.

// Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, 
// or if you cannot return the exact change.

// Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

// Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, 
// sorted in highest to lowest order, as the value of the change key.

function checkCashRegister(price, cash, cid) {
  let cashback = (cash - price).toFixed(2);
//Create cashreg obj with status, change, and cash-in-drawer total key/value pairs.
  let cashreg = {
    status : "OPEN",        //Cash drawer status.
    change : [],            //Place holder for the change value to be returned
  }
  let cashDrawerTotal = 0;
  const regCash = cid

 //Add the total amount of cash in the register.
 for(const money in regCash){
  parseInt(money); //Change the string money into an interger to be used as an index.
  cashDrawerTotal += regCash[money][1];
 } 
cashDrawerTotal = cashDrawerTotal.toFixed(2); // Round the decimal to two places. 

function change(cashbackAmt){
//Seperate the returned dollar amount from the returned change, and create a 2D array to contain the values of dollars and cents.
let dollars = Math.floor(cashbackAmt);
let cents = cashbackAmt - dollars;
// // Calculate the bills to be returned, if any.
if(dollars >= 100){
  coinAmt = (dollars / 100);
  dollars = (dollars - (coinAmt * 100));
  cashreg.change.push(["ONE HUNDRED", coinAmt * 100]);
  coinAmt = (dollars / 20);
  dollars = (dollars - (coinAmt * 20));
  cashreg.change.push(["TWENTY", coinAmt * 20]);
  coinAmt = (dollars / 10);
  dollars = (dollars - (coinAmt * 10));
  cashreg.change.push(["TEN", coinAmt * 10]);
  coinAmt = (dollars / 5);
  dollars = (dollars - (coinAmt * 5));
  cashreg.change.push(["FIVE", coinAmt * 5]);
  dollars = (dollars - (coinAmt * 1));
  cashreg.change.push(["ONE", coinAmt]); 
}else if(dollars >= 20){
  coinAmt = (dollars / 20);
  dollars = (dollars - (coinAmt * 20));
  cashreg.change.push(["TWENTY", coinAmt * 20]);
  coinAmt = (dollars / 10);
  dollars = (dollars - (coinAmt * 10));
  cashreg.change.push(["TEN", coinAmt * 10]);
  coinAmt = (dollars / 5);
  dollars = (dollars - (coinAmt * 5));
  cashreg.change.push(["FIVE", coinAmt * 5]);
  dollars = (dollars - (coinAmt * 1));
  cashreg.change.push(["ONE", coinAmt]);
}else if(dollars >= 10){
  coinAmt = (dollars / 10);
  dollars = (dollars - (coinAmt * 10));
  cashreg.change.push(["TEN", coinAmt * 10]);
  coinAmt = (dollars / 5);
  dollars = (dollars - (coinAmt * 5));
  cashreg.change.push(["FIVE", coinAmt * 5]);
  dollars = (dollars - (coinAmt * 1));
  cashreg.change.push(["ONE", coinAmt]);
}else if((dollars > 0) && (dollars <= 4)){
  cashreg.change.push(["ONE", coinAmt]);
}
//Calculate the change to be returned, if any.
if(cents >= .25){
  coinAmt = Math.floor(cents / .25);
  cents = (cents - (coinAmt * .25)).toFixed(2);
  cashreg.change.push(["Quarter", coinAmt * .25]);
  // coinAmt = Math.floor(cents / .10);
  // cents = (cents - (coinAmt * .10)).toFixed(2);
  // cashreg.change.push(["Dime", coinAmt * .10]);
  // coinAmt = Math.floor(cents / .05);
  // cents = (cents - (coinAmt * .05)).toFixed(2);
  // cashreg.change.push(["Nickle", coinAmt * .05]);
  // coinAmt = Math.floor(cents / .01);
  // cents = (cents - (coinAmt * .01)).toFixed(2);
  // cashreg.change.push(["Penny", coinAmt * .01]);
}else if(cents > .10){
  coinAmt = Math.floor(cents / .10);
  cents = (cents - (coinAmt * .10)).toFixed(2);
  cashreg.change.push(["Dime", coinAmt * .10]);
  coinAmt = Math.floor(cents / .05);
  cents = (cents - (coinAmt * .05)).toFixed(2);
  cashreg.change.push(["Nickle", coinAmt * .05]);
  coinAmt = Math.floor(cents / .01);
  cents = (cents - (coinAmt * .01)).toFixed(2);
  cashreg.change.push(["Penny", coinAmt * .01]);
}else if(cents >= .05){
  coinAmt = Math.floor(cents / .05);
  cents = (cents - (coinAmt * .05)).toFixed(2);
  cashreg.change.push(["Nickle", coinAmt * .05]);
  coinAmt = Math.floor(cents / .01);
  cents = (cents - (coinAmt * .01)).toFixed(2);
  cashreg.change.push(["Penny", coinAmt * .01]);
}else if((cents > 0) && (cents <= .04)){
  coinAmt = Math.floor(cents / .01);
  cents = (cents - (coinAmt * .01)).toFixed(2);
  cashreg.change.push(["Penny", coinAmt * .01]);
}

//Check if cash-in-drawer is less than change due.
if(cashback > cashDrawerTotal){
  cashreg.status = "INSUFFICIENT_FUNDS"
}else if(cashback == cashDrawerTotal){
  cashreg.status = "CLOSED";
  cashreg.change = regCash;
}else{                                          //Function to count change and return it in an 2D array sorted highest value to lowest.
  change(cashback);
  }
};
return cashreg;
};
  console.log(checkCashRegister(10003.54, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));