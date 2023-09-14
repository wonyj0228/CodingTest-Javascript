function solution(num, k) {
    num = [...num.toString()];
    k = k.toString();
    return num.includes(k) ? num.indexOf(k) + 1 : -1 ;
}