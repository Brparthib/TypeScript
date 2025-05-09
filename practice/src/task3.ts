{
  /*
    Task 3: Object Types, Type Alias, & Literal Types
    Objective: Define a structured Person object using Type Aliases.

    Instructions:

    Define a Person type alias with properties for Name, Address, Hair and Eye Color, Income and Expense, Hobbies, Family Members, Job, Skills, Marital Status, and Friends.

   */

  //Type Alias
  type Person = {
    name: string;
    address: string;
    skills: string[];
    job: string;
    income: number;
    expense: number;
    maritalStatus: "married" | "single"; // literal --> type
    hobbies?: string[];
    hairColor?: string;
    eyeColor?: string;
    familyMembers?: number;
    friends?: number;
  };

  const user1: Person = {
    name: "Parthib",
    address: "Dhaka",
    skills: ["TypeScript", "RDBMS", "NoSQL", "Next.js", "Redux"],
    job: "Software Development",
    income: 130000,
    expense: 50000,
    maritalStatus: "single",
  };

  console.log(user1.income);
}
