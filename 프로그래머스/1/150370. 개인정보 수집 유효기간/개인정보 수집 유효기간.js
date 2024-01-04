function solution(today, terms, privacies) {
    function dateToArr(date) {
        const [year, month, day] = date.split('.');
        return [parseInt(year), (parseInt(month)-1)*28 + parseInt(day)];
    }
    
    today = dateToArr(today);
    
    const termsObj = {};
    terms.forEach(v => {
        const arr = v.split(' ');
        termsObj[arr[0]] = parseInt(arr[1]);
    })
    
    return privacies.map((str, idx) => {
        const [date, type] = str.split(' ');
        let [year, day] = dateToArr(date);
        
        day += termsObj[type] * 28;
        if (day > 336) {
            year = year + Math.floor(day/336);
            day = day % 336;
        }

        let returnIdx = idx+1;
        if (today[0] < year) {
            returnIdx=0;
        } else if (today[0] === year) {
            if (today[1] < day) {
                returnIdx = 0;
            }
        }
        
        return returnIdx;
    }).filter(v => v !== 0)
}