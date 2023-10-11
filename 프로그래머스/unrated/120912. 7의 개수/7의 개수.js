function solution(array) {
    return array.map(v => [...String(v)].filter(e => e === '7').length)
                .reduce((acc,cur) => acc += cur ,0);
}