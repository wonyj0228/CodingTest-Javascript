function solution(age) {
    const alp = ["a","b","c","d","e","f","g","h","i","j"];
    age = String(age).split('');
    return age.map(i => alp[Number(i)]).join('')
}