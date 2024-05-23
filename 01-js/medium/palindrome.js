/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  // Remove spaces and punctuation marks and convert the string to lowercase
  str = str.replace(/[^a-zA-Z]/g, "").toLowerCase();

  // Initialize pointers for the start and end of the string
  let start = 0;
  let end = str.length - 1;

  // Iterate until the pointers meet or cross
  while (start < end) {
    // Compare characters at the pointers
    if (str[start] !== str[end]) {
      return false; // If characters don't match, it's not a palindrome
    }
    // Move pointers towards the center
    start++;
    end--;
  }

  // If the loop completes without returning false, it's a palindrome
  return true;
}

console.log(isPalindrome("Eva, can I see bees in a cave?")); // Output: true


module.exports = isPalindrome;
