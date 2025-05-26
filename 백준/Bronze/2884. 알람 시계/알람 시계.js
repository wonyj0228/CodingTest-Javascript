// 문제 풀이
function solution(input) {
  let [hour, min] = input;

  min -= 45;
  if (min < 0) {
    hour--;
    min += 60;
  }

  if (hour < 0) {
    hour = 23;
  }
  console.log(hour + ' ' + min);
}

/* readline Module */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;
let list = [];

rl.on('line', function (line) {
  input = line;
  rl.close();
}).on('close', function () {
  list = input.split(' ').map((v) => parseInt(v));
  solution(list);
  process.exit();
});
