function solution(s) {
    if (s.length === 4 || s.length === 6) {
        if (s.replace(/[a-zA-Z]/, '') === s) {
            return true
        }
    }
    return false;
}