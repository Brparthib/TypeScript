{
  // abstraction --> 1. interface --> 2. abstract

  //idea
  interface Vehicle {
    startEngine(): void;
    stopEngine(): void;
    move(): void;
  }

  // real implementation
  class Car implements Vehicle {
    startEngine(): void {
      console.log(`I am starting the Engine`);
    }
    stopEngine(): void {
      console.log(`I stop the Engine`);
    }
    move(): void {
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
  abstract class Vehicle2 {
    abstract startEngine(): void;
    abstract stopEngine(): void;
    abstract move(): void;
  }

  class Car2 extends Vehicle2 {
    startEngine(): void {
      console.log(`I am starting the Engine`);
    }
    stopEngine(): void {
      console.log(`I stop the Engine`);
    }
    move(): void {
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
