// 문제 풀이
function solution(cnt, arrCase) {
  for (let i = 0; i < cnt; i++) {
    const [a, b] = arrCase[i].split(' ').map(Number);
    console.log(a + b);
  }
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
  const cnt = parseInt(input.shift());
  solution(cnt, input);
  process.exit();
});
