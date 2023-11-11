function solution(phone_number) {
    return [...phone_number].map((v,i) => (phone_number.length - i) <= 4 ? v : "*").join('');
}