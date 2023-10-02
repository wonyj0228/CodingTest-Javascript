const alphabet = ["a","b","c","d","e","f","g","h","i","j","k"];
function solution(myString) {
    return [...myString].map(v => alphabet.indexOf(v) !== -1 ? "l" : v).join('');
}