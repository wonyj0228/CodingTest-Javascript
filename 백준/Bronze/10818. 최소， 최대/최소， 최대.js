// 문제 풀이
function solution(input) {
  const N = parseInt(input[0]);
  const arr = input[1].split(' ').map(Number);

  arr.sort((a, b) => a - b);
  console.log(arr[0] + ' ' + arr[N - 1]);
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
