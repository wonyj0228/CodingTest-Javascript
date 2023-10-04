function solution(num_list, n) {
    return num_list.reduce((acc,cur,i) => {if (i%n === 0) {acc.push(num_list.slice(i,i+n))} return acc},[]);
}