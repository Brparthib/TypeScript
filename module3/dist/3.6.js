"use strict";
{
    // access modifiers
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        // addDeposit(amount: number) {
        //   this._balance += amount;
        // }
        // setter
        set deposit(amount) {
            this._balance += amount;
        }
        // getBalance() {
        //   console.log(`Balance: ${this._balance}`);
        // }
        // getter
        get Balance() {
            return this._balance;
        }
    }
    const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 20);
    goribManusherAccount.deposit = 20;
    const myBalance = goribManusherAccount.Balance;
    console.log(myBalance);
}
