function solution(num_list) {
   const arr = num_list.slice(num_list.length-2);
    if (arr[0] >= arr[1]) {
        num_list.push(arr[1]*2);
        return num_list;
    } else if (arr[0] < arr[1]) {
        num_list.push(arr[1]-arr[0]);
        return num_list;
    }
}