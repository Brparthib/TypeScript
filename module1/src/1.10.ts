{
  // union types
  //   type FrontendDeveloper = "FakibazDeveloper" | "FrontendDeveloper";
  //   type FullStackDeveloper = "FrontendDeveloper" | "ExpertDeveloper";

  //   type Developer = FrontendDeveloper | FullStackDeveloper;

  //   const newDeveloper: Developer = "FakibazDeveloper";
  //   const newDeveloper2: FrontendDeveloper = "FrontendDeveloper";
  //   const Parthib: Developer = "ExpertDeveloper";

  //   type User = {
  //     name: string;
  //     email?: string;
  //     gender: "male" | "female";
  //     bloodGroup: "A+" | "B+" | "AB+";
  //   };

  //   const user1: User = {
  //     name: "Parthib",
  //     gender: "male",
  //     bloodGroup: "B+",
  //   };

  type FrontendDeveloper = {
    skills: string[];
    designation1: "Frontend Developer";
  };

  type BackendDeveloper = {
    skills: string[];
    designation2: "Backend Developer";
  };

  type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;

  const fullStackDeveloper: FullStackDeveloper = {
    skills: ["HTML", "CSS", "Express"],
    designation1: "Frontend Developer",
    designation2: "Backend Developer",
  };
}
