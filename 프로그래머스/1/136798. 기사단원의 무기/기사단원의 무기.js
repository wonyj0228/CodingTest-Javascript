function solution(number, limit, power) {
    const arr = new Array(number).fill(1).map((v,i) => v+i);

    return arr.reduce((acc,cur) => {
        const num = [];
        for (i = 1; i <= Math.sqrt(cur); i++) {
            if (cur % i === 0) {
                num.push(i);
                if (i !== cur/i) num.push(cur/i);
            }
        }

        if (num.length > limit) {
            acc += power;
        } else {
            acc += num.length
        }
        return acc
    }, 0);
}