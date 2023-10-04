function solution(my_string) {   
    return Array(my_string.length).fill('').map((_,i) => my_string.substr(-i)).sort()
}