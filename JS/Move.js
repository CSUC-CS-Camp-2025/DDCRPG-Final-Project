//###########################Player Movement###############################//
let playerImg, obstacleImg;
let Obstacle, player;

function preload() {
    playerImg = loadImage("gallery/femaleMC.png");     // Make sure this exists
    obstacleImg = loadImage("gallery/trees.png"); // Make sure this exists
}
function setup() {
    createCanvas(1450, 680);
    player = { x: 400, y: 250, w: 100, h: 100, img: playerImg };
    Obstacle = { x: 100, y: 150, w: 250, h: 225, img: obstacleImg };
}

function draw() {
    background(220);
    // Draw rectangles
    image(Obstacle.img, Obstacle.x, Obstacle.y, Obstacle.w, Obstacle.h);
    image(player.img, player.x, player.y, player.w, player.h);

    // Check for collision
    if (isColliding(Obstacle, player)) {
        onCollision();
    }
}
let movePlayer = 50;//player speed//

function isColliding(a, b) {
    return (
        a.x < b.x + b.w &&
        a.x + a.w > b.x &&
        a.y < b.y + b.h &&
        a.y + a.h > b.y
    );
}

function onCollision() {
    player.x += movePlayer;
    window.open("game.html", "_self");
}
//listens for key inputs//
window.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'a':
            player.x -= movePlayer;
            break;
        case 'd':
            player.x += movePlayer;
            break;
        case 'w':
            player.y -= movePlayer;
            break;
        case 's':
            player.y += movePlayer;
            break;
    }
});