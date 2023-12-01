function solution(a, b) {
    const day = ['SUN','MON','TUE','WED','THU','FRI','SAT'];
    const date = '2016-' + String(a).padStart(2,'0') + '-' + String(b).padStart(2,'0');
    return day[new Date(date).getDay()]
}