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
  const register = {
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

function change(amountReturned){
// Seperate the returned dollar amount from the returned change, and create a 2D array to contain the values of dollars and cents.
    let bills = Math.floor(amountReturned);
    const billArr = [
        ["ONE HUNDRED", 100], 
        ["TWENTY", 20],
        ["TEN", 10],
        ["FIVE" , 5],
        ["ONE", 1],
    ]
    const centArr =[
        ["QUARTER", .25],
        ["DIME", .10],
        ["NICKLE", .05],
        ["PENNY", 01]
    ]
    let cents = amountReturned - bills;
    const regDrawer =[];
// Calculate the bills to be returned, if any.
    for(let i = 0; i < billArr.length; i++){
        let val = billArr[i][1];
            if (bills > val){
                billAmt = bills / val;
                    if(billAmt != 0){
                        register.change.push([billArr[i][0], billAmt * val]);
                    }
            }
    }
    
// Calculate the change to be returned, if any.
   for(let i = 0; i < centArr.length; i++){
       let val = centArr[i][1];
        if (cents > val){
            centAmt = cents / val;
            if(centAmt != 0){
                register.change.push([centArr[i][0], Number((centAmt * val).toFixed(2))]);
            }
        }
   }
  } //End of func change()

//Check if cash-in-drawer is less than change due.
  if(cashback < 0){
    register.status = "INSUFFICIENT_FUNDS"
  }else if(cashback == regTotal){
    register.status = "CLOSED";
    register.change = regCash;
  }else{    //Function to count change and return it in an 2D array sorted highest value to lowest.
    change(cashback);
  }
  return register;
};
console.log(checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]))

