function solution(babbling) {
    const possible = [ "aya", "ye", "woo", "ma"];
    var answer = 0;
    
    babbling.forEach((str) => {
        possible.forEach((v,i) => str = str.replaceAll(v, i));
        if (/^[0-9]+$/.test(str)) {
            let repeatChk = true;
            for(let i=0; i<str.length; i++) {
                if (str[i] === str[i+1]) {
                    repeatChk = false;
                    break;
                }
            }
            if (repeatChk) answer++;
        }
   
    })
    return answer;
}