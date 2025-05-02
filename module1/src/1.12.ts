{
  // nullable types
  const searching = (value: string | null) => {
    if (value) {
      console.log("Searching...");
    } else {
      console.log("There is nothing to search");
    }
  };

  searching(null);

  // unKnown typeof
  const getSpeedPerSecond = (value: unknown) => {
    if (typeof value === "number") {
      const convertedSpeed = (value * 1000) / 3600;
      console.log(`The speed is ${convertedSpeed} ms^-1`);
    }

    if(typeof value === 'string'){
        const [result, unit] = value.split(' ');
        const convertedSpeed = (parseFloat(value)*1000)/3600;
        console.log(`The speed is ${convertedSpeed} ms^-1`)
    }
  };

  getSpeedPerSecond('1000 Kmh^-1');

  // never
  const throwError = (msg: string): never => {
    throw new Error(msg);
  }

  throwError("Mathai error ditese")
}
