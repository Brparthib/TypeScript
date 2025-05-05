"use strict";
{
    // static
    class Counter {
        static increment() {
            return Counter.count += 1;
        }
        static decrement() {
            return Counter.count -= 1;
        }
    }
    Counter.count = 0;
    //   const counter1 = new Counter();
    //   console.log(counter1.increment());
    //   const counter2 = new Counter();
    console.log(Counter.increment());
    //   const counter3 = new Counter();
    console.log(Counter.increment());
    //   const counter4 = new Counter();
    console.log(Counter.decrement());
}
