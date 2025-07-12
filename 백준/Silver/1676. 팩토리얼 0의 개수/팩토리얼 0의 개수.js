function solution(input) {
  let num = BigInt(1);
  for (let i = 2; i <= input; i++) {
    num *= BigInt(i);
  }
  const arr = [...String(num)].reverse();
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== '0') {
      console.log(i);
      break;
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
