"use strict";
{
    // access modifiers
    class BankAccount {
        constructor(id, name, balance) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }
        addDeposit(amount) {
            this._balance += amount;
        }
        getBalance() {
            console.log(`Balance: ${this._balance}`);
        }
    }
    const goribManusherAccount = new BankAccount(111, "Mr. Gorib", 20);
    goribManusherAccount.addDeposit(200);
    goribManusherAccount.getBalance();
    class StudentAccount extends BankAccount {
        constructor(id, name, balance) {
            super(id, name, balance);
        }
        test(amount) {
            this._balance += amount;
        }
    }
    const student1 = new StudentAccount(112, 'Mr. Student', 10);
    student1.getBalance();
}
