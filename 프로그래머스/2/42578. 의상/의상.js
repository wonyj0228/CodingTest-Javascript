function solution(clothes) {
    const closet = clothes.reduce((acc,cur) => {
        acc[cur[1]] = acc[cur[1]] ? acc[cur[1]] + 1 : 1;
        return acc
    } ,{});

    const arr = Object.values(closet);
    return arr.reduce((a,b)=> a*(b+1), 1)-1
}


