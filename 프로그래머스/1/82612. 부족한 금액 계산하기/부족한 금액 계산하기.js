function solution(price, money, count) {
    let cnt = 1;
    while (count >= cnt) {
        money -= price*cnt;
        cnt++;
    }
    return money >= 0 ? 0 : -1 * money;
}