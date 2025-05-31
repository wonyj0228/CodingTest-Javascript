// 문제 풀이
function solution(input) {
  const lastIdx = input.findIndex((v) => v === '0');

  for (let i = 0; i < lastIdx; i++) {
    const numArr = [...input[i]];
    let check;

    if (numArr.length === 1) {
      check = true;
    }

    while (numArr.length >= 2) {
      const first = numArr.shift();
      const last = numArr.pop();

      if (first === last) {
        check = true;
      } else {
        check = false;
        break;
      }
    }

    console.log(check ? 'yes' : 'no');
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
