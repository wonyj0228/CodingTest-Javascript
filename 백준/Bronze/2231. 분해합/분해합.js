function solution(input) {
  let check = false;
  for (let i = 1; i <= input; i++) {
    const num = [...i.toString()]
      .map(Number)
      .reduce((acc, cur) => acc + cur, i);
    if (num === input) {
      console.log(i);
      check = true;
      break;
    }
  }
  if (!check) {
    console.log(0);
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
