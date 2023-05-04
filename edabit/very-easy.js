console.groupCollapsed("VERY-EASY");
{
  console.groupCollapsed(
    "1. How Edabit Works - https://edabit.com/challenge/ARr5tA458o2tC9FTN"
  );
  {
    function hello() {
      return "hello edabit.com";
    }

    Test.assertEquals(
      hello(),
      "hello edabit.com",
      "The output should be 'hello edabit.com'"
    );
  }
  console.groupEnd();

  console.groupCollapsed(
    "2. Return the Sum of Two Numbers - https://edabit.com/challenge/3LpBLgNRyaHMvNb4j"
  );
  {
    function addition(a, b) {
      return a + b;
    }

    Test.assertEquals(addition(2, 3), 5);
    Test.assertEquals(addition(-3, -6), -9);
    Test.assertEquals(addition(7, 3), 10);
    Test.assertEquals(addition(88, 2), 90);
  }
  console.groupEnd();

  console.groupCollapsed(
    "3. Convert Minutes into Seconds - https://edabit.com/challenge/8q54MKnRrm89pSLmW"
  );
  {
    function convert(minutes) {
      return minutes * 60;
    }

    Test.assertEquals(convert(6), 360);
    Test.assertEquals(convert(4), 240);
    Test.assertEquals(convert(8), 480);
    Test.assertEquals(convert(60), 3600);
  }
  console.groupEnd();

  console.groupCollapsed(
    "4. Return the Next Number from the Integer Passed - https://edabit.com/challenge/NAQhEoxbofPidLxm9"
  );
  {
    function addition(num) {
      return (num += 1);
    }

    Test.assertEquals(addition(2), 3, "2 plus 1 equals 3.");
    Test.assertEquals(addition(-9), -8, "-8 plus 1 equals -9.");
    Test.assertEquals(addition(0), 1, "0 plus 1 equals 1.");
    Test.assertEquals(addition(999), 1000, "999 plus 1 equals 1000.");
    Test.assertEquals(addition(73), 74, "73 plus 1 equals 74.");
  }
  console.groupEnd();

  console.groupCollapsed(
    "5. Area of a Triangle - https://edabit.com/challenge/3CaszbdZYGN4otQD8"
  );
  {
    function triArea(base, height) {
      return (base * height) / 2;
    }

    Test.assertEquals(triArea(3, 2), 3);
    Test.assertEquals(triArea(5, 4), 10);
    Test.assertEquals(triArea(10, 10), 50);
    Test.assertEquals(triArea(0, 60), 0);
    Test.assertEquals(triArea(12, 11), 66);
  }
  console.groupEnd();

  console.groupCollapsed(
    "6. Convert Age to Days - https://edabit.com/challenge/bL7hSc6Zh4zZJzGmw"
  );
  {
    function calcAge(age) {
      return age * 365;
    }

    Test.assertEquals(calcAge(10), 3650);
    Test.assertEquals(calcAge(0), 0);
    Test.assertEquals(calcAge(73), 26645);
  }
  console.groupEnd();

  console.groupCollapsed(
    "7. Buggy Code (Part 1) - https://edabit.com/challenge/j7yQbF3J3rToHsDBP"
  );
  {
    function cubes(a) {
      return a ** 3;
    }

    Test.assertEquals(cubes(2), 8);
    Test.assertEquals(cubes(3), 27);
    Test.assertEquals(cubes(4), 64);
    Test.assertEquals(cubes(5), 125);
    Test.assertEquals(cubes(10), 1000);
  }
  console.groupEnd();

  console.groupCollapsed(
    "8. Return the First Element in an Array - https://edabit.com/challenge/QaApgtePE6QrCZ64o"
  );
  {
    function getFirstValue(arr) {
      return arr[0];
    }

    Test.assertEquals(getFirstValue([1, 2, 3]), 1);
    Test.assertEquals(getFirstValue([80, 5, 100]), 80);
    Test.assertEquals(getFirstValue([-500, 0, 50]), -500);
    Test.assertEquals(getFirstValue([5, 2, 3]), 5);
    Test.assertEquals(getFirstValue([75675, 5, 100]), 75675);
    Test.assertEquals(getFirstValue([-52320, 0, 50]), -52320);
  }
  console.groupEnd();

  console.groupCollapsed(
    "8. Power Calculator - https://edabit.com/challenge/wAdE9te55cowBLcPs"
  );
  {
    function circuitPower(voltage, current) {
      return voltage * current;
    }

    Test.assertEquals(circuitPower(110, 3), 330);
    Test.assertEquals(circuitPower(230, 10), 2300);
    Test.assertEquals(circuitPower(480, 20), 9600);
  }
  console.groupEnd();

  console.groupCollapsed(
    "9. Convert Hours into Seconds - https://edabit.com/challenge/6AnQqiEjkJdZrWhPS"
  );
  {
    function howManySeconds(hours) {
      return hours * 3600;
    }

    Test.assertEquals(howManySeconds(2), 7200);
    Test.assertEquals(howManySeconds(10), 36000);
    Test.assertEquals(howManySeconds(24), 86400);
    Test.assertEquals(howManySeconds(36), 129600);
  }
  console.groupEnd();

  console.groupCollapsed(
    "10. Maximum Edge of a Triangle - https://edabit.com/challenge/nhXofMMyrowMyr9Nv"
  );
  {
    function nextEdge(side1, side2) {
      return side1 + side2 - 1;
    }

    Test.assertEquals(nextEdge(5, 4), 8);
    Test.assertEquals(nextEdge(8, 3), 10);
    Test.assertEquals(nextEdge(7, 9), 15);
    Test.assertEquals(nextEdge(10, 4), 13);
    Test.assertEquals(nextEdge(7, 2), 8);
  }
  console.groupEnd();

  console.groupCollapsed(
    "11. Return the Remainder from Two Numbers - https://edabit.com/challenge/Q2j5FTFtsk7PdzrQk"
  );
  {
    function remainder(x, y) {
      return x % y;
    }

    Test.assertEquals(remainder(7, 2), 1);
    Test.assertEquals(remainder(3, 4), 3);
    Test.assertEquals(remainder(-9, 45), -9);
    Test.assertEquals(remainder(5, 5), 0);
  }
  console.groupEnd();

  console.groupCollapsed(
    "12. Find the Perimeter of a Rectangle - https://edabit.com/challenge/XnJ24rWW7iJkNrtsh"
  );
  {
    function findPerimeter(length, width) {
      return (length + width) * 2;
    }

    Test.assertEquals(findPerimeter(6, 7), 26);
    Test.assertEquals(findPerimeter(20, 10), 60);
    Test.assertEquals(findPerimeter(2, 9), 22);
  }
  console.groupEnd();

  console.groupCollapsed(
    "13. Return Something to Me! - https://edabit.com/challenge/MvZK536X7fyrWH8Qc"
  );
  {
    function giveMeSomething(a) {
      return `something ${a}`;
    }

    Test.assertEquals(giveMeSomething("a"), "something a");
    Test.assertEquals(giveMeSomething("is cooking"), "something is cooking");
    Test.assertEquals(giveMeSomething(" is cooking"), "something  is cooking");
  }
  console.groupEnd();

  console.groupCollapsed(
    "14. Correct the Mistakes - https://edabit.com/challenge/ks3vMrqdnW3CQ3F4i"
  );
  {
    function squared(b) {
      return b * b;
    }

    Test.assertEquals(squared(10), 100, "Expected 100");
    Test.assertEquals(squared(69), 4761, "Expected 4761");
    Test.assertEquals(squared(666), 443556, "Expected 443556");
    Test.assertEquals(squared(-21), 441, "Expected 441");
    Test.assertEquals(squared(21), 441, "Expected 441");
  }
  console.groupEnd();

  console.groupCollapsed(
    "15. Is the Number Less than or Equal to Zero? - https://edabit.com/challenge/PTiLYyb4A69KZtBCg"
  );
  {
    function lessThanOrEqualToZero(num) {
      return num <= 0 ? true : false;
    }

    Test.assertEquals(lessThanOrEqualToZero(5), false);
    Test.assertEquals(lessThanOrEqualToZero(0), true);
    Test.assertEquals(lessThanOrEqualToZero(-5), true);
  }
  console.groupEnd();
}
console.groupEnd();
