function solution(msg) {
    const dict =['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R',
                 'S','T','U','V','W','X','Y','Z'];
    let answer = [];
    
    while(msg !== '') {
        let w = msg[0];
        for (let i=1; i<msg.length; i++) {
            if (dict.includes(w+msg[i])) {
                w = w+msg[i];
            } else {
                break;
            }
        }
        answer.push(dict.findIndex(str => str === w) + 1);
        msg = msg.replace(w,'');
        dict.push(w+msg[0]);
    }
    
    return answer;
}