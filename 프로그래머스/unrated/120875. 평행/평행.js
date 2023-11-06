function solution([a, b, c, d]) {
    function diff ([x1, y1], [x2, y2]) {
        return (Math.max(y1,y2)-Math.min(y1,y2)) / (Math.max(x1,x2)-Math.min(x1,x2))
    }
    
    if (diff(a,b) === diff (c,d)) {
        return 1
    } else if (diff(a,c) === diff (b,d)) {
        return 1
    } else if (diff(a,d) === diff(b,c)) {
        return 1
    }
    return 0
}