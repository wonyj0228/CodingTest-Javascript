function solution(my_string, queries) {
    return queries.reduce((acc, cur) => {
        let txt = acc.substring(cur[0], cur[1]+1);
        txt = [...txt].reverse().join('');
        
        const arr = [...acc];
        arr.splice(cur[0], txt.length, txt);
        
        return arr.join('')
    }, my_string)
}