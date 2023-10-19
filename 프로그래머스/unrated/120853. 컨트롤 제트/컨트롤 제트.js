function solution(s) {
    const arr = s.split(' ');
    return arr.reduce((acc,cur,i) => cur === 'Z' ? acc - Number(arr[i-1]) : acc+Number(cur), 0)
}