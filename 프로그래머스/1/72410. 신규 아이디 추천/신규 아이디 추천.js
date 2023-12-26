function solution(new_id) {
    new_id = new_id.toLowerCase().replace(/[^a-z0-9\.\-\_]/g,'');
    console.log('1,2단계', new_id)
    
    while(new_id.includes('..')) {
        new_id = new_id.replaceAll('..', '.');
    }
    console.log('3단계', new_id)
    
    if (new_id[0] === '.') {
        new_id = new_id.slice(1);
    }
    if (new_id[new_id.length-1] === '.') {
        new_id = new_id.slice(0,new_id.length-1);
    }
    console.log('4단계', new_id)
    
    let len = new_id.length;
    
    if (len === 0) {
        new_id = "a";
    } else if (len >= 16) {
        new_id = new_id.slice(0,15);
        if (new_id[14] === '.') {
            new_id = new_id.slice(0,14);
        }
    }
    console.log('5,6단계', new_id)
    
    len = new_id.length;
    if (len <= 2) {
        new_id = new_id + new_id[len-1].repeat(3-len);
    }
    console.log('7단계',new_id)
    
    return new_id;
}