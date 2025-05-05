"use strict";
{
    // instance of guard
    class Animal {
        constructor(name, species) {
            this.name = name;
            this.species = species;
        }
        makeSound() {
            console.log("I making sound!");
        }
    }
    class Dog extends Animal {
        constructor(name, species) {
            super(name, species);
        }
        makeBark() {
            console.log("I am barking!");
        }
    }
    class Cat extends Animal {
        constructor(name, species) {
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
    const isDog = (animal) => {
        return animal instanceof Dog;
    };
    const isCat = (animal) => {
        return animal instanceof Cat;
    };
    const getAnimal = (animal) => {
        if (isDog(animal)) {
            animal.makeBark();
        }
        else if (isCat(animal)) {
            animal.makeMew();
        }
        else {
            animal.makeSound();
        }
    };
    const dog = new Dog("Hachiko", "Dog");
    getAnimal(dog);
    const cat = new Cat("Ragdoll", "Cat");
    getAnimal(cat);
}
