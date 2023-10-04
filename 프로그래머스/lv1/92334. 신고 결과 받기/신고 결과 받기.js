function solution(id_list, report, k) {
    report = [...new Set(report)];
    const rptAcct = report.map(v => v.split(' ')[1]);
    const rptCnt = id_list.map(id => rptAcct.filter(v => v === id).length);
    const banAcct = rptCnt.reduce((acc,cur,i) => {if (cur >= k) {acc.push(id_list[i])} return acc},[]);
    const emailAcct = report.filter(v=> banAcct.includes(v.split(" ")[1])).map(str => str.split(" ")[0]);
    return id_list.map(v => emailAcct.filter(id => id === v).length)
}