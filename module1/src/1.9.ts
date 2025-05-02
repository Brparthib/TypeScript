{
  // Type Alias
  type student = {
    name: string;
    age: number;
    gender: string;
    contactNo?: string;
    address: string;
  };

  const student1: student = {
    name: "Limon",
    age: 26,
    gender: "male",
    contactNo: "01234567891",
    address: "Uganda",
  };

  const student2: student = {
    name: "Shahin",
    age: 29,
    gender: "male",
    address: "Somalia",
  };

  type UserName = string;
  const userName: UserName = "Pramit";

  type IsAdmin = boolean;
  const isAdmin: IsAdmin = true;

  type Add = (x: number, y:number) => number;

  const add: Add = (num1, num2) => num1 + num2;

}
