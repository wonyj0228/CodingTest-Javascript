function solution(A, B) {
    const moveIdx = [...A].map((_,i) => B === A.substr(i) + A.substr(0,i) ? i : '')
                    .filter(v => v !== '')
                    .sort((a,b) => b-a);
    if (moveIdx.length > 0) {
        return moveIdx[0] !== 0 ? A.length - moveIdx[0] : 0
    } else {
        return -1
    }
}