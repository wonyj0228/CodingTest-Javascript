function solution(n) {
    let slice = 1
    while (true) {
      if((n*slice)%6 === 0) {
          break;
      } else {
          slice ++;
      }      
    }
    return n*slice/6;
}