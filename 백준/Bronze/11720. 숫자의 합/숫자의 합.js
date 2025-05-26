// 문제 풀이
function solution(input) {
  const sum = [...input[1]].map(Number).reduce((acc, cur) => acc + cur, 0);
  console.log(sum);
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
