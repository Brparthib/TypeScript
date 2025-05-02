"use strict";
{
    // destructuring
    const user = {
        id: 123,
        name: {
            firstName: "Al",
            middleName: "Amin",
            lastName: "Ridoy",
        },
        contactNo: "01234567891",
        address: "Uganda",
    };
    const { contactNo, name: { middleName }, } = user;
    const myFriends = ["Limon", "Shahin", "Ridoy", "Antor", "Isteak", "Pramit"];
    const [, , friends, ...rest] = myFriends;
}
