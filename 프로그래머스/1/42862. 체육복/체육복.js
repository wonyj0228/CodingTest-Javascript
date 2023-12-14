function solution(n, lost, reserve) {
    reserve.filter(v => lost.includes(v)).forEach(v => {
        lost.splice(lost.indexOf(v),1);
        reserve.splice(reserve.indexOf(v),1);
    })
    lost.sort((a,b) => a-b);
    
    return n - lost.map((lostNum) => {
                const prevIdx = reserve.indexOf(lostNum-1);
                const nextIdx = reserve.indexOf(lostNum+1);
                if (prevIdx >= 0) {
                    reserve.splice(prevIdx, 1);
                    return true
                } else if (nextIdx >= 0) {
                    reserve.splice(nextIdx, 1);
                    return true
                } else {
                    return false
                }
            }).filter(v => v === false).length
    }