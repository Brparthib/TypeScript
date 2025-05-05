{
  // instance of guard
  class Animal {
    constructor(public name: string, public species: string) {}

    makeSound() {
      console.log("I making sound!");
    }
  }

  class Dog extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeBark() {
      console.log("I am barking!");
    }
  }

  class Cat extends Animal {
    constructor(name: string, species: string) {
      super(name, species);
    }

    makeMew() {
      console.log("I am mewing!");
    }
  }

  //   const getAnimal = (animal: Animal) => {
  //     if (animal instanceof Dog) {
  //       animal.makeBark();
  //     }else if (animal instanceof Cat) {
  //         animal.makeMew();
  //     } else{
  //         animal.makeSound();
  //     }
  //   };

  const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog;
  };

  const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat;
  };

  const getAnimal = (animal: Animal) => {
    if (isDog(animal)) {
      animal.makeBark();
    } else if (isCat(animal)) {
      animal.makeMew();
    } else {
      animal.makeSound();
    }
  };

  const dog = new Dog("Hachiko", "Dog");
  getAnimal(dog);
  const cat = new Cat("Ragdoll", "Cat");
  getAnimal(cat);
}
