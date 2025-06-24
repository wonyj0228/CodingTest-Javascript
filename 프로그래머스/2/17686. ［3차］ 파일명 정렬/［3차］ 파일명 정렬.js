function solution(files) {
    files.sort((a,b) => {
        const numberA = a.match(/\d{1,5}/)[0];
        const numberB= b.match(/\d{1,5}/)[0];
        const [headA, tailA] = a.split(numberA);
        const [headB, tailB] = b.split(numberB);
        
        const headCompare = headA.toLowerCase().localeCompare(headB.toLowerCase());
        
        if (headCompare !== 0) return headCompare;
        
        const numberCompare = parseInt(numberA) - parseInt(numberB);
        if (numberCompare === 0) {
            return 0
        } else {
          return numberCompare  
        }
    });
    
    return files
}