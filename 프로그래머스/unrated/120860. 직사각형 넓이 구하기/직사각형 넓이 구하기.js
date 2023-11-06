function solution(dots) {
    const row = [...new Set(dots.map(([x,y]) => x))];
    const col = [...new Set(dots.map(([x,y]) => y))];
    
    return (Math.max(...row) - Math.min(...row)) * (Math.max(...col) - Math.min(...col));
}