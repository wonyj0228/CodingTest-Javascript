function solution(arr) {
    var answer = 0;
    while (true) {
        let checkArr = arr.filter(v => v >= 50 ? v % 2 === 0 : v % 2 !==0);
        if (checkArr.length > 0) {
            arr = arr.map(v => { 
              if (v >= 50 && v % 2 ===0) {
                  return v / 2
              } else if ( v < 50 && v % 2 !== 0) {
                  return v * 2 + 1
              } else {
                  return v
              }
              })
            answer++;
        } else {
            break;
        }
    }
    return answer;
}
