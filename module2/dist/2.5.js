"use strict";
{
    // function with generics
    const createArray = (param) => {
        return [param];
    };
    const createArrayWithGeneric = (param) => {
        return [param];
    };
    const res1 = createArray("Bangladesh");
    const res2 = createArrayWithGeneric(true);
    const res3 = createArrayWithGeneric({ name: "Parthib", age: 26 });
    const createArrayWithTuple = (param1, param2) => {
        return [param1, param2];
    };
    const res4 = createArrayWithTuple("Parthib", 26);
    const res5 = createArrayWithTuple(123, {
        name: "Parthib",
    });
    const addCourseToStudent = (student) => {
        const course = "Next Level Web Development";
        return Object.assign(Object.assign({}, student), { course });
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
