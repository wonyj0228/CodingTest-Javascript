function solution(players, callings) {
    const playersObj = {};
    players.forEach((v,i) => {
        playersObj[v] = i;
    })
    
    callings.forEach((player) => {
        const idx = playersObj[player];
        players[idx] = players[idx-1];
        players[idx-1] = player;
        
        const prevPlayer= players[idx];
        playersObj[prevPlayer] = idx;
        playersObj[player] = idx-1;
    })
    
    return players;
}