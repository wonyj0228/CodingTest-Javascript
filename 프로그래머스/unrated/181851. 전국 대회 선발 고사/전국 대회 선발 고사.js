function solution(rank, attendance) {
    const attendance_list = [...rank].filter((_,i) => attendance[i])
    .sort((a,b) => a-b)
    .slice(0,3)
    .map(v => rank.indexOf(v));
    
    const [a,b,c] = attendance_list;
    
    return 10000*a + 100*b + c
}