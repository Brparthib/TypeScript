{
  // utility types

  type Person = {
    name: string;
    age: number;
    email?: string;
    contactNo: string;
  };

  // pick
  type Name = Pick<Person, "name">;
  type User = Pick<Person, keyof Person>;

  // omit
  type NoContact = Omit<Person, "contactNo">;

  // required
  type PersonRequire = Required<Person>;

  // partial
  type PersonOptional = Partial<Person>;

  // read only
  type PersonReadOnly = Readonly<Person>;

  // record

  type MyObj = Record<string, string>;
  type NewObj = Record<string, unknown>;

  const person: NewObj = {
    a: "nice",
    b: "very nice",
    c: 10,
  };
}
