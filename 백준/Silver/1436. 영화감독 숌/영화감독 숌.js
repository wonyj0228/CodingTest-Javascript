function solution(input) {
  let n = 1;
  let num = 666;

  while (n !== input) {
    num++;
    if (String(num).includes('666')) n++;
  }
  console.log(num);
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
