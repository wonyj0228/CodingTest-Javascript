function solution(a, b, c, d) {
    const obj = {};
    [a,b,c,d].forEach(p => {
        Object.keys(obj).includes(String(p)) ? obj[p] += 1 : obj[p] = 1
    })
    
    const keyArr = Object.keys(obj);
    const num = keyArr.length;
    
    if (num === 4) {
        return Math.min(a,b,c,d);
    } else if (num === 3) {
        const qr = keyArr.filter(k => obj[k] === 1);
        return Number(qr[0])*Number(qr[1]);
    } else if (num === 2) {
        let p = keyArr.filter(k => obj[k] === 3);
        if (p.length === 1) {
            const q = keyArr.filter(k => k !== p[0]);
            return (10* Number(p[0]) + Number(q[0]))**2;
        } else {
            p = Number(keyArr[0]);
            const q = Number(keyArr[1]);
            return (p+q) * Math.abs(p-q);
        }
    } else if (num === 1) {
        return 1111*Number(keyArr[0]);
    }
    
}