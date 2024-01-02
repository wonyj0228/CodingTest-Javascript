function solution(survey, choices) {
    const obj = {
        'R' : 0, 'T' : 0, 'C' : 0, 'F' : 0, 'J' : 0, 'M' : 0, 'A' : 0, 'N' : 0,
    };
    
    survey.forEach((type,idx) => {
        const score = 4-choices[idx];
        let choiceType = "";
        
        if (score > 0) {
            choiceType = type[0];
            obj[choiceType] += score;
        } else if (score < 0) {
            choiceType = type[1];
            obj[choiceType] += -score;
        }
    })
    
    let answer = "";
    
    obj.R >= obj.T ? answer += "R" : answer += "T";
    obj.C >= obj.F ? answer += "C" : answer += "F";
    obj.J >= obj.M ? answer += "J" : answer += "M";
    obj.A >= obj.N ? answer += "A" : answer += "N";
    
    return answer;
}