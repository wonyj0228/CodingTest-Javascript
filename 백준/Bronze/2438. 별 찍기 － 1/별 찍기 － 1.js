function solution(input) {
  for (let i = 1; i <= input; i++) {
    console.log('*'.repeat(i));
  }
}

/* readline Module */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input;

rl.on('line', function (line) {
  input = parseInt(line);
  rl.close();
}).on('close', function () {
  solution(input);
  process.exit();
});
