{
  /*
    Task 8: Intersection Types
    Objective: Practice using intersection types.

    Instructions:

    Create a type AdminUser that is an intersection of:
    User with properties name and email
    Admin with property adminLevel
    Write a function describeAdmin(user: AdminUser): string that returns 
    a description of the admin user.

   */

  type User = {
    name: string;
    email: string;
  };

  type Admin = {
    adminLevel: string;
  };

  type AdminUser = User & Admin;

  const describeAdmin = (user: AdminUser) => {
    if ("adminLevel" in user) {
      console.log(
        `This is ${user.name}. His email is ${user.email}. His admin level is ${user.adminLevel}`
      );
    }
  };

  describeAdmin({
    name: "Parthib",
    email: "parthib@gmail.com",
    adminLevel: "super admin",
  });
}
