// 문제 풀이
function solution([A, B, V]) {
  if (V - A <= 0) {
    console.log(1);
  } else {
    console.log(Math.ceil((V - A) / (A - B)) + 1);
  }
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
  list = input.split(' ').map((v) => Number(v));
  solution(list);
  process.exit();
});
