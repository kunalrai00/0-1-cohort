/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(string){
  const vowels = ['a','e', 'i', 'o', 'u']
  let modifiedString = string.toLowerCase().replace(/\s/g, "");
  let totalVowels = 0;

  for (let i=0;i<modifiedString.length;i++){
      let char = modifiedString[i];
      if (vowels.includes(char)){
        totalVowels += 1;
      }else{
        totalVowels = totalVowels
      }
  }
  return totalVowels
}

let ans = countVowels("programming")
console.log(ans)
module.exports = countVowels;
