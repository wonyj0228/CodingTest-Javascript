function solution(my_string, m, c) {
    return [...my_string].reduce((acc,cur,i) => i % m === (c-1) ? acc += cur : acc ,'');
}