function filteredRecord(records) {
    const carRecord = {};
    
    records.forEach((record) => {
        const [time, number, inNout] = record.split(' ');
        if (inNout === "IN") {
            if (!carRecord[number]) {
                carRecord[number] = {
                    in : [],
                    out : [],
                };
            }
            carRecord[number].in.push(time);
        } else {
            carRecord[number].out.push(time);
        }
        
    });
    
    return carRecord;
}

function timeToMin(string) {
    const [hh,mm] = string.split(':').map(Number);
    return hh*60 + mm;
}

function solution(fees, records) {
    const [defaultMin, defaultFee, extraMin, extraFee] = fees;
    
    const carRecord = filteredRecord(records);
    const sortCarNum = Object.keys(carRecord)
                            .sort((a,b) => Number(a)-Number(b));
    
    const parkingTime = sortCarNum.map((carNum) => {
        const carObj = carRecord[carNum];
        
        let time = 0;
        for (let i=0; i<carObj.in.length; i++) {
            if (carObj.out[i]) {
                time += timeToMin(carObj.out[i]) - timeToMin(carObj.in[i]);
            } else {
                time += 1439 - timeToMin(carObj.in[i]);
            }
        }
        return time;
    })
    
    const answer = parkingTime.map((time) => {
        if (time > defaultMin) {
            return defaultFee + Math.ceil((time-defaultMin)/extraMin) * extraFee;
        } else {
            return defaultFee;
        }
    })
    
    return answer;
}