function solution(s, skip, index) {
    const eng = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
                .filter(v => !skip.includes(v))
    
    const answer = [...s].map(v => {
        let idx = eng.indexOf(v) + index;
        if (idx >= eng.length) idx = idx % eng.length;
        return eng[idx];
    })
    return answer.join('');
}