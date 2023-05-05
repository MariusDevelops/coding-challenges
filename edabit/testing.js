// const Test = {
//   assertEquals: function (actual, expected, message) {
//     if (actual !== expected) {
//       console.error(message || `Expected: ${expected} but got: ${actual}`);
//     } else {
//       console.log(
//         `Your answer is correct. Expected: ${expected} ➞ your answer: ${actual} `
//       );
//     }
//   },
// };

const Test = {
  assertEquals: function (actual, expected, message) {
    if (!_.isEqual(actual, expected)) {
      console.error(message || `Expected: ${expected} but got: ${actual}`);
    } else {
      console.log(
        `Your answer is correct. Expected: ${expected} ➞ your answer: ${actual} `
      );
    }
  },
};
