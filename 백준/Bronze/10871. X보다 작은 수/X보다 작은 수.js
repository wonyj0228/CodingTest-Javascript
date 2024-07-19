/* readline Module */

// 문제 풀이
function solution([[N, X], arr]) {
  // 답변 출력, list
  return arr.filter((v) => v < X).join(' ');
}

/* readline Module */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let list = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  input.forEach((val) => {
    list.push(val.split(' ').map((el) => parseInt(el)));
  });

  console.log(solution(list));
  process.exit();
});
