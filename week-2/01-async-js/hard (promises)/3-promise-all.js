/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("First Promise");
    }, t * 1000);
  });
}

function wait2(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Second Promise");
    }, t * 1000);
  });
}

function wait3(t) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Third Promise");
    }, t * 1000);
  });
}

function calculateTime(t1, t2, t3) {
  const statrTime = new Date().getTime();

  return Promise.all([wait1(t1), wait2(t2), wait3(t3)]).then((result) => {
    const endTime = new Date().getTime();

    let ans =  endTime - statrTime;
    return ans
  });
}


totalTime = calculateTime(1, 2, 3)
console.log(totalTime);

module.exports = calculateTime;
