console.groupCollapsed("MEDIUM");
{
  console.groupCollapsed(
    "1. How Much is True? - https://edabit.com/challenge/GLbuMfTtDWwDv2F73"
  );
  {
    function countTrue(arr) {
      result = 0;
      for (let i = 0; i < arr.length; i++) {
        if (arr[i] === true) {
          result = result + 1;
        }
      }
      return result;
    }

    Test.assertEquals(countTrue([true, false, false, true, false]), 2);
    Test.assertEquals(countTrue([false, false, false, false]), 0);
    Test.assertEquals(countTrue([]), 0);
    Test.assertEquals(
      countTrue([
        false,
        false,
        true,
        true,
        false,
        false,
        false,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        false,
      ]),
      8
    );
    Test.assertEquals(
      countTrue([true, false, true, true, false, false, false, false, false]),
      3
    );
    Test.assertEquals(
      countTrue([
        false,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
      ]),
      8
    );
    Test.assertEquals(
      countTrue([
        true,
        false,
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        false,
      ]),
      6
    );
    Test.assertEquals(
      countTrue([
        false,
        false,
        false,
        false,
        true,
        false,
        true,
        false,
        true,
        false,
        false,
      ]),
      3
    );
    Test.assertEquals(
      countTrue([
        true,
        false,
        false,
        false,
        true,
        false,
        false,
        true,
        false,
        false,
        false,
      ]),
      3
    );
    Test.assertEquals(
      countTrue([
        true,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
        true,
        false,
      ]),
      4
    );
    Test.assertEquals(
      countTrue([
        true,
        false,
        true,
        true,
        false,
        true,
        true,
        true,
        true,
        false,
        true,
        false,
        true,
        false,
      ]),
      9
    );
    Test.assertEquals(
      countTrue([
        true,
        false,
        true,
        true,
        true,
        true,
        false,
        true,
        true,
        false,
        true,
        false,
        false,
        false,
        false,
      ]),
      8
    );
    Test.assertEquals(
      countTrue([
        true,
        true,
        false,
        false,
        false,
        false,
        true,
        false,
        true,
        true,
        false,
        true,
      ]),
      6
    );
  }
  console.groupEnd();

  console.groupCollapsed(
    "2. A Redundant Function - https://edabit.com/challenge/hzxN9bAebBPNqdQto"
  );
  {
    const f1 = redundant("apple");
    const f2 = redundant("pear");
    const f3 = redundant("");

    function redundant(str) {
      function result() {
        return str;
      }
      return result;
    }

    Test.assertEquals(f1(), "apple");
    Test.assertEquals(f2(), "pear");
    Test.assertEquals(f3(), "");
  }
  console.groupEnd();

  console.groupCollapsed(
    "3. RegEx Exercise: An empty string - https://edabit.com/challenge/bAqxpvYmDuuvz4LQz"
  );
  {
    const str = "";

    function testExp(str) {
      //   if (str.length === 0) {
      //     console.log(true);
      //   }

      const regexp = /^$/;

      if (str.match(regexp)) {
        return true;
      } else {
        return false;
      }

      //   if (/^$/.test(str)) {
      //     return true;
      //   } else {
      //     return false;
      //   }
    }

    Test.assertEquals(testExp(str), true);
  }
  console.groupEnd();

  console.groupCollapsed(
    "4. Tile Teamwork Tactics - https://edabit.com/challenge/NHfYRHg2tDtcZyykB"
  );
  {
    function possibleBonus(a, b) {
      if (b - a <= 6 && b - a >= 0 && a !== b) {
        return true;
      } else {
        return false;
      }
    }

    Test.assertEquals(possibleBonus(3, 7), true);
    Test.assertEquals(possibleBonus(0, 6), true);
    Test.assertEquals(possibleBonus(1, 6), true);
    Test.assertEquals(possibleBonus(2, 6), true);
    Test.assertEquals(possibleBonus(3, 6), true);
    Test.assertEquals(possibleBonus(4, 6), true);
    Test.assertEquals(possibleBonus(5, 6), true);
    Test.assertEquals(possibleBonus(6, 6), false);
    Test.assertEquals(possibleBonus(7, 6), false);
    Test.assertEquals(possibleBonus(23, 27), true);
    Test.assertEquals(possibleBonus(1, 9), false);
    Test.assertEquals(possibleBonus(5, 3), false);
  }
  console.groupEnd();

  console.groupCollapsed(
    "5. Right Shift by Division - https://edabit.com/challenge/ALGbgMWLuEdrh22fB"
  );
  {
    function shiftToRight(x, y) {
      const result = Math.floor(x / 2 ** y);
      return result;
    }

    Test.assertEquals(shiftToRight(80, 3), 10);
    Test.assertEquals(shiftToRight(-24, 2), -6);
    Test.assertEquals(shiftToRight(-5, 1), -3);
    Test.assertEquals(shiftToRight(4666, 6), 72);
    Test.assertEquals(shiftToRight(3777, 6), 59);
    Test.assertEquals(shiftToRight(-512, 10), -1);
  }
  console.groupEnd();

  console.groupCollapsed(
    "6. Perimeters with a Catch - https://edabit.com/challenge/WEvqZTFcHeYzFn74c"
  );
  {
    function perimeter(l, num) {
      return l === "s" ? 4 * num : 6.28 * num;
    }

    Test.assertEquals(perimeter("s", 1), 4);
    Test.assertEquals(perimeter("s", 4), 16);
    Test.assertEquals(perimeter("s", 9), 36);
    Test.assertEquals(perimeter("s", 13), 52);
    Test.assertEquals(perimeter("s", 30), 120);
    Test.assertEquals(perimeter("c", 1), 6.28);
    Test.assertEquals(perimeter("c", 4), 25.12);
    Test.assertEquals(perimeter("c", 9), 56.52);
    Test.assertEquals(perimeter("c", 13), 81.64);
    Test.assertEquals(perimeter("c", 30), 188.4);
  }
  console.groupEnd();

  console.groupCollapsed(
    "7. Find Number of Digits in Number - https://edabit.com/challenge/yFJzLfYghz7ZtsyAN"
  );
  {
    // works
    // function num_of_digits(num) {
    //   const result =
    //     num >= 0 ? num.toString().length : num.toString().length - 1;
    //   return result;
    // }

    // without string
    function num_of_digits(num) {
      let count = 0;
      let absoluteNumber = Math.abs(num); // Get the absolute value of the number
      console.log(absoluteNumber);

      if (absoluteNumber === 0) {
        return 1; // Special case for 0, which has one digit
      }

      while (absoluteNumber >= 1) {
        count++;
        absoluteNumber /= 10;
        absoluteNumber = Math.floor(absoluteNumber);
      }

      return count;
    }

    Test.assertEquals(num_of_digits(13124), 5);
    Test.assertEquals(num_of_digits(0), 1);
    Test.assertEquals(num_of_digits(-12381428), 8);
    Test.assertEquals(num_of_digits(12), 2);
    Test.assertEquals(num_of_digits(42), 2);
    Test.assertEquals(num_of_digits(1000), 4);
    Test.assertEquals(num_of_digits(136), 3);
    Test.assertEquals(num_of_digits(1000000000), 10);
    Test.assertEquals(num_of_digits(2147483647), 10);
    Test.assertEquals(num_of_digits(-2147483647), 10);
  }
  console.groupEnd();

  console.groupCollapsed(
    "8. Burglary Series (04): Add its Name - https://edabit.com/challenge/9KEKJG5PZTFmG3Zau"
  );
  {
    function addName(obj, name, value) {
      let obj2 = {};
      obj2[name] = value;
      const result = Object.assign(obj, obj2);
      console.log(result);
      return result;
    }

    Test.assertEquals(addName({}, "Brutus", 300), { Brutus: 300 });
    Test.assertEquals(addName({ piano: 500 }, "Brutus", 400), {
      piano: 500,
      Brutus: 400,
    });
    Test.assertEquals(addName({ piano: 500, stereo: 300 }, "Caligula", 440), {
      piano: 500,
      stereo: 300,
      Caligula: 440,
    });
  }
  console.groupEnd();

  console.groupCollapsed(
    "9. Derivative of a Function - https://edabit.com/challenge/Bxp6uGjgmf8TuG8Fe"
  );
  {
    function derivative(b, m) {
      return b * Math.pow(m, b - 1);
    }

    Test.assertEquals(derivative(1, 4), 1);
    Test.assertEquals(derivative(3, -2), 12);
    Test.assertEquals(derivative(4, -3), -108);
    Test.assertEquals(derivative(9, -5), 3515625);
    Test.assertEquals(derivative(1254, 0), 0);
    Test.assertEquals(derivative(-2, 10), -0.002);
  }
  console.groupEnd();

  console.groupCollapsed(
    "10. Which Generation Are You? - https://edabit.com/challenge/48EJWLhF224na8po3"
  );
  {
    function generation(x, y) {
      const generations = {
        "-3": { m: "great grandfather", f: "great grandmother" },
        "-2": { m: "grandfather", f: "grandmother" },
        "-1": { m: "father", f: "mother" },
        0: { m: "me!", f: "me!" },
        1: { m: "son", f: "daughter" },
        2: { m: "grandson", f: "granddaughter" },
        3: { m: "great grandson", f: "great granddaughter" },
      };

      if (x === 0) {
        return "me!";
      }

      if (generations[x] && generations[x][y]) {
        return generations[x][y];
      }

      return "unknown";
    }

    Test.assertEquals(
      generation(-3, "m"),
      "great grandfather",
      "3 generations before you, male..."
    );
    Test.assertEquals(
      generation(1, "f"),
      "daughter",
      "1 generation after you, female..."
    );
    Test.assertEquals(generation(-3, "f"), "great grandmother");
    Test.assertEquals(generation(-2, "m"), "grandfather");
    Test.assertEquals(generation(-2, "f"), "grandmother");
    Test.assertEquals(generation(-1, "m"), "father");
    Test.assertEquals(generation(-1, "f"), "mother");
    Test.assertEquals(generation(0, "f"), "me!");
    Test.assertEquals(generation(1, "m"), "son");
    Test.assertEquals(generation(1, "f"), "daughter");
    Test.assertEquals(generation(2, "m"), "grandson");
    Test.assertEquals(generation(2, "g"), "unknown");
  }
  console.groupEnd();

  console.groupCollapsed(
    "11. Find the nth Tetrahedral Number - https://edabit.com/challenge/zRCyxKBBmr4F2x4Bv"
  );
  {
    // n is the hight of Tetrahedral
    function tetra(n) {
      return (n * (n + 1) * (n + 2)) / 6;
    }

    Test.assertEquals(tetra(1), 1);
    Test.assertEquals(tetra(2), 4);
    Test.assertEquals(tetra(3), 10);
    Test.assertEquals(tetra(4), 20);
    Test.assertEquals(tetra(5), 35);
    Test.assertEquals(tetra(9), 165);
  }
  console.groupEnd();
}
console.groupEnd();
