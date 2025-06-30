// 문제 풀이
function solution(input) {
  const posWord = ['a', 'e', 'i', 'o', 'u'];

  function sliceWord(string) {
    let word;
    for (let i = 0; i < string.length; i++) {
      if (posWord.includes(string[i])) {
        if (i < string.length - 1 && !posWord.includes(string[i + 1])) {
          word = string.slice(0, i + 1);
          break;
        }
      }
    }
    return word;
  }
  const a = sliceWord(input[0]);
  const b = sliceWord(input[1]);

  if (a && b) {
    console.log(a + b);
  } else {
    console.log('no such exercise');
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
