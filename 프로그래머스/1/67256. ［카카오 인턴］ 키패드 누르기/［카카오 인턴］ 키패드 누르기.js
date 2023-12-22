function solution(numbers, hand) {
    let curLeft = '*';
    let curRight = '#';
    
    return numbers.map((num) => {
        if ([1,4,7,'*'].includes(num)) {
            curLeft = num;
            return 'L';
        } else if ([3,6,9,'#'].includes(num)) {
            curRight = num;
            return 'R';
        } else {
            const target = coordinate(num);

            const left = coordinate(curLeft);
            const right = coordinate(curRight);
            
            const leftMove = Math.abs(target[0] - left[0]) + Math.abs(target[1] - left[1]);
            const rightMove = Math.abs(target[0] - right[0]) + Math.abs(target[1] - right[1]);
            
            if (leftMove > rightMove) {
                curRight = num;
                return 'R';
            } else if (leftMove < rightMove) {
                curLeft = num;
                return 'L';
            } else {
                if (hand === "left") {
                    curLeft = num;
                    return "L";
                } else {
                    curRight = num;
                    return 'R';
                }
            }
        }
    }).join('')
}

function coordinate (num) {
    switch (num) {
        case 1:
            return [0,0];
        case 2:
            return [0,1];
        case 3:
            return [0,2];
        case 4:
            return [1,0];
        case 5:
            return [1,1];
        case 6:
            return [1,2];
        case 7:
            return [2,0];
        case 8:
            return [2,1];
        case 9:
            return [2,2];
        case '*':
            return [3,0];
        case 0:
            return [3,1];
        case '#':
            return [3,2];        
    }
}