function solution(my_string, num1, num2) {
    const arr = my_string.split('')
    const a = arr[num1];
    const b = arr[num2];
    arr[num1] = b;
    arr[num2] = a;
    return arr.join('')
}