{
  /*
    Task 9: Optional Chaining
    Objective: Use optional chaining with nested objects.

    Instructions:

    Write a function getEmployeeCity(employee) that safely retrieves 
    the city of an employee from a nested object using optional chaining.
    */

  type Employee = {
    name: string;
    email: string;
    address?: {
      city?: string;
    };
  };

  const getEmployeeCity = (employee: Employee): string | undefined => {
    return employee?.address?.city;
  };

  const employee1: Employee = {
    name: "Sony",
    email: "sony@gmail.com",
    address: {
      city: "Dhaka",
    },
  };

  const employee2: Employee = {
    name: "Abul",
    email: "abul@gmail.com",
  };

  console.log(getEmployeeCity(employee1));
}
