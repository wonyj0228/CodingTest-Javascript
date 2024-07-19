// 문제 풀이
function solution(input) {
  for (let i = 1; i <= Number(input[0]); i++) {
    const arr = input[i].split(' ').slice(1);
    const len = arr.length;
    const avg = arr.reduce((acc, cur) => acc + Number(cur), 0) / len;

    console.log(
      ((arr.filter((v) => Number(v) > avg).length / len) * 100).toFixed(3) + '%'
    );
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
  solution(input);
  process.exit();
});
