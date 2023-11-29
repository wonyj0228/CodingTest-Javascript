function solution(n, arr1, arr2) {
    arr1 = arr1.map(v => v.toString(2).padStart(n,'0'));
    arr2 = arr2.map(v => v.toString(2).padStart(n,'0'));

    return arr1.map((arr1Str,i) => {
        return [...arr1Str].map((v,idx) => {
                return parseInt(v) || parseInt([...arr2[i]][idx]) ? '#' : ' ';
        }).join('')
    })
}