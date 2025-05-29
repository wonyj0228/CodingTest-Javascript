// 문제 풀이
function solution(input) {
  const N = parseInt(input[0]);
  const tArr = input[1].split(' ').map(Number);
  const [T, P] = input[2].split(' ').map(Number);

  const tSum = tArr.reduce((acc, cur) => acc + Math.ceil(cur / T), 0);
  console.log(tSum);
  console.log(Math.floor(N / P), N % P);
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
