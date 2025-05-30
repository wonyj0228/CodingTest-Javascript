// 문제 풀이
function solution(input) {
  const inputArr = [...input[1]].map((str) => str.charCodeAt(0) - 96);

  let sum = 0;
  for (let i = 0; i < inputArr.length; i++) {
    sum += inputArr[i] * 31 ** i;
  }
  console.log(sum % 1234567891);
}

/* readline Module */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
