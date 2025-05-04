"use strict";
{
    const getPropertyValue = (obj, key) => {
        return obj[key];
    };
    const user = {
        name: "Mr. X",
        age: 26,
        address: "DHK",
    };
    const result = getPropertyValue(user, "name");
    const car = {
        model: "Tesla",
        year: 2018,
    };
    const result2 = getPropertyValue(car, "model");
}
