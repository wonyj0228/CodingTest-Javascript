function solution(order) {
    const arr = ["3","6","9"]
    return [...String(order)].filter(x => arr.includes(x)).length;
}