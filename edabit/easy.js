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
}
console.groupEnd();