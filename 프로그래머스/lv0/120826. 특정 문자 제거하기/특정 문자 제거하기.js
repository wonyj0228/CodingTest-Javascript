function solution(my_string, letter) {
   let answer="";
   const str_array = my_string.split("").filter(x => x !== letter);
    str_array.forEach(x=> {answer = answer + x})
    return answer;
}