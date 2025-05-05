"use strict";
{
    // real implementation
    class Car {
        startEngine() {
            console.log(`I am starting the Engine`);
        }
        stopEngine() {
            console.log(`I stop the Engine`);
        }
        move() {
            console.log(`I move the car`);
        }
        test() {
            console.log(`I test the car`);
        }
    }
    const toyota = new Car();
    toyota.startEngine();
    toyota.move();
    toyota.test();
    toyota.stopEngine();
    // abstract class
    // idea
    class Vehicle2 {
    }
    class Car2 extends Vehicle2 {
        startEngine() {
            console.log(`I am starting the Engine`);
        }
        stopEngine() {
            console.log(`I stop the Engine`);
        }
        move() {
            console.log(`I move the car`);
        }
        test() {
            console.log(`I test the car`);
        }
    }
    const BMW = new Car2();
    BMW.startEngine();
    BMW.move();
    BMW.test();
    BMW.stopEngine();
}
