{
  // Generic Type
  type GenericArray<T> = Array<T>;

  const rollNumber: number[] = [1, 2, 3];
  const rollNumber1: Array<number> = [1, 2, 3];
  const rollNumber2: GenericArray<number> = [1, 2, 3];

  const metors: string[] = ["Mr. X", "Mr. Y"];
  const metors1: Array<string> = ["Mr. X", "Mr. Y"];
  const metors2: GenericArray<string> = ["Mr. X", "Mr. Y"];

  const boolArray: boolean[] = [true, false, true];
  const boolArray1: Array<boolean> = [true, false, true];
  const boolArray2: GenericArray<boolean> = [true, false, true];

  type User = {
    name: string;
    age: number;
  };

  const user: GenericArray<User> = [
    {
      name: "Parthib",
      age: 26,
    },
    {
      name: "Barua",
      age: 25,
    },
  ];

  // generic tuple
  type GenericTuple<X, Y> = [X, Y];
  const couple: GenericTuple<string, string> = ["Mr. X", "Mrs. Y"];

  const userWithId: GenericTuple<number, User> = [
    123,
    {
      name: "Parthib",
      age: 26,
    },
  ];
}
