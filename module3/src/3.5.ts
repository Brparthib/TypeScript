{
  // access modifiers
  class BankAccount {
    readonly id: number;
    name: string;
    protected _balance: number;

    constructor(id: number, name: string, balance: number) {
      this.id = id;
      this.name = name;
      this._balance = balance;
    }

    addDeposit(amount: number) {
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
    constructor(id: number, name: string, balance: number) {
      super(id, name, balance);
    }
    test(amount: number) {
      this._balance += amount;
    }
  }

  const student1 = new StudentAccount(112, 'Mr. Student', 10);
  student1.getBalance();
}
