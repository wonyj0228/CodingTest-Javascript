function solution(land) {
    const lenX = land[0].length;
    const lenY = land.length;
    
    function findSize(x,y) {
        const addX = [1,-1,0,0]
        const addY = [0,0,-1,1];
        let sizeSum = 0;
        
        const queue = [[x,y]];
        const maxCol = [y];
        
        land[y][x] = 0;
        
        while (queue.length) {
            
            const curX = queue[0][0];
            const curY = queue[0][1];
            queue.shift();
            sizeSum++;
            
            for (let i=0; i<4; i++) {
                const moveX = curX+addX[i];
                const moveY = curY+addY[i];
                
                if (moveX<lenX && moveY<lenY && moveY>=0) {
                    if (land[moveY][moveX] === 1) {
                        land[moveY][moveX] = 0;
                        queue.push([moveX,moveY]);
                        
                        if (maxCol[moveX-x] >= 0 ) {
                            if (moveY < maxCol[moveX-x]) {
                                maxCol[moveX-x] = moveY;
                            }
                        } else if (maxCol[moveX-x] === undefined) {
                            maxCol[moveX-x] = moveY;
                        }
                    }
                }
            }
        }
        
        maxCol.forEach((col,i) => {
            land[col][i+x] = sizeSum;
        })
        return sizeSum
    }
    
    let answer = 0;
    for (let x=0; x<lenX; x++) {
        let sumX = 0;
        for (let y=0; y<lenY; y++) {
            if (land[y][x] === 1) {
                sumX += findSize(x,y);
            } else if (land[y][x] > 1) {
                sumX += land[y][x];
            }              
        }

        if (sumX > answer) {
          answer = sumX;  
        } 
    }
    
    return answer;
}