// Problem-1: Calculator Class
// Create a small calculator which performs operations such as Addition, Subtraction, Multiplication and Division using class
class Calculator {
  constructor(a, b, operation) {
    this.a = parseFloat(a);
    this.b = parseFloat(b);
    this.operation = operation.toLowerCase();
  }

  calculate() {
    switch (this.operation) {
      case 'add':
        return this.a + this.b;
      case 'subtract':
        return this.a - this.b;
      case 'multiply':
        return this.a * this.b;
      case 'divide':
        return this.b !== 0 ? this.a / this.b : "Error: Division by zero";
      default:
        return "Invalid operation";
    }
  }
}

// Test Problem-1
console.log("\nProblem-1 Test:");
const calc = new Calculator(10, 5, 'divide');
console.log("Calculator Result:", calc.calculate());

// Problem-2: Generate Series of First N Odd Numbers
// With a single integer as the input, generate the following until a = x
function printOddSeries(n) {
  let result = [];
  let num = 1;
  for (let i = 0; i < n; i++) {
    result.push(num);
    num += 2;
  }
  console.log(result.join(", "));
}

// Test Problem-2
console.log("\nProblem-2 Test:");
console.log("Input n = 4:");
printOddSeries(4);

// Problem-3: Generate Odd Numbers Up to N
// With a single integer as the input, generate odd numbers up to that number
function oddUpToN(n) {
  let result = [];
  for (let i = 1; i <= n; i += 2) {
    result.push(i);
  }
  console.log(result.join(", "));
}

// Test Problem-3
console.log("\nProblem-3 Test:");
console.log("Input n = 6:");
oddUpToN(6);

// Problem-4: Count Multiples
// Get the total count of numbers that are multiples of [1,2,3,4,5,6,7,8,9]
function countMultiples(arr) {
  let result = {};
  for (let i = 1; i <= 9; i++) {
    result[i] = arr.filter(num => num % i === 0).length;
  }
  return result;
}

// Test Problem-4
console.log("\nProblem-4 Test:");
const input = [1, 2, 8, 9, 12, 46, 76, 82, 15, 20, 30];
console.log("Input array:", input);
console.log("Count of multiples:", countMultiples(input)); 