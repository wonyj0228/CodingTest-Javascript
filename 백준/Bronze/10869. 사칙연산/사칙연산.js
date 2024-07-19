// 문제 풀이
function solution(input) {
  const a = input[0];
  const b = input[1];
  console.log(a + b);
  console.log(a - b);
  console.log(a * b);
  console.log(Math.floor(a / b));
  console.log(a % b);
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
  list = input.split(' ').map((el) => Number(el));
  solution(list); 
  process.exit(); 
});
