{
  // conditional type
  type a1 = number;
  type b1 = undefined;

  type c = a1 extends null ? true : b1 extends undefined ? true : any;

  type Sheikh = {
    bike: string;
    car: string;
    ship: string;
  };

  type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

  type HasBike = CheckVehicle<"bike">;
}
