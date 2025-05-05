{
  // polymorphism
  class Person {
    getSleep() {
      console.log(`I am sleeping for 8 hours per day`);
    }
  }

  class Student extends Person {
    getSleep() {
      console.log(`I am sleeping for 7 hours per day`);
    }
  }

  class Developer extends Person {
    getSleep(): void {
      console.log(`I am sleeping for 6 hours per day`);
    }
  }

  const getSleepingHours = (param: Person) => {
    param.getSleep();
  };

  const person1 = new Person();
  const person2 = new Student();
  const person3 = new Developer();

  getSleepingHours(person1);
  getSleepingHours(person2);
  getSleepingHours(person3);

  class Shape {
    getArea(): number {
      return 0;
    }
  }

  // pi*r*r
  class Circle extends Shape {
    constructor(public radius: number) {
      super();
    }
    getArea(): number {
      return Math.PI * this.radius * this.radius;
    }
  }

  class Rectangle extends Shape {
    constructor(public height: number, public width: number) {
      super();
    }

    getArea(): number {
      return this.height * this.width;
    }
  }

  const getShapeArea = (param: Shape) => {
    console.log(param.getArea());
  };

  const shape = new Shape();
  const circle = new Circle(10);
  const rectangle = new Rectangle(10, 20);

  getShapeArea(shape);
  getShapeArea(circle);
  getShapeArea(rectangle);
}
