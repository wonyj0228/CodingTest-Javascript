function solution(board) {
    return board.reduce((acc, curArr, i) => acc += curArr.reduce((sum, e, j) => e === 1 ? sum : sum += safeAreaCheck(board,i,j),0),0)
}

function safeAreaCheck(board,row,col) {
    const sameRowCheck = board[row][col-1] || board[row][col+1];
    const prevRowCheck = row === 0 ? 0 : board[row-1][col-1] || board[row-1][col] || board[row-1][col+1] ;
    const nextRowCheck = row === board.length -1 ? 0 : board[row+1][col-1] || board[row+1][col] || board[row+1][col+1];
    return !(sameRowCheck || prevRowCheck || nextRowCheck);
}