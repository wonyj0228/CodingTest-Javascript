function solution(wallpaper) {
    let [lux, luy, rdx, rdy] = [0,0,0,0];
    
    lux = wallpaper.findIndex(str => str.includes('#'));
    luy = Math.min(...wallpaper.map(str => [...str].findIndex(v => v==='#'))
                                .filter(v => v !== -1));
    rdx = wallpaper.map(str => str.includes('#')).lastIndexOf(true) + 1;
    rdy = Math.max(...wallpaper.map(str => [...str].lastIndexOf('#') + 1));
    return [lux, luy, rdx, rdy];
}