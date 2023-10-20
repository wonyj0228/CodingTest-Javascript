function solution(my_string) {
    return my_string.split(/[a-zA-Z]/g)
            .filter(v => v !== '')
            .reduce((acc,cur) => acc + Number(cur), 0);
}