function solution(order) {
    const latte = order.filter(v => v.includes("latte")).length;
    const ame = order.length - latte;
    return 4500*ame + 5000*latte;
}