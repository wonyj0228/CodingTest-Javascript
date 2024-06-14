function solution(elements) {
    const answer = [...elements];
    const lastIdx = elements.length-1;
    
    for (let i=2; i<= elements.length; i++) {
        
        for (let j=0; j <= lastIdx; j++) {
            let sum = 0;
            for (let z=0; z<i; z++) {
                const idx = j+z > lastIdx ? j+z-elements.length : j+z
                sum += elements[idx];
                
            }
            answer.push(sum);
            sum = 0;
        }
        
    }
    return [...new Set(answer)].length;
}