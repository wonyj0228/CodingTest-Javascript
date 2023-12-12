function solution(s) {
    let tmpWord = '';
    let sameWord = 0;
    let difWord = 0;
    let answer = 0;
    
    [...s].forEach(v => {
        if (!sameWord && !difWord) {
            tmpWord = v;
            sameWord++;
        } else if (v !== tmpWord) {
            difWord++;
        } else if (v === tmpWord) {
            sameWord++;
        }
        
        if (sameWord === difWord) {
            answer++;
            tmpWord ='';
            sameWord = 0;
            difWord = 0;
        }
    })
    
    if (tmpWord !== '') answer++;
    return answer;
}