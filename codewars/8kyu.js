console.groupCollapsed("8kyu");
{
  console.groupCollapsed(
    "1. Function 1 - hello world - https://www.codewars.com/kata/523b4ff7adca849afe000035"
  );
  {
    // Write a function "greet" that returns "hello world!"
    const lu = "hell";
    function greet(ci, fe) {
      ci = "o";
      fe = " ";
      const rr = "world!";
      let msgFromHell = lu + ci + fe + rr;
      return msgFromHell;
    }
    // Scary message from Hell! Wahaahaah!!!!
    console.log(greet());
  }
  console.groupEnd();

  console.groupCollapsed(
    "2. Multiply - https://www.codewars.com/kata/50654ddff44f800200000004"
  );
  {
    // This code does not execute properly. Try to figure out why.
    function multiply(a, b) {
      return a * b;
    }
    console.log(multiply(5, 2), 10);
    console.log(multiply(11, 3), 33);
    console.log(multiply(2, 4.5), 9);
  }
  console.groupEnd();
}
console.groupEnd();
