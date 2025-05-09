{
  /* 
    Task 5: Function Type
    Objective: Write a function that reverses a string.

    Instructions:

    Write a function reverseString that:
    Takes a single string argument.
    Returns the string in reverse order.
    Example:
    Input: "hello"
    Output: "olleh"
    */

  const reverseString1 = (str: string): string => {
    let s = str.length;
    let newStr = "";
    while (s--) {
      newStr += str.charAt(s);
    }
    return newStr;
  };

  const reverseString2 = (str: string): string =>
    str.split("").reverse().join("");

  const result = reverseString2("hello");
  console.log(result);
}
