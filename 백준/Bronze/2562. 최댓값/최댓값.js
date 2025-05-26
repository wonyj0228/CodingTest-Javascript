// 문제 풀이
function solution(input) {
  let maxNum = parseInt(input[0]);
  let maxIdx = 0;

  for (let i = 1; i < input.length; i++) {
    if (parseInt(input[i]) > maxNum) {
      maxNum = parseInt(input[i]);
      maxIdx = i;
    }
  }

  console.log(maxNum);
  console.log(maxIdx + 1);
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
