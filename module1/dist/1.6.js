"use strict";
// normal function
function add(num1, num2 = 10) {
    return num1 + num2;
}
add(20, 30);
// arrow function
const addArrow = (num1 = 10, num2) => num1 + num2;
addArrow(20, 30);
// object --> function --> methods
const poorUser = {
    name: "Parthib",
    balance: 100000000,
    addBalance(balance) {
        return `My balance is ${this.balance + balance}`;
    },
};
poorUser.addBalance(2000000000);
const arr = [1, 2, 3];
const sqrArr = arr.map((e) => e * e);
