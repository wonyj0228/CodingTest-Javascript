function solution(arr) {
    let i = 0;
    const stk = [];
    while (i < arr.length) {
        if (stk.length) {
            if (stk[stk.length-1] === arr[i]) {
                stk.pop();
            } else {
                stk.push(arr[i]);
            }
        } else {
            stk.push(arr[i]);
        }
        i++;
    }
    return stk.length ? stk : [-1];
}