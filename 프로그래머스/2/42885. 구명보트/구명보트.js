function solution(people, limit) {
    people.sort((a,b)=> b-a);
    
    let answer = 0;
    let i =0;
    let j = people.length-1;
    
    while (i <= j) {
        if (people[i] + people[j] <= limit) {
            i++;
            j--;
        } else {
            i++;
        }
        answer++;
    }
    
    return answer;
}