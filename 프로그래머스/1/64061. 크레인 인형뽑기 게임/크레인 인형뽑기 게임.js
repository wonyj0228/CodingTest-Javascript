function solution(board, moves) {
    const basket = [];
    let answer = 0;

    moves.forEach(col => {
        for(let i=0; i<board.length; i++) {
            if (board[i][col-1] !== 0) {
                if (basket[basket.length - 1] === board[i][col-1]) {
                    basket.pop();
                    answer = answer + 2;
                } else {
                    basket.push(board[i][col-1]);
                }
                board[i][col-1] = 0;
                break;
            } 
        }
    })
    return answer;
}