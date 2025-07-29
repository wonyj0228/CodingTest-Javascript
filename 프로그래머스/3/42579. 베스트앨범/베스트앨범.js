function solution(genres, plays) {
    const genreSet = [...new Set(genres)];
    const dictionary = {};
    
    genreSet.forEach((genre) => {
        dictionary[genre] = {
            num1 : -1,
            num2 : -1,
            sum : 0
        }
    });
    
    genres.forEach((genre, idx) => {
        dictionary[genre].sum += plays[idx];
        
        if ((plays[dictionary[genre].num1] || 0) < plays[idx]) {
            dictionary[genre].num2 = dictionary[genre].num1;
            dictionary[genre].num1 = idx;
        } else {
            if ((plays[dictionary[genre].num2] || 0) < plays[idx]) {
                dictionary[genre].num2 = idx;
            }
        }
    });
    
    const answer = [];
    genreSet.sort((genre1, genre2) => dictionary[genre2].sum-dictionary[genre1].sum);
    
    genreSet.forEach((genre) => {
        if (dictionary[genre].num1 > -1) {answer.push(dictionary[genre].num1)};
        if (dictionary[genre].num2 > -1) {answer.push(dictionary[genre].num2)};
    });
    
    return answer;
}