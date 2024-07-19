/* readline Module */

// 문제 풀이
function solution(input) {
  const len = Number(input[0]);

  for (let i = 1; i <= len; i++) {
    const answer = input[i].split('');
    let cnt = 0;
    let sum = 0;
    answer.forEach((v) => {
      if (v === 'O') {
        cnt++;
        sum += cnt;
      } else {
        cnt = 0;
      }
    });
    console.log(sum);
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
