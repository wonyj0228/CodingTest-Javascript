// 문제 풀이
function solution(input) {
  input.sort((a, b) => Number(a[0]) - Number(b[0]));
  input.forEach((arr) => console.log(arr.join(' ')));
}

/* readline Module */
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let input = [];
let list = [];

rl.on('line', function (line) {
  input.push(line);
}).on('close', function () {
  input.forEach((val) => {
    const splitArr = val.split(' ');
    if (splitArr.length > 1) {
      list.push(splitArr);
    }
  });
  solution(list);
  process.exit();
});
