function solution(arr, delete_list) {
    return arr.reduce((acc,cur) => {
        if (delete_list.indexOf(cur) === -1) acc.push(cur);
        return acc
    } ,[]);
}