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

//Create cashreg obj with status, change, and cash-in-drawer total key/value pairs.
  let cashreg = {
    status = "OPEN",        //Cash drawer status.
    change = [],            //Place holder for the change value to be returned
  }

 // Add the tender amounts in the cid array for a monetary total in the cash draw.
 for( let i = 0; i >= cid.length; i++){
   let arrTotal = arrTotal += cid[i][1]
   console.log(arrTotal);
 } 
 cidTotal = arrTotal;
console.log(cidTotal);
 //Subtract the price amount from the cash to receive the amount to be returned. 
  let returnVal = cash - price;

 // Set cashreg status and change keys based on returnVal and CID
  if(returnVal > cid){
     cashreg.status = "INSUFFICIENT_FUNDS";
  }else if (returnVal == cid){
    cashreg.status = "CLOSED";
    cashreg.change = returnedChange;
  }

  }

checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);