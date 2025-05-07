function solution(bridge_length, weight, truck_weights) {
    let bridge = [];
    let time = 0;
    let curTruck = 0;
    let curWeight = 0;
    
    while (true) {
        if (curTruck === 0 && truck_weights.length === 0) {
            break;
        }
        
        if (bridge[bridge_length-1] > 0) {
            curTruck--;
            curWeight -= bridge[bridge_length-1];
        }
        
        if (bridge.length === bridge_length) {
            bridge.pop();
        }
        
        
        if (truck_weights.length > 0) {
            if (curTruck<=bridge_length && curWeight+truck_weights[0]<=weight) {
                bridge.unshift(truck_weights[0]);
                curTruck++;
                curWeight += truck_weights[0];
                truck_weights.shift();
            } else {
                bridge.unshift(0);
            }
        } else {
            bridge.unshift(0);
        }        
        time++;        
    }
    return time;
}