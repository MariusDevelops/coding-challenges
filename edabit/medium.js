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
}
console.groupEnd();
