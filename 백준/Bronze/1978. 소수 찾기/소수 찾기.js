// 문제 풀이
function solution(n, list) {
  const prime = [2, 3];
  let maxNum = 3;
  let answer = 0;
  for (let i = 0; i < n; i++) {
    const num = list[i];
    if (num === 1) continue;
    if (num === 2) {
      answer++;
      continue;
    }
    if (num % 2 === 0) continue;
    if (num <= maxNum) {
      if (prime.includes(num)) answer++;
    } else {
      for (let j = maxNum + 2; j <= num; j += 2) {
        let flag = true;
        for (const v of prime) {
          if (j % v === 0) {
            flag = false;
            break;
          }
        }
        if (flag) {
          prime.push(j);
          if (j === num) answer++;
        }
      }
      maxNum = num;
    }
  }
  console.log(answer);
}

/* readline Module */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let n;
let list;

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  n = Number(input[0]);
  list = input[1].split(' ').map((v) => Number(v));
  solution(n, list);
  process.exit();
});
