{
  type Something = {
    something: string;
    anything: string;
  };

  // promise
  // simulate
  const createPromise = (): Promise<Something> => {
    return new Promise<Something>((resolve, reject) => {
      const data: Something = { something: "something", anything: "anything" };

      if (data) {
        resolve(data);
      } else {
        reject("Failed to load data");
      }
    });
  };

  const showData = async (): Promise<Something> => {
    const data: Something = await createPromise();

    return data;
  };

  showData();

  type ToDo = {
    userId: number;
    id: number;
    title: string;
    completed: boolean;
  };

  const getToDo = async (): Promise<ToDo> => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const data = await response.json();

    return data;
  };

  const dataShow = async () => {
    const data = await getToDo();

    console.log(data);
  }

  dataShow();
}
