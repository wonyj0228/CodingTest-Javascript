function solution(want, number, discount) {
    let answer = 0;
    
    for (let i=0; i <= discount.length-10; i++) {
        const cntArr = [...number];
        
        for (let j=0; j<10; j++) {
            const idx = want.findIndex(v => v === discount[i+j]);
            if (idx !== -1) {
                cntArr[idx] = cntArr[idx] - 1;
            }
        }
        
        if (cntArr.every(v => v <= 0)) answer++;
    }
    
    return answer;
}