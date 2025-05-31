// 문제 풀이
function solution(input) {
  const subCnt = parseInt(input[0]);
  const subArr = input[1].split(' ').map(Number);
  const maxScore = Math.max(...subArr);

  const newSum = subArr.reduce((acc, cur) => acc + (cur / maxScore) * 100, 0);
  console.log(newSum / subCnt);
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
