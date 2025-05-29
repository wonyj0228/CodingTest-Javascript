// 문제 풀이
function solution(input) {
  const lastIdx = input.findIndex((v) => v === '0 0 0');
  input = input.slice(0, lastIdx);

  for (let i = 0; i < input.length; i++) {
    const [a, b, c] = input[i]
      .split(' ')
      .sort((a, b) => a - b)
      .map(Number);

    if (a * a + b * b === c * c) {
      console.log('right');
    } else {
      console.log('wrong');
    }
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
