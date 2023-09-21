function solution(arr) {
    var stk = [];
    let i = 0;
    while(arr.length > i) {
        if (stk.length === 0 || stk[stk.length-1] < arr[i]) {
            stk.push(arr[i]);
            i++;
        } else {
            stk.pop()
        }
    }
    return stk
}