function solution(citations) {
    for (let i=citations.length; i>=0; i--) {
        if (citations.filter(v => v >= i).length >= i) {
            return i
        }
    }
    return 0
}