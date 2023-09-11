function solution(my_string) {
    const arr = [...my_string].map(i=> parseInt(i)).filter(i => i >= 0);
    arr.sort((a,b) => a-b);
    return arr
}