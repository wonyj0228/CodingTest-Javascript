function solution(arr1, arr2) {
    return arr1.map((v,i) => v.map((v2,j)=> v2 + arr2[i][j]))
}