/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    // your code goes here
    printAccountSummary = function(){
        console.log("Welcome!"+"\n"+"Your balance is currently $"+balance.toFixed(0)+" and your interest rate is "interestRatePercent.toFixed(0)+"%.")
    }
};

console.log(savingsAccount.printAccountSummary());
