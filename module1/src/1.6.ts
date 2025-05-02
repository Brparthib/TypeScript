// normal function
function add(num1: number, num2: number = 10): number {
  return num1 + num2;
}

add(20, 30);

// arrow function
const addArrow = (num1: number = 10, num2: number): number => num1 + num2;

addArrow(20, 30);

// object --> function --> methods
const poorUser = {
  name: "Parthib",
  balance: 100000000,
  addBalance(balance: number): string {
    return `My balance is ${this.balance + balance}`;
  },
};

poorUser.addBalance(2000000000);

const arr: number[] = [1, 2, 3];

const sqrArr: number[] = arr.map((e: number): number => e * e);
