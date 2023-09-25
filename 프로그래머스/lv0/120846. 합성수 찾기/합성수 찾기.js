function solution(n) {
    var answer = 0;
    for (j = 1; j <= n; j++) {
        let cnt = 0;
        for (i = 1; i <= j; i++) {
            if (j % i === 0) cnt++;
        }
        if (cnt >= 3) answer++;
    }
    return answer;
}