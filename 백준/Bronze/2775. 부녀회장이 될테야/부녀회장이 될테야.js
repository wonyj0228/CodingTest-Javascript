// 문제 풀이
function solution(input) {
  const dp = Array.from({ length: 15 }, () => new Array(14).fill(1));

  for (let i = 0; i < 14; i++) {
    dp[0][i] = i + 1;
  }

  for (let i = 1; i < 15; i++) {
    for (let j = 0; j < 14; j++) {
      if (j === 0) {
        dp[i][j] = 1;
      } else {
        dp[i][j] = dp[i][j - 1] + dp[i - 1][j];
      }
    }
  }

  for (let i = 1; i < input.length; i += 2) {
    const a = input[i];
    const b = input[i + 1] - 1;
    console.log(dp[a][b]);
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
  input.push(parseInt(line));
}).on('close', function () {
  solution(input);
  process.exit();
});
