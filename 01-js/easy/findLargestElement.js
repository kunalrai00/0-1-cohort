/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let largestNumber = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (largestNumber < numbers[i]) {
      largestNumber = numbers[i];
    } else {
      largestNumber = largestNumber;
    }
  }
  return largestNumber;
}

const ans = findLargestElement([-3.5, -7.2, -2.1, -9.8, -1.9]);
console.log(ans);

module.exports = findLargestElement;
