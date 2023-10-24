function solution(lines) {
    lines = lines.map(([start,end]) => {
        const arr = [];
        for(i=start; i<end; i++) {
            arr.push(i+0.5);
        };
        return arr
    })
    
    const [lineA, lineB, lineC] = lines;
    
    const a = lineA.filter(v => lineB.includes(v));
    const b = lineA.filter(v => lineC.includes(v));
    const c = lineB.filter(v => lineC.includes(v));
    
    const answer = [...new Set([...a, ...b, ...c])]
    
    return answer.length
}