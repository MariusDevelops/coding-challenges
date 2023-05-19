console.groupCollapsed("EASY");
{
  console.groupCollapsed(
    "1. Bitwise Operations - https://edabit.com/challenge/vvuAkYEAArrZvmp6X"
  );
  {
    function bitwiseAND(n1, n2) {
      return n1 & n2;
    }

    function bitwiseOR(n1, n2) {
      return n1 | n2;
    }

    function bitwiseXOR(n1, n2) {
      return n1 ^ n2;
    }

    Test.assertEquals(bitwiseAND(7, 12), 4);
    Test.assertEquals(bitwiseOR(7, 12), 15);
    Test.assertEquals(bitwiseXOR(7, 12), 11);

    Test.assertEquals(bitwiseAND(32, 17), 0);
    Test.assertEquals(bitwiseOR(32, 17), 49);
    Test.assertEquals(bitwiseXOR(32, 17), 49);

    Test.assertEquals(bitwiseAND(13, 19), 1);
    Test.assertEquals(bitwiseOR(13, 19), 31);
    Test.assertEquals(bitwiseXOR(13, 19), 30);
  }
  console.groupEnd();

  console.groupCollapsed(
    "2. Add up the Numbers from a Single Number - https://edabit.com/challenge/4gzDuDkompAqujpRi"
  );
  {
    function addUp(num) {
      let sum = 0;
      for (let i = 0; i <= num; i++) {
        sum += i;
      }
      return sum;
    }

    Test.assertEquals(addUp(4), 10);
    Test.assertEquals(addUp(13), 91);
    Test.assertEquals(addUp(600), 180300);
    Test.assertEquals(addUp(392), 77028);
    Test.assertEquals(addUp(53), 1431);
    Test.assertEquals(addUp(897), 402753);
    Test.assertEquals(addUp(23), 276);
    Test.assertEquals(addUp(1000), 500500);
    Test.assertEquals(addUp(738), 272691);
    Test.assertEquals(addUp(100), 5050);
    Test.assertEquals(addUp(925), 428275);
    Test.assertEquals(addUp(1), 1);
    Test.assertEquals(addUp(999), 499500);
    Test.assertEquals(addUp(175), 15400);
    Test.assertEquals(addUp(111), 6216);
  }
  console.groupEnd();

  console.groupCollapsed(
    "3. Matchstick Houses - https://edabit.com/challenge/tYHkTdFrEmWfxpPKF"
  );
  {
    function matchHouses(step) {
      return step <= 0 ? 0 : step * 6 - (step - 1);
    }

    Test.assertEquals(matchHouses(1), 6);
    Test.assertEquals(matchHouses(2), 11);
    Test.assertEquals(matchHouses(3), 16);
    Test.assertEquals(matchHouses(0), 0);
    Test.assertEquals(matchHouses(17), 86);
    Test.assertEquals(matchHouses(36), 181);
    Test.assertEquals(matchHouses(15), 76);
    Test.assertEquals(matchHouses(99), 496);
    Test.assertEquals(matchHouses(3), 16);
    Test.assertEquals(matchHouses(87), 436);
  }
  console.groupEnd();

  console.groupCollapsed(
    "4. Left Shift by Powers of Two - https://edabit.com/challenge/pB6CF3rFBi8ykJ3Br"
  );
  {
    function shiftToLeft(x, y) {
      return x * 2 ** y;
    }

    let [numVector, resVector] = [
      [
        [5, 2],
        [10, 3],
        [-32, 2],
        [-6, 5],
        [12, 4],
        [46, 6],
        [57, 0],
        [79, 1],
      ],
      [20, 80, -128, -192, 192, 2944, 57, 158],
    ];
    for (let i in numVector)
      Test.assertEquals(shiftToLeft(...numVector[i]), resVector[i]);
  }
  console.groupEnd();

  console.groupCollapsed(
    "5. Find the Smallest and Biggest Numbers - https://edabit.com/challenge/Q3n42rEWanZSTmsJm"
  );
  {
    function minMax(arr) {
      const newArr = [];
      newArr.push(Math.min(...arr));
      newArr.push(Math.max(...arr));
      return newArr;
    }

    Test.assertEquals(minMax([14, 35, 6, 1, 34, 54]), [1, 54]);
    Test.assertEquals(minMax([1.346, 1.6532, 1.8734, 1.8723]), [1.346, 1.8734]);
    Test.assertEquals(
      minMax([0.432, 0.874, 0.523, 0.984, 0.327, 0.2345]),
      [0.2345, 0.984]
    );
    Test.assertEquals(minMax([13, 72, 98, 43, 24, 65, 31]), [13, 98]);
    Test.assertEquals(minMax([-54, -23, -54, -21]), [-54, -21]);
    Test.assertEquals(
      minMax([-0.473, -0.6834, -0.1287, 0.5632]),
      [-0.6834, 0.5632]
    );
    Test.assertEquals(minMax([0, 0, 0, 0]), [0, 0]);
  }
  console.groupEnd();

  console.groupCollapsed(
    "6. Is it Time for Milk and Cookies? - https://edabit.com/challenge/hPWnaSckJke5FXNEH"
  );
  {
    function timeForMilkAndCookies(date) {
      const month = date.getMonth();
      const day = date.getDate();
      return month === 11 && day === 24 ? true : false;
    }

    Test.assertEquals(timeForMilkAndCookies(new Date(2013, 11, 24)), true);
    Test.assertEquals(timeForMilkAndCookies(new Date(3000, 11, 24)), true);
    Test.assertEquals(timeForMilkAndCookies(new Date(2154, 11, 11)), false);
    Test.assertEquals(timeForMilkAndCookies(new Date(2010, 11, 2)), false);
    Test.assertEquals(timeForMilkAndCookies(new Date(1980, 9, 24)), false);
  }
  console.groupEnd();

  console.groupCollapsed(
    "7. Which Function Returns the Larger Number? - https://edabit.com/challenge/o7TwicAHWuMkjbDqQ"
  );
  {
    function whichIsLarger(f, g) {
      const firstNum = f();
      const secondNum = g();

      if (firstNum > secondNum) {
        return "f";
      } else if (firstNum < secondNum) {
        return "g";
      } else {
        return "neither";
      }
    }

    Test.assertEquals(
      whichIsLarger(
        () => 5,
        () => 10
      ),
      "g"
    );
    Test.assertEquals(
      whichIsLarger(
        () => 10,
        () => 5
      ),
      "f"
    );
    Test.assertEquals(
      whichIsLarger(
        () => 25,
        () => 25
      ),
      "neither"
    );
    Test.assertEquals(
      whichIsLarger(
        () => -100,
        () => -100
      ),
      "neither"
    );
    Test.assertEquals(
      whichIsLarger(
        () => -100,
        () => 0
      ),
      "g"
    );
    Test.assertEquals(
      whichIsLarger(
        () => 505050,
        () => 5050
      ),
      "f"
    );
    Test.assertEquals(
      whichIsLarger(
        () => 100,
        () => 1000
      ),
      "g"
    );
  }
  console.groupEnd();

  console.groupCollapsed(
    "8. Convert a Number to Base-2 - https://edabit.com/challenge/3kcrnpHk7krNZdnKK"
  );
  {
    function binary(decimal) {
      const binary = decimal.toString(2);
      return binary;
    }

    Test.assertEquals(binary(100), "1100100");
    Test.assertEquals(binary(1), "1");
    Test.assertEquals(binary(0), "0");
    Test.assertEquals(binary(69), "1000101");
    Test.assertEquals(binary(1023), "1111111111");
    Test.assertEquals(binary(511), "111111111");
    Test.assertEquals(binary(666), "1010011010");
    Test.assertEquals(binary(123), "1111011");
  }
  console.groupEnd();

  console.groupCollapsed(
    "9. Check if One Array can be Nested in Another - https://edabit.com/challenge/Gpy2qSFnfhGJnWMMj"
  );
  {
    function canNest(arr1, arr2) {
      // find arr min and max numbers
      const arr1Min = Math.min(...arr1);
      const arr1Max = Math.max(...arr1);
      const arr2Min = Math.min(...arr2);
      const arr2Max = Math.max(...arr2);
      // write if else and return
      return arr1Min > arr2Min && arr1Max < arr2Max ? true : false;
      // arr1's min is greater than arr2's min.
      // arr1's max is less than arr2's max.
    }

    Test.assertEquals(canNest([1, 2, 3, 4], [0, 6]), true);
    Test.assertEquals(canNest([3, 1], [4, 0]), true);
    Test.assertEquals(canNest([9, 9, 8], [8, 9, 10]), false);
    Test.assertEquals(canNest([9, 9, 8], [8, 9]), false);
    Test.assertEquals(canNest([1, 2, 3, 4], [2, 3]), false);
  }
  console.groupEnd();

  console.groupCollapsed(
    "10. RegEx Exercise 1: Find the Time - https://edabit.com/challenge/QkuiL7XApt2RMQqTJ"
  );
  {
    // pseudocode:
    // problem: find time in a string
    const str = "Breakfast at 09:00 in the room 123:456.";

    function testExp(str) {
      const regexp = /(\b[0-9][0-9]:[0-9][0-9]\b)/g;
      // const regexp = /(\b\d{1,2}:\d{2}\b)/g;
      return str.match(regexp);
    }

    Test.assertEquals(testExp(str), ["09:00"]);
  }
  console.groupEnd();

  console.groupCollapsed(
    "11. RegEx XIV: Group Ranges x|y - https://edabit.com/challenge/7KbZc8QvzqrJPaE6Q"
  );
  {
    const str1 = "red flag blue flag";
    const str2 = "yellow flag red flag blue flag green flag";
    const str3 = "pink flag red flag black flag blue flag green flag red flag";
    const str4 = "blue flag red flag red flag blue flag green flag red flag";

    function testExp(str) {
      const regexp = /(blue flag|red flag)/gi;
      return str.match(regexp);
    }

    Test.assertEquals(testExp(str1), ["red flag", "blue flag"]);
    Test.assertEquals(testExp(str2), ["red flag", "blue flag"]);
    Test.assertEquals(testExp(str3), ["red flag", "blue flag", "red flag"]);
    Test.assertEquals(testExp(str4), [
      "blue flag",
      "red flag",
      "red flag",
      "blue flag",
      "red flag",
    ]);
  }
  console.groupEnd();

  console.groupCollapsed(
    "12. Promises III: Native Promise, Introducing the Executor - https://edabit.com/challenge/8kTQqoWYQXRsKuYEf"
  );
  {
    let promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve("edabit string");
      }, 1000);
    });

    // promise.then((result) => {
    //   Test.assertEquals(typeof result, "string");
    // });

    promise.then((result) => {
      console.groupCollapsed("<--- edabit easy 12th task");
      {
        console.log("Expected:", typeof result);
        console.log("Actual:", "string");
        Test.assertEquals(typeof result, "string");
      }
      console.groupEnd();
    });
  }
  console.groupEnd();

  console.groupCollapsed(
    "13. Number of Squares in an N * N Grid - https://edabit.com/challenge/RGQXN4TG2CQoBAReQ"
  );
  {
    // function numberSquares(n) {
    //   result = 0;
    //   for (let i = 0; i <= n; i++) {
    //     result = i ** 2 + result;
    //   }
    //   return result;
    // }

    function numberSquares(n) {
      if (n === 0) {
        return 0;
      }

      return n ** 2 + numberSquares(n - 1);
    }

    Test.assertEquals(numberSquares(0), 0);
    Test.assertEquals(numberSquares(1), 1);
    Test.assertEquals(numberSquares(2), 5);
    Test.assertEquals(numberSquares(3), 14);
    Test.assertEquals(numberSquares(10), 385);
    Test.assertEquals(numberSquares(12), 650);
    Test.assertEquals(numberSquares(5), 55);
    Test.assertEquals(numberSquares(9), 285);
    Test.assertEquals(numberSquares(11), 506);
    Test.assertEquals(numberSquares(15), 1240);
  }
  console.groupEnd();

  console.groupCollapsed(
    "14. Sum of Resistance in Series Circuits - https://edabit.com/challenge/JDkyQJqNfJNhvjmRW"
  );
  {
    // function seriesResistance(arr) {
    //   let sum = 0;
    //   for (let i = 0; i < arr.length; i++) {
    //     sum += arr[i];
    //   }

    //   return sum <= 1 ? sum + " ohm" : sum + " ohms";
    // }

    function seriesResistance(arr) {
      const sum = arr.reduce(
        (previousValue, currentValue) => previousValue + currentValue,
        0
      );

      let result = "";
      if (sum <= 1) {
        result = `${sum} ohm`;
      } else {
        result = `${sum} ohms`;
      }

      return result;
    }

    Test.assertEquals(seriesResistance([1, 5, 6, 3]), "15 ohms");
    Test.assertEquals(seriesResistance([0.2, 0.3, 0.4]), "0.9 ohm");
    Test.assertEquals(seriesResistance([10, 12, 1, 10]), "33 ohms");
    Test.assertEquals(seriesResistance([10, 13, 3.8, 20, 10]), "56.8 ohms");
    Test.assertEquals(seriesResistance([0.5, 0.5]), "1 ohm");
    Test.assertEquals(seriesResistance([16, 30, 22.8, 4]), "72.8 ohms");
    Test.assertEquals(seriesResistance([20, 15, 32.5, 2]), "69.5 ohms");
    Test.assertEquals(seriesResistance([52, 22, 20, 30]), "124 ohms");
    Test.assertEquals(
      seriesResistance([10, 12, 32, 4.9, 5, 6, 71]),
      "140.9 ohms"
    );
  }
  console.groupEnd();
}
console.groupEnd();
