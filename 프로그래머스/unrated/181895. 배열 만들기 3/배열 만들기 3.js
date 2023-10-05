function solution(arr, intervals) {
    return intervals.reduce((acc,[strIdx, endIdx]) => acc.concat(arr.slice(strIdx, endIdx+1)), []);
}