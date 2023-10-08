function solution(picture, k) {
    const answer = Array(picture.length*k);
    picture.forEach((str,i) => {
        const newStr = [...str].map(v=> v.repeat(k)).join('');
        answer.fill(newStr,i*k,i*k+k);
    })
    return answer;
}