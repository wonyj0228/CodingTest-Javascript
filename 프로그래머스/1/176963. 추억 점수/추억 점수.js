function solution(name, yearning, photo) {
    return photo.map((arr) => 
        arr.reduce((acc,cur) => {
            const idx = name.findIndex(v => v === cur);
            if (idx >= 0) acc += yearning[idx];
            return acc;
        },0)
    );
}