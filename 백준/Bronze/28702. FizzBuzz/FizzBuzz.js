let fs = require("fs");
let input = fs
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./exam.txt")
  .toString()
  .split("\n");

const numIdx = input.map(Number).findIndex((v) => !isNaN(v));
const answer = parseInt(input[numIdx]) + (3 - numIdx);

if (answer % 15 === 0) {
  console.log("FizzBuzz");
} else if (answer % 3 === 0) {
  console.log("Fizz");
} else if (answer % 5 === 0) {
  console.log("Buzz");
} else {
  console.log(answer);
}
