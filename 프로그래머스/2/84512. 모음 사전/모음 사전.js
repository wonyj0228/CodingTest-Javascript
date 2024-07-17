function solution(word) {
    let answer = 0;
    const letter = [ 'A', 'E', 'I', 'O', 'U'];
    let flag = false;
    
    function dfs(curWord) {
        if (word === curWord) {
            flag = true;
            return
        }
        answer ++;
        if (curWord.length === 5) {
            return
        }
        
        for (let i=0; i<letter.length; i++) {
            if (flag) {
                break;
            }
            dfs(curWord+letter[i]);
        }
    }
    
    dfs('');
    return answer;
}