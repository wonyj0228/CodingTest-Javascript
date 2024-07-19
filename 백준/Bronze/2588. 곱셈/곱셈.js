// 문제 풀이
function solution(input) {
  const a = input[0];
  const b = [...String(input[1])];

  for (let i = b.length - 1; i >= 0; i--) {
    const mul = Number(b[i]) * a;
    console.log(mul);
  }
  console.log(input[0] * input[1]);
}

/* readline Module */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let list = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  input.forEach((val) => {
    list.push(val.split(' ').map((el) => parseInt(el)));
  });

  solution(list);
  process.exit();
});
