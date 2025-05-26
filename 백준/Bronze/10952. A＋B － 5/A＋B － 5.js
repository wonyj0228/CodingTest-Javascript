// 문제 풀이
function solution(arrCase) {
  for (let i = 0; i < arrCase.length; i++) {
    const [a, b] = arrCase[i].split(' ').map(Number);
    const sum = a + b;
    if (sum === 0) {
      break;
    } else {
      console.log(a + b);
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
