/* readline Module */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// 문제 풀이

function solution(N, arrN, M, arrM) {
  arrN.sort((a, b) => a - b);

  function binarySearch(target) {
    let pl = 0;
    let pr = N - 1;
    while (pl <= pr) {
      const mid = Math.floor((pl + pr) / 2);

      if (arrN[mid] === target) {
        return 1;
      } else if (arrN[mid] < target) {
        pl = mid + 1;
      } else {
        pr = mid - 1;
      }
    }
    return 0;
  }

  const ans = arrM.map((num) => binarySearch(num));
  console.log(ans.join(' '));
}

let input = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  const makeNumArr = (str) => {
    return str.split(' ').map(Number);
  };
  solution(
    Number(input[0]),
    makeNumArr(input[1]),
    Number(input[2]),
    makeNumArr(input[3])
  );
  process.exit();
});
