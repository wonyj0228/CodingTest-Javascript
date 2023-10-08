function solution(common) {
    const check = common.every((v,i) => {
        if (i !== 0 && i !== common.length-1) {
            if (v - common[i-1] !== common[i+1] - v) return false;
        }
        return true;
    })
    return check ? 
    common[0] + common.length * (common[1] - common[0]) 
    : common[common.length-1] * (common[1] / common[0]);
}