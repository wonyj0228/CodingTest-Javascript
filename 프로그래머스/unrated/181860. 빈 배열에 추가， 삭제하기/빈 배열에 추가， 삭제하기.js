function solution(arr, flags) {
    const answer = [];
    flags.forEach((flag,i) => {
        if (flag) {
            for (j = 0; j < arr[i]*2; j++) {
                answer.push(arr[i]);
            }
        } else {
            for (j = 0; j < arr[i]; j++) {
                answer.pop();
            }
        }
    })
    return answer;
}