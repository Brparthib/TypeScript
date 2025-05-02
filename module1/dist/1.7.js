"use strict";
{
    // spread operator
    const bros1 = ["Mir", "Firoz", "Mizan"];
    const bros2 = ["Tonmoy", "Nahid", "Rahat"];
    bros1.push(...bros2);
    const mentors1 = {
        typescript: "Mexba",
        redux: "Mir",
        dbms: "Mizan",
    };
    const mentor2 = {
        prisma: "Firoz",
        next: "Tanmoy",
        cloud: "Nahid",
    };
    const allMentor = Object.assign(Object.assign({}, mentors1), mentor2);
    // rest operator
    const greetFriends = (...friends) => {
        friends.forEach((friend) => console.log(`Hi ${friend}`));
    };
    greetFriends("Sudipto", "Hridoy", "Arafat", "Sahin", "Pramit");
}
