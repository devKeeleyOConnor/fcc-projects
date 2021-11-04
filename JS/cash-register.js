//freeCodeCamp - JavaScript Algorithms and Data Structures Certification

//Cash Register - Project Five 

function checkCashRegister(price, cash, cid) {
let cashback = parseFloat((cash - price).toFixed(2));
let regTotal = 0;
//Add the total amount of cash in the register.
for(const money in cid){
  regTotal += cid[money][1];
};
// Round the decimal to two places. 
regTotal = regTotal.toFixed(2); 
console.log(regTotal);
const register = {
  status : "",        
  change : [],
  }
if(cashback > regTotal){
  register.status = "INSUFFICIENT_FUNDS";
}else if(cashback == regTotal){
  register.status = "CLOSED";
  register.change = cid;
}else {
  register.status = "OPEN";
  change(cashback);
}

// JS Function to calculate the number of individual bills and coins to be returned if any.
  function change(amountReturned){
  // Seperate the returned dollar amount from the returned change, and create a 2D array to contain the values of dollars and cents.
    let bills = Math.floor(amountReturned);
    let cents = amountReturned - bills;
    let centAmt = 0;

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
        ["PENNY", .01]
    ]

// Calculate the bills to be returned, if any.
    for(let i = 0; i < billArr.length; i++){
        let val = billArr[i][1];
            if (bills >= val){
                let tempVal = Math.floor((bills / val));
                    if(tempVal != 0){
                        register.change.push([billArr[i][0], tempVal * val]);
                    }bills = bills - (tempVal * val);
            }
    }

// Calculate the change to be returned, if any.
   for(let i = 0; i < centArr.length; i++){
       let val = centArr[i][1];
        if (cents >= val){
            let tempVal = Math.floor((cents / val));
            if(tempVal != 0){
                register.change.push([centArr[i][0], tempVal * val]);
            }cents = cents - (tempVal * val);
        }
   }
  } 
//End of func change()

return register;
};
console.log(checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));


