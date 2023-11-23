function solution(s) {
    const num = {
        zero : 0, one : 1, two : 2, three : 3, four : 4, five : 5,
        six : 6, seven : 7, eight : 8, nine : 9
    }
    
    for (i=0; i<s.length; i++) {
        if (isNaN(s[i])) {
            for(j=3; j<=5; j++) {
                const tmpStrNum = s.slice(i, i+j);
                if (num[tmpStrNum] || num[tmpStrNum] === 0) {
                    s = s.replace(tmpStrNum, num[tmpStrNum]);
                    break;
                }
            }
        }
    }
        
    return parseInt(s)
}