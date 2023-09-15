function solution(my_string, is_prefix) {
    return my_string.slice(0,my_string.indexOf(is_prefix)) + is_prefix === is_prefix? 1 : 0
}