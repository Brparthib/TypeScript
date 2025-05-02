{
  // spread operator
  const bros1: string[] = ["Mir", "Firoz", "Mizan"];
  const bros2: string[] = ["Tonmoy", "Nahid", "Rahat"];
  bros1.push(...bros2);

  const mentors1 = {
    typescript: "Mexba",
    redux: "Mir",
    dbms: "Mizan",
  };

  const mentor2 = {
    prisma: "Firoz",
    next: "Tanmoy",
    cloud: "Nahid",
  };

  const allMentor = {
    ...mentors1,
    ...mentor2,
  };

  // rest operator
  const greetFriends = (...friends: string[]) => {
    friends.forEach((friend: string) => console.log(`Hi ${friend}`));
  };

  greetFriends("Sudipto", "Hridoy", "Arafat", "Sahin", "Pramit");
}
