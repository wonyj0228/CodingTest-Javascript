function solution(bandage, health, attacks) {    
    const [t, x, y] = bandage;
    const maxHealth = health;
    
    let sec = 0;
    let continued = 0;
    
    function heal (plus) {
        health += plus;
        if (health > maxHealth) {
            health = maxHealth;
        }
    }
    
    function attack (minus) {
        health -= minus;
        continued = 0;
    }
    
    for (let i =0; i<attacks.length; i++) {
        const [time, minus] = attacks[i];
        for (let j=sec+1; j<time; j++) {
            heal(x);
            continued++;
            sec++;
            if (continued === t) {
                continued = 0;
                heal(y);
            }
        }
        
        attack(minus);
        sec++;
        if (health <= 0) {
            health = -1;
            break;
        }
    }
    
    return health
}