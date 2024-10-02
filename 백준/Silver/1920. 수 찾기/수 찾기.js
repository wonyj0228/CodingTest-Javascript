/* readline Module */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 문제 풀이
function solution(input) {
  const N = Number(input[0]);
  const arrN = input[1].split(' ').map(Number).sort((a, b) => a - b);
  const arrM = input[3].split(' ').map(Number);

  const binarySearch = (target) => {
    let pl = 0;
    let pr = N - 1;

    while (pl <= pr) {
      const center = Math.floor((pl + pr) / 2);
      if (arrN[center] === target) {
        return 1;
      } else if (arrN[center] < target) {
        pl = center + 1;
      } else {
        pr = center - 1;
      }
    }
    return 0;
  };
  console.log(arrM.map((num) => binarySearch(num)).join('\n'));
}

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  solution(input);
  process.exit();
});
