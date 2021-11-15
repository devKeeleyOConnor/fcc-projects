const register = {
    status : "",
    change : [],
}
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
   return register
  } //End of func change()

  console.log(change(0.96));