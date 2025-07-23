function solution(operations) {
    const queue = [];
    
    operations.forEach((str) => {
        const arr = str.split(' ');
        const command = arr[0];
        const num = parseInt(arr[1]);
        
        switch(command) {
            case 'I' :
                const idx = queue.findIndex(v => v < num);
                if (idx === -1) { 
                    queue.push(num);
                } else {
                    queue.splice(idx, 0, num);
                }
                break;
            case 'D' :
                if (num === 1) {
                    queue.shift();
                } else if (num === -1) {
                    queue.pop();
                }
                break;
        }
    })
    
    return queue.length === 0 ? [0,0] : [queue[0], queue[queue.length - 1]];
}