function solution(n, stations, w) {
    let answer = 0;
    const fullArea = w*2 +1;
    
    let point = 0;
    
    stations.forEach((apt) => {
        let minArea = apt-w-1;
        if (point < minArea) {
            answer += Math.ceil((minArea-point)/fullArea);
        }
        point = apt + w;
    })
    
    if (point < n) {
        answer += Math.ceil((n-point)/fullArea);
    }
    
    return answer;
}