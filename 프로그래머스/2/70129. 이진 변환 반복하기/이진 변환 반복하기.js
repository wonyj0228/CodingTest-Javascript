function solution(s) {
    let [cnt, zero] = [0,0];
    while (s !== '1') {
        const rmvZeroLen = [...s].filter(v => v === '1').join('').length; 
        zero += s.length - rmvZeroLen;
        s = rmvZeroLen.toString(2);
        cnt++;
    }
    return [cnt, zero];
}