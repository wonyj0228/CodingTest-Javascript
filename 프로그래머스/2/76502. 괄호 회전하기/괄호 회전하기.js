function solution(s) {
    function check(str) {
        while (true) {
            if (str.includes('()')) {
                str = str.replace('()', '');
            } else if (str.includes('[]')) {
                str = str.replace('[]', '');
            } else if (str.includes('{}')) {
                str = str.replace('{}', '');
            } else {
                break
            }
        }
        return str === ''
    }
    
    let answer = 0;
    for (let i=0; i<s.length; i++) {
        const moveStr = s.slice(i) + s.slice(0,i);
        if (check(moveStr)) answer++;
    }
    
    return answer
}

