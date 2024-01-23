function solution(s) {
    return s.split(' ')
            .map(str => [...str].map((v,i) => i === 0 ? v.toUpperCase() : v.toLowerCase() ).join(''))
            .join(' ')
}