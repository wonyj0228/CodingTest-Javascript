function solution(my_string) {
    return Array(26).fill(0).map((_,i) => [...my_string].filter(x=> x.charCodeAt(0) === i+65).length)
    .concat(Array(26).fill(0).map((_,i) => [...my_string].filter(x=> x.charCodeAt(0) === i+97).length));
}