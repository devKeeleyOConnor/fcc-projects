function checkCashRegister(price, cash, cid){ 
let amountReturned = (cash - price).toFixed(2);
let regTotal = 0;
let cashReturned = [];
for(const money in cid){
    parseInt(money);
    regTotal += cid[money][1];
}
regTotal = regTotal.toFixed(2);
let regDrawer = {
    status: "OPEN",
    change : []
}
function cashBack(billVal, cashAmt, billName){
    let bills = cashAmt / billVal; 
    let result = Math.floor(bills);
    let quanBills = result * billVal;
    if(quanBills != 0 ){
        regDrawer.change.push([billName , quanBills]);
    }
    return amountReturned = amountReturned - quanBills;
}
cashBack(10, amountReturned, "TEN");
return regDrawer;
}

console.log(checkCashRegister(2.00, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]))

