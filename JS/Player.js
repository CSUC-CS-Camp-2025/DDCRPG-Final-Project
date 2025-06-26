//#################This Section Covers Player Attack #############################//
let enemyhealth = 100;
setInterval(function () {
    let healthvar = document.getElementById("Enemy");//gets current value of Enemy-its "health"//
    healthvar.value = enemyhealth;

    if (enemyhealth < .01) {
        enemyhealth = .1;
        alert("you win")
    }
    //tracks health and changes color depending on health level//
    if (enemyhealth < 25) {
        updateProgressBarColor();
    }
    else {
        updateProgressBarColor();
    }
}, 1);
function attackenemy() {
    let damage = Math.floor(Math.random() * 10 + 1);//Random Damage Value Btwn : 10-1 //
    enemyhealth -= damage;
}
//###################################This section deals with Enemy healing#################################//
setInterval(() => {
    //makes sure that healing doesnt give more than max health//
    if (enemyhealth > 100) {
        enemyhealth = 100;
    }
    //Stopps healing once heal drops to a certain level
    else if (enemyhealth < 100 && enemyhealth > 30) {
        let heal = Math.floor(Math.random() * 20 + 5);
        enemyhealth += heal;
    }
}, 1000);