{
  // mapped types

  const arrayOfNumber: number[] = [1, 2, 3];

  const arrayOfString: string[] = arrayOfNumber.map((number) =>
    number.toString()
  );

  console.log(arrayOfString);

  type AreaNumber = {
    height: number;
    width: number;
  };

  //   type AreaString = {
  //     [key in keyof AreaNumber]: string;
  //   };

  type Height = AreaNumber["height"];

  type AreaString<T> = {
    [key in keyof T]: T[key];
  };

  const area: AreaString<{ height: string; width: number }> = {
    height: "100",
    width: 30,
  };
}
