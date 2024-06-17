function solution(k, tangerine) {
    const arr = new Array(Math.max(...tangerine)).fill(0);
    tangerine.forEach(v => {
        arr[v-1] += 1;
    })
    
    arr.sort((a,b)=> b-a);
    
    let sum = 0;
    for (let i=0; i<arr.length; i++ ){
        sum += arr[i];
        if (sum >= k) {
            return i+1;
        }
    }
}