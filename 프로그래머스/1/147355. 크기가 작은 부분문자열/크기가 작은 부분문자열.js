function solution(t, p) {
    const arr = [];
    for(i=0; i<t.length-p.length+1; i++) {
        arr.push(t.slice(i,i+p.length));
    }
    return arr.filter(v => parseInt(v) <= p).length;
}