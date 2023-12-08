function solution(dartResult) {
    const dartArr=[];
    let splitPoint = 0;
    for (let i=0; i<dartResult.length; i++) {
        switch(dartResult[i]) {
            case 'S':
                dartArr.push(parseInt(dartResult.slice(splitPoint, i)));
                splitPoint = i+1;
                break;
            case 'D':
                dartArr.push(parseInt(dartResult.slice(splitPoint, i)) ** 2);
                splitPoint = i+1;
                break;
            case 'T':
                dartArr.push(parseInt(dartResult.slice(splitPoint, i)) ** 3);
                splitPoint = i+1;
                break;
            case '*':
                dartArr.push('*');
                splitPoint = i+1;
                break;
            case '#':
                dartArr.push('#');
                splitPoint = i+1;
                break;
        }
    }
    
    while (dartArr.length !== 3) {
        if (dartArr.includes('#')) {
            const idx = dartArr.indexOf('#');
            dartArr[idx-1] *= -1;
            dartArr.splice(idx,1);
            
        } else if (dartArr.includes('*')) {
            const idx = dartArr.indexOf('*');
            dartArr[idx-1] *= 2;
            if (idx - 2 >= 0) {
                dartArr[idx-2] *= 2;
            }
            dartArr.splice(idx,1);
        }
    }

    return dartArr.reduce((acc,cur) => acc+=cur);
}