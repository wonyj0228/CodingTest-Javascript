function solution(strings, n) {
    var answer = strings.sort(
       (a,b)=>(a.charCodeAt(n)-b.charCodeAt(n)) == 0 ?  
       (a > b ? 1 : -1) :                               
       (a.charCodeAt(n)-b.charCodeAt(n)))               
    return answer;
}
// function solution(strings, n) {
//     return strings.sort((a,b) => {
//         if (a.charCodeAt(n) - b.charCodeAt(n) === 0) {
//             return a - b > 0 ? 1 : -1
//         } else {
//             return a.charCodeAt(n) - b.charCodeAt(n)
//         }
//     })
// }