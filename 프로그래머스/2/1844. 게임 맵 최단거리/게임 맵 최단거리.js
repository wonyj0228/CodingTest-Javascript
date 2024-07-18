function solution(maps) {
    const destinationX = maps.length-1;
    const destinationY = maps[0].length-1;    
    // 동남서북
    const moveRow = [0,1,0,-1];
    const moveCol = [1,0,-1,0];
    
    const queue = [[0,0,1]];
    maps[0][0] = 0;
    
    while (queue.length) {
        const [curX,curY,len] = queue.shift();
        
        if (curX === destinationX && curY === destinationY) return len;
            
        for (let i=0; i<4; i++) {
            const newX = curX+moveRow[i];
            const newY = curY+moveCol[i];
            if (newX>=0 && newX<=destinationX && newY>=0 && newY<=destinationY) {
                if (maps[newX][newY] === 1) {
                    queue.push([newX,newY,len+1]);
                    maps[newX][newY] = 0;
                }
            }
        }    
    }
    return -1
}