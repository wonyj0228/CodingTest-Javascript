function solution(array) {
    const max = array.reduce((prev, cur) => prev > cur ? prev : cur, 0) ;
    return  [max, array.indexOf(max)];
}