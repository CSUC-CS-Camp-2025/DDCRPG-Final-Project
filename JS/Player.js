//#################This Section Covers Attack Damage#############################//
let enemyhealth = 100;
setInterval(function(){
    let healthvar = document.getElementById("Enemy");//gets current value of Enemy-its "health"//
    healthvar.value = enemyhealth;

    if (enemyhealth < .01){ 
        enemyhealth = .1;
        alert("you win")
    }
    if (enemyhealth < 25){
        updateProgressBarColor();
    }
    else{
        updateProgressBarColor();
    }
}, 1);
function attackenemy(){
    let damage = Math.floor(Math.random() * 10 + 1);//Random Damage Value Btwn : 10-1 //
    enemyhealth -= damage;
}
//This section deals with Enemy healing//
setInterval(() => {
    let heal = Math.floor(Math.random() * 20 + 5);
    enemyhealth += heal;
    if(enemyhealth > 100){
        enemyhealth = 100;
    }
}, 1000);