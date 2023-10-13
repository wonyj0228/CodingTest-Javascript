function solution([loginId, loginPw], db) {
    const [sameId] = db.filter(([id,_]) => loginId === id);
    return sameId ? sameId[1] === loginPw ? "login" : "wrong pw" : "fail";
}