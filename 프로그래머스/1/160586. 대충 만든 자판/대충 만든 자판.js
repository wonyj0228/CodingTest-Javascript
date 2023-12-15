function solution(keymap, targets) {
    return targets.map(str => {
        let cnt = 0;
        for(let i=0; i<str.length; i++) {
            const idxArr = keymap.map(key => key.indexOf(str[i])).filter(v=> v !== -1);
            if (idxArr.length > 0) {
                cnt += Math.min(...idxArr) + 1;
            } else {
                cnt = -1;
                break;
            }
        }    
        return cnt
    })
}