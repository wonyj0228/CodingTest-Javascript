function solution(n) {
    var answer = [];
    
    for (i=0; i<n; i++) {
        answer.push(new Array(n).fill(0));
    }
    
    let [x,y] = [0,0];
    let mode = "right";
    let round = 0;
    
    function setTarget() {
        if (mode === "right") {
            if (y+1 < n-round) {
                y = y+1;
            } else {
                mode = "down"; 
                x = x+1;
            }
        } else if (mode === "down") {
            if (x+1 < n-round) {
                x = x+1;
            } else {
                mode = "left";
                y = y-1;
            }
        } else if (mode === "left") {
            if (y-1 >= 0+round) {
                y = y-1;
            } else {
                mode = "up";
                round++;
                x = x-1;
            }
        } else if (mode === "up") {
            if (x-1 >= 0+round) {
                x = x-1;
            } else {
                mode = "right"
                y = y+1;
            }
        }
    }
    
    for (i=1; i<= n*n; i++) {
        answer[x][y] = i;
        setTarget();
    }

    return answer;
}