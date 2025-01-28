function solution(skill, skill_trees) {
    let answer = 0;
    
    const skillIdx = {};
    [...skill].forEach((str,idx) => skillIdx[str] = idx);
    
    skill_trees.forEach((skillTree) => {
        let curSkillIdx = -1;
        let frag = true;
        
        for (let i=0; i<skillTree.length; i++) {
            const curSkill = skillTree[i];
            if (skillIdx[curSkill] !== undefined) {
                if (skillIdx[curSkill] -1 === curSkillIdx) {
                    curSkillIdx++;
                } else {
                    frag = false;
                    break;
                }
            }
        }
        if (frag) answer++;
    })
    return answer;
}