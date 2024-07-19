function solution(dirs) {
    let [curX,curY] = [0,0];
    const moving = {
        'U' : {x : 0, y: 1},
        'D' : {x : 0, y: -1},
        'R' : {x : 1, y: 0},
        'L' : {x : -1, y: 0},
    }
    
    const answer = new Set();
    
    [...dirs].forEach(dir => {
        const moveX = curX + moving[dir].x;
        const moveY = curY + moving[dir].y;
        
        if (moveX<=5 && moveX>=-5 && moveY<=5 && moveY>=-5) {
            answer.add(''+curX+curY+moveX+moveY);
            answer.add(''+moveX+moveY+curX+curY);
            curX = moveX;
            curY = moveY;
        }
        
    })
    
    return answer.size / 2;
}