function solution(N) {
    // 1. 소수를 판별하고 싶은 범위의 모든 자연수를 나열한다.
    const arr = new Array(N+1).fill(0).map((_,i) => i); // [0,1,2,3,...,N]

    // 2. 가장 작은 수부터 시작해 자기 자신을 뺀 해당 수의 배수를 모두 지운다.
    for (let i = 2; i <= N; i++) {
        // 3. 만약 수가 이미 지워졌다면 건너 뛴다.
        if ( arr[i] !== 0 ) {
            for (let j = i+i; j <= N; j+=i) {
                arr[j] = 0;
            }
        }
    }

    // 4. 남아 있는 수를 모두 출력한다.
    return arr.filter(v => v !== 0).length - 1	// 1은 소수가 아님으로 1개 빼줌
}