// 문제 풀이
function solution(input) {
  const [a, b] = input;
  console.log(a - b);
}

/* readline Module */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let list = [];

rl.on('line', function (line) {
  input = line;
  rl.close();
}).on('close', function () {
  list = input.split(' ').map((v) => parseInt(v));
  solution(list);
  process.exit();
});
