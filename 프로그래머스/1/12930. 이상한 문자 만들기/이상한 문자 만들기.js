function solution(s) {
    return s.split(' ')
        .map(v => [...v].map((chr,i) => 
                             i%2 === 0 ? chr.toUpperCase() : chr.toLowerCase())
                        .join(''))
        .join(' ');
}