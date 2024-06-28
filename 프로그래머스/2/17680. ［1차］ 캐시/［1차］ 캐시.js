function solution(cacheSize, cities) { 
    let answer = 0;
    const cache = [];
    
    if (cacheSize === 0) {
        answer = cities.length * 5
    } else {
        cities.forEach((city) => {
            city = city.toLowerCase();
            
            if (cache.includes(city)) {

                cache.splice(cache.findIndex(v => v === city),1);
                cache.push(city);
                answer += 1;
            } else {

                if (cache.length === cacheSize) {
                    cache.shift();
                }
                cache.push(city);
                answer += 5;               
            }
        })
    }
    
    return answer;
}
