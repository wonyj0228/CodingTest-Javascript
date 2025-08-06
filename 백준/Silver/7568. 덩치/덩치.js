const fs = require("fs");
let input = fs.readFileSync("/dev/stdin").toString().trim().split("\n");

const iter = Number(input[0]);
let rank = Array(iter).fill(1);

for(let i = 1; i <= iter; i++){
  [weight, height] = input[i].split(" ").map((x) => Number(x));
  
  for(let j = 1; j <= iter; j++){
    if(i === j) {
      continue;
    }
    
    [compW, compH] = input[j].split(" ").map((x) => Number(x));
    
    if(weight < compW && height < compH) {
      rank[i - 1]++;
    }
  }
}

console.log(rank.join(" "));