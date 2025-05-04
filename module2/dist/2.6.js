"use strict";
{
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
        id: 123,
        name: "Mr. Z",
        email: "z@gmail.com",
        phone: "RealMe",
    });
}
