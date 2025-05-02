{
  // generic interface
  interface Developer<T, X = null> {
    name: string;
    computer: {
      brand: string;
      model: string;
      releaseYear: number;
    };
    smartWatch: T;
    bike?: X;
  }

  type EmilabWatch = {
    brand: string;
    model: string;
    display: string;
  };

  const poorDeveloper: Developer<EmilabWatch> = {
    name: "Amuk",
    computer: {
      brand: "Asus",
      model: "X-255UR",
      releaseYear: 2013,
    },
    smartWatch: {
      brand: "Emilab",
      model: "KW66",
      display: "OLED",
    },
  };

  type AppleWatch = {
    brand: string;
    model: string;
    heartTrack: boolean;
    sleepTrack: boolean;
  };

  type Bike = {
    brand: string;
    model: string;
    engineCapacity: string;
  };

  const richDeveloper: Developer<AppleWatch, Bike> = {
    name: "Amuk",
    computer: {
      brand: "HP",
      model: "X-25R",
      releaseYear: 2018,
    },
    smartWatch: {
      brand: "Apple",
      model: "AP231",
      heartTrack: true,
      sleepTrack: true,
    },
    bike: {
      brand: "Royal Enfield",
      model: "Bullet",
      engineCapacity: "350CC",
    },
  };
}
