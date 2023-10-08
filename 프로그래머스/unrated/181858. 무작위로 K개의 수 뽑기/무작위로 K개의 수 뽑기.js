function solution(arr, k) {
    arr = [...new Set([...arr])];
    const idx = arr.length;
    arr.length = k;
    arr.fill(-1,idx);
    return arr;
}