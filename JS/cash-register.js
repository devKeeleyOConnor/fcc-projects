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
  let regDrawer = {
    status : "OPEN",        //Cash drawer status.
    change : [],            //Place holder for the change value to be returned
  }
  let regTotal = 0;
  const regCash = cid

//Add the total amount of cash in the register.
  for(const money in regCash){
    parseInt(money); //Change the string money into an interger to be used as an index.
    regTotal += regCash[money][1];
  } 
  regTotal = regTotal.toFixed(2); // Round the decimal to two places. 

  

console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

