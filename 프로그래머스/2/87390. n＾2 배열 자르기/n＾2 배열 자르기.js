function solution(n, left, right) {
    let row = Math.floor(left/n);
    let col = left%n;
    
    const answer = []
    
    for (let i=left; i<=right; i++) {
        answer.push(Math.max(row,col) + 1);
        col++;
        if (col===n) {
            col = 0;
            row++;
        }
    }
    
    return answer;
}