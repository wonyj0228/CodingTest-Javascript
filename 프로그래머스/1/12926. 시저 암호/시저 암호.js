function solution(s, n) {
    return [...s].map(v => {
        let num = v === ' ' ? v : v.charCodeAt();
        
        if (num >= 65 && num <=90) {
            num = (num+n) > 90 ? (num+n-90) % 26 + 64 : num+n;
        } else if (num >= 97 && num <= 122) {
            num = (num+n) > 122 ? (num+n-122) % 26 + 96 : num+n;
        }
        
        return num === ' ' ? num : String.fromCharCode(num);
    }).join('');
}