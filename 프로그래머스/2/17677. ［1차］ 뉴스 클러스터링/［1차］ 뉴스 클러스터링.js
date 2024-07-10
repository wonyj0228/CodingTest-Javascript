function solution(str1, str2) {
    function makeArr (str) {
        const arr = [...str].reduce((acc,cur,idx,array) => {
            if (idx !== array.length-1) {
                const e = cur + array[idx+1];
                if (/^[a-zA-Z]*$/.test(e)) {
                    acc.push(e.toLowerCase());
                }
            }
            return acc
        }, []);
        return arr
    }
    
    const arrA = makeArr(str1).sort();
    const arrB = makeArr(str2).sort();
    
    const common = [];
    for (let i=0; i<arrA.length; i++) {
        if (arrB.includes(arrA[i])) {
            common.push(arrA[i]);
            arrB.splice(arrB.findIndex(str => str=== arrA[i]),1);
        }
    }
    
    const comLen = common.length
    const sumLen = arrA.length + arrB.length;
    
    if (comLen === 0 && sumLen === 0) {
        return 65536
    }
    return Math.floor(comLen / sumLen * 65536)
}