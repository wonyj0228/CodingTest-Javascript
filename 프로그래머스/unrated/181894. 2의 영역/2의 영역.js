function solution(arr) {
    if (arr.includes(2)) {
        const arrIdx = arr.map((v,i) => v === 2 ? i : -1).filter(v => v !== -1);
        return arr.slice(arrIdx[0],arrIdx[arrIdx.length-1]+1);
    } else {
        return [-1];
    }
}