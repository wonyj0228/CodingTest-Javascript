function solution(arr1, arr2) {
    const answer = [];
    
    for (let i=0; i<arr1.length; i++ ) {
        const tmpArr = [];
        for (let j=0; j<arr2[0].length; j++) {
            tmpArr.push(
                arr2.reduce((acc,cur,idx) => {
                   return acc +  arr1[i][idx] * cur[j]
                },0)
            )
        }
        answer.push(tmpArr);
    }
    
    return answer;
}

// [1,2,3]  [1,4]
// [4,5,6]  [2,5]
//          [3,6]   