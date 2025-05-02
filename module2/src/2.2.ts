{
  // interface
  type User1 = {
    name: string;
    age: number;
  };

  type UserWithRole1 = User1 & { role: string };

  const user1: UserWithRole1 = {
    name: "Parthib",
    age: 26,
    role: "Admin",
  };

  interface User2 {
    name: string;
    age: number;
  }

  interface UserWithRole2 extends User2 {
    role: string;
  }

  const user2: UserWithRole1 = {
    name: "Parthib",
    age: 26,
    role: "Admin",
  };

  //   js --> object array --> object function --> object

  type Roll1 = number[];

  interface Roll2 {
    [index: number]: number;
  }

  const rollNumber1: Roll1 = [1, 2, 3];
  const rollNumber2: Roll2 = [1, 2, 3];

  type Add1 = (x: number, y: number) => number;
  interface Add2 {
    (x: number, y: number): number;
  }

  const add1: Add1 = (num1, num2) => num1 + num2;
  const add2: Add2 = (num1, num2) => num1 + num2;
}
