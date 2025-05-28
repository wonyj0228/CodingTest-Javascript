function solution(input) {
  const arr = [...input].map((v) => v.charCodeAt());
  const text = new Array(26)
    .fill(97)
    .map((v, i) => v + i)
    .map((v) => arr.findIndex((charCode) => charCode === v))
    .join(' ');
  console.log(text);
}

/* readline Module */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = line;
  rl.close();
}).on('close', function () {
  solution(input);
  process.exit();
});
