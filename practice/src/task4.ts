{
  /*
    Task 4: Union and Intersection Types
    Objective: Create union and intersection types using interfaces.

    Instructions:

    Define interfaces Book and Magazine.
    Create:
    A type that is a union of Book and Magazine.
    A type that is an intersection of Book and Magazine.
    */

  interface Book {
    name: string;
    author: string;
    edition: string;
    publication: string;
    price: number;
  }

  interface Magazine {
    name: string;
    writer: string;
    publication: string;
    price: number;
  }

  type Asset1 = Book | Magazine;
  type Asset2 = Book & Magazine;

  const asset1: Asset1 = {
    name: "TypeScript Handbook",
    author: "Parthib",
    edition: "3rd",
    publication: "P Press",
    price: 500,
  };

  const asset2: Asset2 = {
    name: "Daily Dev Digest",
    author: "Programming Hero",
    writer: "Parthib",
    edition: "5th",
    publication: "Hero Press",
    price: 100,
  };
}
