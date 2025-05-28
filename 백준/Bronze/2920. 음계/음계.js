// 문제 풀이
function solution(input) {
  if (input[0] < input[1]) {
    const check = input.every((n, i) =>
      i !== 7 ? n + 1 === input[i + 1] : true
    );
    console.log(check ? 'ascending' : 'mixed');
  } else {
    const check = input.every((n, i) =>
      i !== 7 ? n - 1 === input[i + 1] : true
    );
    console.log(check ? 'descending' : 'mixed');
  }
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
