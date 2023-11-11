function solution(s) {
    const idx = Math.floor(s.length/2);

    return s.length % 2 === 0 ? s.slice(idx-1, idx+1) : s.slice(idx, idx+1);
}