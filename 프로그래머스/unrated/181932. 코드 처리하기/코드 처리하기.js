function solution(code) {
    let ret = "";
    let mode = 0;
    [...code].map((v,i) => {
        if (v === "1") {
            mode ? mode = 0 : mode = 1;
        } else if (mode === 0) {
            if (i %2 === 0) {
                ret += v;
            }
        } else if (mode === 1) {
            if (i%2 !== 0) {
                ret += v;
            }
        }
    })
    if (ret === "") {
        ret = "EMPTY";
    }
    return ret
}