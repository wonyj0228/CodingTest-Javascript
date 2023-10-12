const num = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

function solution(numbers) {
    num.forEach((v,i) => {
        numbers = numbers.split(v).join(i);
    })
    return Number(numbers)
}