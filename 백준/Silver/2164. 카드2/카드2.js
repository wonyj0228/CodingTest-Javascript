function solution(input) {
  let arr = Array.from({ length: input }, (_, idx) => idx + 1);

  while (arr.length > 1) {
    let flag = arr.length % 2 === 0;
    let tmp;

    if (!flag) {
      tmp = arr[arr.length - 1];
    }
    arr = arr.filter((_, idx) => idx % 2 === 1);
    if (tmp) arr.unshift(tmp);
  }
  console.log(arr[0]);
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
