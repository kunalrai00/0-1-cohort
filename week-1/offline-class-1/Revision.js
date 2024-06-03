// Loops revison
// let ans = 0;
// for (let i=1; i<=100; i++){
//      ans += i
    
// }

// console.log(ans)

// functions Revison/ Calbacks

// function squar(a){
//     return a * a
// }

// function sumOfSomething(a,b, fn){
//     const val1 = fn(a)
//     const val2 = fn(b)
//     return val1 + val2
// }

// console.log(sumOfSomething(5,8, squar))


// const fs = require("fs");

// fs.readFile("offline-class-1\a.txt", "utf-8", function(err, data){
//   console.log(data);
// })

const fs = require("fs");

fs.readFile("a.txt", "utf-8", function(err,data){
  return data
});