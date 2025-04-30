function solution(schedules, timelogs, startday) {
    const [sat, sun] = [6-startday < 0 ? 6 : 6-startday, 7-startday];
    
    const timeLimit = (time) => {
        let hour = Math.floor(time / 100);
        let min = time % 100;
        if (min >= 60) {
            min -= 60;
            hour++;
        }
        return hour * 100 + min;
    }
    
    return timelogs.reduce((acc,cur,idx) => {
        const time = timeLimit(schedules[idx] + 10);
        const check = cur.every((log, i) => {
           if (i === sat | i === sun) {
               return true;
           }
           return log <= time;     
        });
        
        return check ? acc + 1 : acc;
    }, 0);
}