function solution(number) {
    let cnt = 0;
    for(i=0; i<number.length; i++) {
        for(j=i+1; j<number.length; j++) {
            for(z=j+1; z<number.length; z++) {
                if (number[i]+number[j]+number[z] === 0) {
                    cnt++;
                }
            }
        }
    }
    
        return cnt;
}