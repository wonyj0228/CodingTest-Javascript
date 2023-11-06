function solution(keyinput, board) {
    let [x,y] = [0,0];
    const maxRow = (board[0]-1) / 2 ;
    const maxCol = (board[1]-1) / 2 ;
    
    const move = {
        up : () => {
            if (y+1 <= maxCol) y = y+1;
        },
        down : () => {
            if (Math.abs(y-1) <= maxCol) y = y-1;
        },
        left : () => {
            if (Math.abs(x-1) <= maxRow)  x= x-1;
        },
        right : () => {
            if (x+1 <= maxRow) x = x+1;
        }
    }
    
    keyinput.forEach(key => move[key]() )
    
    return [x,y];
}