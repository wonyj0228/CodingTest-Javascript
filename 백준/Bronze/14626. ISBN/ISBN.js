//입력값이 하나일 경우(문자)

const input = require("fs")
  .readFileSync(process.platform === "linux" ? "/dev/stdin" : "./exam.txt")
  .toString()
  .trim();

let sum = 0;
let mul = false;
for (let i = 0; i < 12; i++) {
  if (i % 2 === 0) {
    if (input[i] === "*") {
      mul = false;
    } else {
      sum += parseInt(input[i]);
    }
  } else {
    if (input[i] === "*") {
      mul = true;
    } else {
      sum += 3 * parseInt(input[i]);
    }
  }
}
sum += parseInt(input[12]);

if (mul) {
  for (let i = 0; i <= 9; i++) {
    if ((sum + 3 * i) % 10 === 0) {
      console.log(i);
      break;
    }
  }
} else {
  for (let i = 0; i <= 9; i++) {
    if ((sum + i) % 10 === 0) {
      console.log(i);
      break;
    }
  }
}
