function solution(spell, dic) {
    dic = dic.filter(v => v.length === spell.length);
    spell = spell.sort().join('');
    
    return dic.some(v => [...v].sort().join('') == spell) ? 1 : 2;
}