"use strict";
{
    // type assertion
    let anything;
    anything = "Next Level Developer";
    anything = 222;
    anything.toFixed(2);
    const kgToGm = (value) => {
        if (typeof value === "string")
            return `The converted value is ${parseFloat(value) * 1000}`;
        if (typeof value === "number")
            return value * 1000;
    };
    const result1 = kgToGm(1000);
    const result2 = kgToGm("1000");
    try {
    }
    catch (error) {
        console.log(error.message);
    }
}
