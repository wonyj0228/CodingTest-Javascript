function solution(strArr) {
    strArr = strArr.map(v => v.length);
    const cntNum = Array(30).fill(0).map((_,i) => strArr.filter(v => v === i+1).length);
    return Math.max(...cntNum);
}