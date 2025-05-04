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
}
