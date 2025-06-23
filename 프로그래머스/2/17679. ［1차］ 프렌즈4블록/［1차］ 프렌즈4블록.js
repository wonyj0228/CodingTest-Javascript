function solution(m, n, board) {
    let answer = 0;  
    board = board.map(str => [...str]);
    
    function checkBlock (row, col) {
        const str = board[row][col];
        
        if (!str) return false;
        
        const right = board[row][col+1];
        const under = board[row+1][col];
        const underright = board[row+1][col+1];

        if (str === right && str === under && str === underright) {
            return [[row,col], [row,col+1],[row+1,col],[row+1,col+1]];
        }
        return false;
    };
    
    function scanAllBlock() {
        const blocks = [];
        for (let i=0; i<m-1; i++) {
            for (let j=0; j<n-1; j++) {
                const rtn = checkBlock(i,j);
                if (rtn) {
                    blocks.push(rtn);
                }
            }
        }
        return blocks;        
    }
    
    function removeBlock(blocks) {
        blocks.forEach(arr => {
            for(let i=0; i<4; i++) {
                const [row,col] = arr[i];
                board[row][col] = 0;
            }
        })
    }
    
    function sortBlock() {
        for (let i=0; i<n; i++) {
            const arr = [];
            for (let j=0; j<m; j++) {
                if (board[j][i] != 0) {
                    arr.push(board[j][i]);
                }
            }
            while (arr.length !== m) {
                arr.unshift(0);
            }
            
            arr.forEach((val,idx) => {
                board[idx][i] = val;
            });
        }
    }

    while (true) {
        const findBlock = scanAllBlock();
        removeBlock(findBlock);
        sortBlock();
        
        if (scanAllBlock().length === 0) {
            break;
        }
        
    }

    for (let i=0; i<m; i++) {
        for (let j=0; j<n; j++) {
            if (board[i][j]===0) answer++;
        }
    }

    
    return answer;
}