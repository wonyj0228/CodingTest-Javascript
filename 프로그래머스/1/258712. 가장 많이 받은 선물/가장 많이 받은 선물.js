function solution(friends, gifts) {
    const friendsObj = {};
    
    for (let i=0; i<friends.length; i++) {
        for (let j=0; j<friends.length; j++) {
            if (i !== j) {
                const str = friends[i] + " " + friends[j];
                friendsObj[str] = 0;
            }
        }
    }
    
    gifts.forEach(gift => {
        friendsObj[gift]++;
    })
    
    
    // 선물지수
    const giftsPoint = new Array(friends.length)
    const keyArr = Object.keys(friendsObj)
    friends.forEach((name,idx) => {
        // 준개수
        const giveArr = keyArr.filter(v => v.split(' ')[0] === name);
        const giveCnt = giveArr.reduce((acc,cur) => acc + friendsObj[cur], 0);
        
        // 받은개수
        const receiveArr = keyArr.filter(v => v.split(' ')[1] === name);
        const receiveCnt = receiveArr.reduce((acc,cur) => acc + friendsObj[cur], 0);
        giftsPoint[idx] = giveCnt - receiveCnt;
    })
    
    
    const giftCount = new Array(friends.length).fill(0);
    
    for (let i=0; i<friends.length; i++) {
        for (let j=i+1; j<friends.length; j++) {
            
            const give = friendsObj[friends[i] + " " + friends[j]];
            const receive = friendsObj[friends[j] + " " + friends[i]];
            
            if (give > receive) {
                giftCount[i]++;
            } else if (give < receive) {
                giftCount[j]++;
            } else {
               if (giftsPoint[i] > giftsPoint[j]) {
                   giftCount[i]++;
               } else if (giftsPoint[i] < giftsPoint[j]) {
                   giftCount[j]++;
               }
            }
        }
    }
    
    return Math.max(...giftCount)
}