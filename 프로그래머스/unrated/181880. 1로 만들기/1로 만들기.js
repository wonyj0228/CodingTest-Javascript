function solution(num_list) {
    return num_list.reduce((acc,cur) => acc += count(cur),0);
}

function count(num) {
    let cnt = 0;
    while (num !== 1) {
        num = num % 2 === 0 ? num / 2 : (num-1)/2;
        cnt++;
    }
    return cnt;
}