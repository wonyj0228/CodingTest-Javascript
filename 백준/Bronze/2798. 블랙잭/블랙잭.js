// 문제 풀이
function solution(input) {
  const [N, M] = input[0].split(' ').map(Number);
  const cardArr = input[1]
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);

  let maxNum = 0;

  for (let i = 0; i < N - 2; i++) {
    const a = cardArr[i];
    for (let j = i + 1; j < N - 1; j++) {
      const b = cardArr[j];
      for (let z = j + 1; z < N; z++) {
        const c = cardArr[z];
        const sum = a + b + c;
        if (sum <= M && sum > maxNum) {
          maxNum = sum;
        }
      }
    }
  }
  console.log(maxNum);
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
