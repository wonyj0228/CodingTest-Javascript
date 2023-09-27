function solution(num_list, n) {
    return num_list.reduce((arr,cur,idx) => { 
        if (idx%n === 0 ) arr.push(cur);
        return arr
    }
    , []);
}