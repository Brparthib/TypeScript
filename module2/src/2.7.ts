{
  // generic constraint with keyof operator

  type Vehicle = {
    bike: string;
    car: string;
    ship: string;
  };

  type Owner = "bike" | "car" | "ship"; // manually typed

  type Owner2 = keyof Vehicle;

  const getPropertyValue = <X, Y extends keyof X>(obj: X, key: Y) => {
    return obj[key];
  };

  const user = {
    name: "Mr. X",
    age: 26,
    address: "DHK",
  };

  const result = getPropertyValue(user, "name");

  const car = {
    model: "Tesla",
    year: 2018,
  };

  const result2 = getPropertyValue(car, "model");
}
