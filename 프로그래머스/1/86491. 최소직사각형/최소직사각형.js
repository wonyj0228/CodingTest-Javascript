function solution(sizes) {
    const max = sizes.map(v => Math.max(...v));
    const min = sizes.map(v => Math.min(...v));
    return Math.max(...max) * Math.max(...min);
}