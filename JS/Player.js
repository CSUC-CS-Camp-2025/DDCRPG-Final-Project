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

//###########################Player Movement###############################//
let player = document.getElementById('Player')
let movePlayer = 50//player speed//
//listens for key inputs//
window.addEventListener('keydown', (e) => {
    let leftpos = parseInt(window.getComputedStyle(player).getPropertyValue("left"))
    let toppos = parseInt(window.getComputedStyle(player).getPropertyValue("top"))
    switch (e.key) {
        case 'a':
            player.style.left = leftpos - movePlayer + 'px';
            break;
        case 'd':
            player.style.left = leftpos + movePlayer + 'px';
            break;
        case 'w':
            player.style.top = toppos - movePlayer + 'px';
            break;
        case 's':
            player.style.top = toppos + movePlayer + 'px';
            break;
    }
});