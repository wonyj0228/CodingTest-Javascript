function solution(myString) {
    return [...myString].map(x => x === "a" ? "A" : x === "A" ? "A" : x.toLowerCase()).join('');
}