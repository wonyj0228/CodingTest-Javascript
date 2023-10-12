function solution(quiz) {
    return quiz.map(v => v.split(' '))
        .map(arr => {
            const X = BigInt(arr[0]);
            const Y = BigInt(arr[2]);
            const Z = BigInt(arr[4]);
            return arr[1] === "+" ? X+Y === Z : X-Y === Z})
        .map(boolean => boolean ? "O" : "X")
}