{
  // type assertion
  let anything: any;

  anything = "Next Level Developer";

  anything = 222;

  (anything as number).toFixed(2);

  const kgToGm = (value: string | number): string | number | undefined => {
    if (typeof value === "string")
      return `The converted value is ${parseFloat(value) * 1000}`;

    if (typeof value === "number") return value * 1000;
  };

  const result1 = kgToGm(1000) as number;
  const result2 = kgToGm("1000") as string;

  type CustomError = {
    message: string;
  };

  try {
  } catch (error) {
    console.log((error as CustomError).message);
  }
}
