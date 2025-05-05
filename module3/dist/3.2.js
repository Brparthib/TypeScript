"use strict";
{
    // oop - inheritance
    class Person {
        constructor(name, age, address) {
            this.name = name;
            this.age = age;
            this.address = address;
        }
        getSleep(numOfHours) {
            console.log(`${this.name} will sleep for ${numOfHours} hours`);
        }
    }
    class Student extends Person {
        constructor(name, age, address) {
            super(name, age, address);
        }
    }
    const student1 = new Student("Parthib", 26, "Dhaka");
    student1.getSleep(7);
    class Teacher extends Person {
        constructor(name, age, address, designation) {
            super(name, age, address);
            this.designation = designation;
        }
    }
    const teacher = new Teacher("Mrs. Y", 30, "Dhaka", "Professor");
    teacher.getSleep(8);
}
