const mul = num => {
    let cnt = BigInt(1);
    for (i=1; i <= num; i++){
        cnt *= BigInt(i);
    }
    return cnt;
};

function solution(balls, share) {
    return mul(balls)/(mul(balls-share)*mul(share))
}
