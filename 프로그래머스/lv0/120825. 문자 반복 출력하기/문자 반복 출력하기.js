function solution(my_string, n) {
    let answer = '';
    const arr = my_string.split("");
    
    arr.forEach((str) => {
        for(i=1; i<=n; i++) {
            answer = answer + str;
        }
    })
    
    return answer;
}
