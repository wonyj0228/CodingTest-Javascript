function solution(str1, str2) {
    var answer = '';
    str1 = [...str1];
    str2 = [...str2];
    str1.map((v,i) => answer = answer + str1[i] + str2[i])
    return answer;
}