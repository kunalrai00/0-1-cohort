/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  // Your code here
  let totalVowels = 0;
  const vowels = ["A", "E", "I", "O", "U"];
  let modifiedStr = str.toUpperCase().split("");
  for (let i = 0; i < modifiedStr.length; i++) {
    if (vowels.includes(modifiedStr[i])) {
      totalVowels += 1;
    } else {
      totalVowels = totalVowels;
    }
  }
  return totalVowels;
}

module.exports = countVowels;
