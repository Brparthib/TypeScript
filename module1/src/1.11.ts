{
  // ternary operator
  const age: number = 15;

  if (age > 18) {
    console.log("Adult");
  } else {
    console.log("Not Adult");
  }

  const isAdult = age >= 18 ? "Adult" : "Not Adult";

  //   console.log({isAdult});

  // nullish coalescing operator
  // null / undefined ---> decision making

  const isAuthenticated = null;

  const result1 = isAuthenticated ?? "Guest";
  const result2 = isAuthenticated ? isAuthenticated : "Guest";

  console.log({ result1 }, { result2 });

  type User = {
    name: string;
    address: {
      city: string;
      road: string;
      presentAddress: string;
      permanentAddress?: string;
    };
  };

  const user: User = {
    name: "Parthib",
    address: {
        city: "Ctg",
        road: "Ctg road",
        presentAddress: "Dhk",
    }
  }

  const permanentAddress = user?.address?.permanentAddress ?? "No Permanent Address";
  console.log({permanentAddress});
}
