function solution(park, routes) {
    const width = park[0].length;
    const height = park.length;
    
    let row = 0;
    let col = 0;
    for (let i=0; i<park.length; i++) {
        if (park[i].includes('S')) {
            row = i;
            col = park[row].indexOf('S');
            park[row] = park[row].replace("S", "O");
            break;
        }
    }
    
    function move (dir, num) {
        let cnt = 0;
        if (dir === 'E') {
            while (cnt < num) {
               if (park[row][col+(cnt+1)] === "O") {
                   cnt++;
               } else {
                   cnt = 0;
                   break;
               }
            }
            col += cnt;
        } else if (dir === 'W') {
            while (cnt < num) {
               if (park[row][col-(cnt+1)] === "O") {
                   cnt++;
               } else {
                   cnt = 0;
                   break;
               }
            }
            col -= cnt;
        } else if (dir === 'S') {
            while (cnt < num) {
                if (park[row+(cnt+1)] && park[row+(cnt+1)][col] === "O") {
                    cnt++;
                } else {
                    cnt = 0;
                    break;
               }
            }
            row += cnt;
        } else if (dir === 'N') {
            while (cnt < num) {
               if (park[row-(cnt+1)] && park[row-(cnt+1)][col] === "O") {
                    cnt++;
                } else {
                    cnt = 0;
                    break;
               }
            }
            row -= cnt;
        }
    }
    
    routes.forEach((str) => {
        const [dir, num] = str.split(' ');
        move(dir, num);
    })
    return [row, col];
}
