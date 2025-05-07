{
  /*
    Task 6: Spread and Rest Operators, Destructuring
    Objective: Write a function that uses the rest operator for variable-length arguments.

    Instructions:

    Create a function that takes multiple numeric arguments (using the rest operator) and returns the sum of all arguments.
   */

  const add = (...num: number[]) => {
    const [...num2] = num;
    let sum = 0;
    num2.map((n) => (sum += n));

    return sum;
  };

  const add2 = (...num: number[]): number =>
    num.reduce((acc, curr) => acc + curr, 0);

  console.log(add(1, 2, 3, 4));
  console.log(add2(1, 2, 3, 4));
}
