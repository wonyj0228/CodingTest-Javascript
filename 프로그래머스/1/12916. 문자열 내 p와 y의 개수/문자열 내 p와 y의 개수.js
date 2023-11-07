function solution(s){
    s = [...s.toUpperCase()];
    const p = s.filter(v => v==='P');
    const y = s.filter(v => v==='Y');
    
    return p.length === y.length;
}