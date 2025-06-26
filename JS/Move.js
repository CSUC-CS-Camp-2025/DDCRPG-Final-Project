//###########################Player Movement###############################//
let playerImg, obstacleImg;
let Obstacle, player;

function preload() {
    playerImg = loadImage("gallery/femaleMC.png");
    obstacleImg = loadImage("gallery/trees.png");
    obstacleImg1 = loadImage("gallery/stable.png");
    obstacleImg2 = loadImage("gallery/cave-rock.png");
    obstacleImg3 = loadImage("gallery/portal.png");
    obstacleImg4 = loadImage("gallery/Final.png");
}
function setup() {
    bg = loadImage('gallery/ForestPath.jpg');
    createCanvas(2000, 1000);
    player = { x: 950, y: 400, w: 100, h: 100, img: playerImg };
    Obstacle = { x: 140, y: 50, w: 250, h: 225, img: obstacleImg };
    Obstacle1 = { x: 700, y: 290, w: 250, h: 225, img: obstacleImg1 };
    Obstacle2 = { x: 1300, y: 100, w: 200, h: 200, img: obstacleImg2 };
    Obstacle3 = { x: 50, y: 500, w: 200, h: 200, img: obstacleImg3 };
    Obstacle4 = { x: 1800, y: 250, w: 200, h: 200, img: obstacleImg4 };
}

function draw() {
    background(bg);
    // Draw rectangles
    image(Obstacle.img, Obstacle.x, Obstacle.y, Obstacle.w, Obstacle.h);
    image(Obstacle1.img, Obstacle1.x, Obstacle1.y, Obstacle1.w, Obstacle1.h);
    image(Obstacle2.img, Obstacle2.x, Obstacle2.y, Obstacle2.w, Obstacle2.h);
    image(Obstacle3.img, Obstacle3.x, Obstacle3.y, Obstacle3.w, Obstacle3.h);
    image(Obstacle4.img, Obstacle4.x, Obstacle4.y, Obstacle4.w, Obstacle4.h);
    image(player.img, player.x, player.y, player.w, player.h)
    ;
    // Check for collision
    if (isColliding(Obstacle, player)) {
        onCollision();
    }
    if (isColliding(Obstacle2, player)) {
        onCollision1();
    }
    if (isColliding(Obstacle3, player)) {
        onCollision2();
    }
    if (isColliding(Obstacle4, player)) {
        onCollision3();
    }
}
let movePlayer = 50;//player speed//

function isColliding(a, b) {
    return (
        a.x < b.x + b.w && a.x + a.w > b.x && a.y < b.y + b.h && a.y + a.h > b.y
    );
}

function onCollision() {
    player.x += movePlayer;
    window.open("game.html", "_self");
}
function onCollision1() {
    player.x += movePlayer;
    window.open("game1.html", "_self");
}
function onCollision2() {
    player.x += movePlayer;
    window.open("game2.html", "_self");
}
function onCollision3() {
    player.x += movePlayer;
    window.open("game3.html", "_self");
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