function solution(input) {
  let i = 0;
  let num = 2;

  while (true) {
    num += i * 6;
    if (input < num) {
      console.log(i + 1);
      break;
    } else {
      i++;
    }
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
