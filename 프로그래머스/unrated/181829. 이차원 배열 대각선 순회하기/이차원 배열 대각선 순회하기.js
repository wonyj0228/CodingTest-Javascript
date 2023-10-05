function solution(board, k) {
    return board.reduce((acc,cur,i) => 
                        acc+= cur.reduce((acc2, cur2, j) => i+j <= k ? acc2 += cur2 : acc2,0),0);
}