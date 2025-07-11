// 문제 풀이
function solution(input) {
  input = [...new Set(input)].filter((str) => str.match(/^[a-z]*$/));
  input.sort((a, b) => {
    const len = a.length - b.length;
    if (len === 0) {
      return a.localeCompare(b);
    } else {
      return len;
    }
  });
  input.forEach((str) => console.log(str));
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
    list.push(val);
  });
  solution(list);
  process.exit();
});
