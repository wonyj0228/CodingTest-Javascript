function solution(numbers) {
    numbers.sort((a,b) => a-b);
    return numbers.reduce((acc,cur,i,arr) => {
        for (j=i+1; j<arr.length; j++) {
            if (!acc.includes(cur+arr[j])) {
                acc.push(cur+arr[j]);
            }
        }
        return acc
    }, []).sort((a,b) => a-b)
}