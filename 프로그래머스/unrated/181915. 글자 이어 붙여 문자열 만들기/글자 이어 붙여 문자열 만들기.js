function solution(my_string, index_list) {
    return index_list.map(idx => my_string.substr(idx,1)).join('');
}