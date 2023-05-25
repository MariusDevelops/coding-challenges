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
}
console.groupEnd();
