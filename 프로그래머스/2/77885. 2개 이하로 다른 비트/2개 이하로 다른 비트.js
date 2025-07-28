function solution(numbers) {
  return numbers
    .map((x) => {
      x = BigInt(x);

      if (x % 2n === 0n) return x + 1n;

      let bit = 1n;
      while ((x & bit) !== 0n) bit <<= 1n;
      return x + bit - (bit >> 1n); 
    })
    .map(Number); 
}