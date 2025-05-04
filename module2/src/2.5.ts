{
  // function with generics
  const createArray = (param: string): string[] => {
    return [param];
  };

  const createArrayWithGeneric = <T>(param: T): T[] => {
    return [param];
  };

  const res1 = createArray("Bangladesh");
  const res2 = createArrayWithGeneric<true>(true);

  type User = {
    name: string;
    age: number;
  };
  const res3 = createArrayWithGeneric<User>({ name: "Parthib", age: 26 });

  const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
    return [param1, param2];
  };

  const res4 = createArrayWithTuple<string, number>("Parthib", 26);
  const res5 = createArrayWithTuple<number, { name: string }>(123, {
    name: "Parthib",
  });

  const addCourseToStudent = <T>(student: T) => {
    const course = "Next Level Web Development";

    return {
      ...student,
      course,
    };
  };

  const student1 = addCourseToStudent({
    id: 121,
    name: "Mr. X",
    email: "x@gmail.com",
    devType: "NLWD",
  });

  const student2 = addCourseToStudent({
    id: 122,
    name: "Mr. Y",
    email: "y@gmail.com",
    hasWatch: "Apple Watch",
  });

  const student3 = addCourseToStudent({
    phone: "RealMe",
  });
}
