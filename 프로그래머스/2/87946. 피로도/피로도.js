function solution(k, dungeons) {
    let answer = 0;
    dungeons = dungeons.filter(([min, _]) => k >= min);
    
    function explore (health, dungeonsArr, sum) {
        for (let i=0; i<dungeonsArr.length; i++) {
            let curHealth = health;
            let complete = sum;
            const newArr = [...dungeonsArr];
            
            const [min, use] = newArr[i];
            if (min <= curHealth) {
                curHealth -= use;
                complete++;
            }
            
            if (newArr.length === 1) {
               if (answer < complete) {
                   answer = complete;
               }
            } else {
                newArr.splice(i,1);
                explore(curHealth, newArr, complete);
            }
        }
    }
    
    let complete = 0;
    explore(k, dungeons,complete);
    
    return answer
}