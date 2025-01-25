

function solution(record) {
    const user = {};
    const answer = [];
    
    record.forEach((string) => {
        const [action, uid, nickname] = string.split(' ');
        
        if (action === "Change") {
            user[uid] = nickname;
        } else {
            if (action === "Enter") {
                user[uid] = nickname;
            }
            answer.push([uid, action]);
        }
    });
    
    function arrayToString(array) {
        const [uid, action] = array;

        if (action === "Enter") {
            return user[uid] + "님이 들어왔습니다."
        } else {
            return user[uid] + "님이 나갔습니다."
        }
    }
    
    return answer.map(arrayToString);
}