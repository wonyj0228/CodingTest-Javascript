const convertSS = (timeString) => {
    const [mm,ss] =  timeString.split(':').map(Number);
    return mm*60 + ss;
}

function solution(video_len, pos, op_start, op_end, commands) {
    video_len = convertSS(video_len);
    pos = convertSS(pos);
    op_start = convertSS(op_start);
    op_end = convertSS(op_end);
    
    function openingCheck() {
        if (pos >= op_start && pos <= op_end) {
            pos = op_end;
        }
    }
    
    openingCheck();
    
    commands.forEach((command) => {
        switch(command) {
            case 'prev' : 
                pos = pos <= 10 ? 0 : pos-10;
                break;
            case 'next' : 
                pos = pos >= video_len-10 ? video_len : pos+10;
                break;
        }
        openingCheck();
    })
    
    const mm = String(Math.floor(pos / 60));
    const ss = String(pos % 60);
    
    return mm.padStart(2,'0') + ':' + ss.padStart(2,'0');
}