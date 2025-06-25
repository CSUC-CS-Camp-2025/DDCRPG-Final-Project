//This Section Covers Attack Damage//
let enemyhealth = 100;
setInterval(function(){
    let healthvar = document.getElementById("health");
    healthvar.value = enemyhealth;

    if (enemyhealth < .01){ 
        enemyhealth = .1;
        alert("you win")
    }
}, 1);

function attackenemy(){
    let damage = Math.floor(Math.random() * 10 + 1);//Random Damage Value Btwn : 10-1 //
    enemyhealth -= damage;
}