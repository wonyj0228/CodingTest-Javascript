// 문제 풀이
function solution(input) {
  const cnt = input.shift();

  for (let i = 0; i < parseInt(cnt); i++) {
    const [H, W, N] = input[i].split(' ').map(Number);

    const floor = N % H || H;
    let room = String(Math.ceil(N / H)).padStart(W.toString().length, '0');

    if (W < 10) {
      room = '0' + room;
    }

    console.log(floor + room);
  }
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
