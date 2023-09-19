function solution(a, b) {
    const ab = Number(String(a) + b);
    const ba = Number(String(b) + a);
    if (ab > ba) {
        return ab;
    } else if (ab < ba) {
        return ba;
    } else {
        return ab;
    }

}