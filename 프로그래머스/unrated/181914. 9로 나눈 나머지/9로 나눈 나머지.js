function solution(number) {
    return [...number].reduce((acc,cur) => acc = acc + Number(cur), 0)%9
}