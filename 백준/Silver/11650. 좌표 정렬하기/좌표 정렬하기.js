const input = require('fs')
  .readFileSync(process.platform === 'linux' ? '/dev/stdin' : './input.txt')
  .toString()
  .trim()
  .split(/\r?\n/);
const len = Number(input.shift());

input.sort((a, b) => {
  const [ax, ay] = a.split(' ').map(Number);
  const [bx, by] = b.split(' ').map(Number);

  if (ax > bx) {
    return 1;
  } else if (ax === bx) {
    return ay > by ? 1 : -1;
  } else {
    return -1;
  }
});

console.log(input.join('\n'));
