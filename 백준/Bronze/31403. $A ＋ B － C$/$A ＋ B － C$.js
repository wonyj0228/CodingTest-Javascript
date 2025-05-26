// 문제 풀이
function solution(input) {
  const [a, b, c] = input;
  // 수로 생각했을 때 A + B - C
  console.log(parseInt(a) + parseInt(b) - parseInt(c));
  // 문자열로 생각했을 때 A + B - C
  console.log(parseInt(a + b) - parseInt(c));
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
