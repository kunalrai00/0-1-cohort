/*
  Implement a class `Calculator` having below methods
    - initialise a result variable in the constructor and keep updating it after every arithmetic operation
    - add: takes a number and adds it to the result
    - subtract: takes a number and subtracts it from the result
    - multiply: takes a number and multiply it to the result
    - divide: takes a number and divide it to the result
    - clear: makes the `result` variable to 0
    - getResult: returns the value of `result` variable
    - calculate: takes a string expression which can take multi-arithmetic operations and give its result
      example input: `10 +   2 *    (   6 - (4 + 1) / 2) + 7`
      Points to Note: 
        1. the input can have multiple continuous spaces, you're supposed to avoid them and parse the expression correctly
        2. the input can have invalid non-numerical characters like `5 + abc`, you're supposed to throw error for such inputs

  Once you've implemented the logic, test your code by running
*/

class Calculator {
  constructor() {
      this.result = 0;
  }

  add(num) {
      this.result += num;
  }

  subtract(num) {
      this.result -= num;
  }

  multiply(num) {
      this.result *= num;
  }

  divide(num) {
      if (num === 0) {
          throw new Error("Cannot divide by zero");
      }
      this.result /= num;
  }

  clear() {
      this.result = 0;
  }

  getResult() {
      return this.result;
  }

  calculate(expression) {
      // Remove continuous spaces
      expression = expression.replace(/\s+/g, '');

      // Check for invalid characters
      if (!/^[0-9+\-*/().]+$/.test(expression)) {
          throw new Error("Invalid characters in expression");
      }

      // Define recursive function to solve expression with brackets
      const solveBrackets = (exp) => {
          let bracketsPattern = /\(([^()]+)\)/;
          while (bracketsPattern.test(exp)) {
              exp = exp.replace(bracketsPattern, (match, innerExp) => {
                  return solveBrackets(innerExp);
              });
          }
          return solveExpression(exp);
      };

      // Define function to solve expression without brackets
      const solveExpression = (exp) => {
          let operators = exp.match(/[+\-*/]/g);
          let numbers = exp.split(/[+\-*/]/).map(Number);

          // Perform multiplication and division first
          for (let i = 0; i < operators.length; i++) {
              if (operators[i] === '*' || operators[i] === '/') {
                  let result;
                  if (operators[i] === '*') {
                      result = numbers[i] * numbers[i + 1];
                  } else {
                      result = numbers[i] / numbers[i + 1];
                  }
                  numbers.splice(i, 2, result);
                  operators.splice(i, 1);
                  i--;
              }
          }

          // Perform addition and subtraction
          let result = numbers[0];
          for (let i = 0; i < operators.length; i++) {
              if (operators[i] === '+') {
                  result += numbers[i + 1];
              } else {
                  result -= numbers[i + 1];
              }
          }

          return result;
      };

      // Call recursive function to solve the entire expression
      try {
          this.result = solveBrackets(expression);
      } catch (error) {
          throw new Error("Invalid expression: " + error.message);
      }
  }
}

// Example usage:
const calc = new Calculator();
calc.calculate("10 + 2 * (6 - (4 + 1) / 2) + 7");
console.log("Result:", calc.getResult());  // Output: Result: 21



module.exports = Calculator;
