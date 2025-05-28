// 문제 풀이
function solution(input) {
  input = input.map((v) => v % 42);
  const difNum = new Set(input);
  console.log(difNum.size);
}

/* readline Module */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];

rl.on('line', function (line) {
  input.push(parseInt(line));
}).on('close', function () {
  solution(input);
  process.exit();
});
