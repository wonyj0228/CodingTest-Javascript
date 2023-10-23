function solution(sides) {
    const max = Math.max(...sides);
    const min = Math.min(...sides);
    
    const p1 = max - (max-min);
    const p2 = min-1;

    return p1 + p2;
}