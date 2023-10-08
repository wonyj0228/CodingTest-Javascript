function solution(str_list) {
    const idx_l = str_list.indexOf('l');
    const idx_r = str_list.indexOf('r');
    
    if (idx_l === -1 && idx_r === -1) {
        return []
    } else {
        if (idx_l === -1) {
            return str_list.slice(idx_r+1);
        } else if (idx_r === -1) {
            return str_list.slice(0,idx_l);
        } else {
            return idx_l < idx_r ? str_list.slice(0,idx_l) : str_list.slice(idx_r+1);
        }
    }
}