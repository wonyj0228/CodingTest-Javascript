function solution(food) {
    let answer = '';
    for (i=1; i<food.length; i++) {
        const amt = parseInt(food[i]/2);
        if (amt) {
           answer += String(i).repeat(amt); 
        }
    }

    return answer + '0' + [...answer].reverse().join('');
}