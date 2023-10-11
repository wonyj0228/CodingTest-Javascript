function solution(s) {
    const all = [...new Set([...s])]
    
    return all.filter(a => [...s].filter(v => v === a).length === 1)
        .sort().join('');
}