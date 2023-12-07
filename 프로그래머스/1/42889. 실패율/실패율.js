function solution(N, stages) {
    const failPer = Array.from(Array(N), (_,i) => i+1)
    .map((stage) => [stage, stages.filter(v => v === stage).length/ stages.filter(v => v >= stage).length]);
    
    return failPer.sort(([stageA, stageAPer], [stageB, stageBPer]) => stageBPer-stageAPer)
                    .map(([stage, per]) => stage);
}