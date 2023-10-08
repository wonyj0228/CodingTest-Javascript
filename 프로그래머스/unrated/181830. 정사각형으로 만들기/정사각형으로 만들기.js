function solution(arr) {
    let row = arr[0].length;
    let col = arr.length;
    
    while (arr.length !== row) {
        if (row > col) {
            arr.push(Array(row).fill(0));
            col++;
        } else {
            arr.forEach(rowArr => rowArr.push(0));
            row++;
        }
    }
    return arr;
}