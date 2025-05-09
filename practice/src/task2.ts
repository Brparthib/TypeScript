{
  /*
    Task 2: Functions, Optional, and Literal Types
    Objective: Create a function with parameters and an optional literal type.
    
    Instructions:
    
    Define a function that takes:
    name (string)
    age (number)
    role (optional, with type 'admin' | 'user' | 'guest')
    The function should log these values or perform a basic action.
  */

  const user1 = (
    name: string,
    age: number,
    role?: "admin" | "user" | "guest"
  ) => {
    if (role) {
      console.log(`This is ${name}. He is ${age}. He is ${role} of this site.`);
    } else {
      console.log(`This is ${name}. She is ${age}.`);
    }
  };

  user1("Mr. Parthib", 26, "admin");
  user1("Mrs. Someone", 25);
}
