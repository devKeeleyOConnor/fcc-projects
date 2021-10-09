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
  let cashback = cash - price;
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

//Check if cash-in-drawer is less than change due.
  if(cashback > cashDrawerTotal){
    cashreg.status = "INSUFFICIENT_FUNDS"
  }else if(cashback == cashDrawerTotal){
    cashreg.status = "CLOSED";
    cashreg.change = regCash;
  }else{
    //Function to count change and return it in an 2D array sorted highest value to lowest.
  }
 console.log(cashback)
  return cashreg;
};
  console.log(checkCashRegister(19, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));