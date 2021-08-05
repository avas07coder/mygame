var bombimg , Girlimg , Manimg , Playerimg , standingimg, bg, groundimg
function preload(){

boarimg = loadAnimation("Boar Frames/b1.png","Boar Frames/b2.png","Boar Frames/b3.png","Boar Frames/b4.png","Boar Frames/b5.png")
girlimg = loadAnimation("Girl Frames/g1.png","Girl Frames/g2.png","Girl Frames/g3.png","Girl Frames/g4.png","Girl Frames/g5.png","Girl Frames/g6.png","Girl Frames/g7.png")
Manimg = loadAnimation("Gunner Frames/gunner1.png","Gunner Frames/gunner2.png","Gunner Frames/gunner3.png","Gunner Frames/gunner4.png","Gunner Frames/gunner5.png","Gunner Frames/gunner6.png","Gunner Frames/gunner7.png","Gunner Frames/gunner8.png","Gunner Frames/gunner9.png","Gunner Frames/gunner10.png","Gunner Frames/gunner11.png","Gunner Frames/gunner12.png","Gunner Frames/gunner13.png","Gunner Frames/gunner14.png","Gunner Frames/gunner15.png","Gunner Frames/gunner16.png")
Playerimg = loadAnimation("Player Frames/p1.png","Player Frames/p2.png","Player Frames/p3.png","Player Frames/p4.png","Player Frames/p5.png","Player Frames/p6.png","Player Frames/p7.png","Player Frames/p8.png","Player Frames/p9.png","Player Frames/p10.png","Player Frames/p11.png","Player Frames/p12.png","Player Frames/p13.png","Player Frames/p14.png")
standingimg = loadAnimation("Images/Playerstanding.png")
bg = loadImage("Images/Dungeon Background.png")
groundimg = loadImage("Images/Ground.png")
monsterimg = loadAnimation("monster/flyingm1.png","monster/flyingm2.png","monster/flyingm3.png","monster/flyingm4.png","monster/flyingm5.png","monster/flyingm6.png","monster/flyingm7.png","monster/flyingm8.png","monster/flyingm9.png","monster/flyingm10.png","monster/flyingm11.png","monster/flyingm12.png","monster/flyingm13.png","monster/flyingm14.png","monster/flyingm15.png","monster/flyingm8.png","monster/flyingm9.png","monster/flyingm10.png","monster/flyingm11.png","monster/flyingm12.png","monster/flyingm13.png","monster/flyingm14.png","monster/flyingm15.png")
bulletimg = loadImage("Images/Bullet.png")
heart = loadImage("Images/Heart.png")
gameoverimg = loadImage("Images/youwin.png");
}




function setup(){
createCanvas(displayWidth,displayHeight)

background1 = createSprite(width/2,height/2)
background1.addImage(bg)
background1.scale = 3.5

player = createSprite(100,height-200)
player.addAnimation("p",Playerimg)
player.setCollider("rectangle",0,0,80,100)

edges = createEdgeSprites();

wall1 = createSprite(width/2,height-100,150,20)
wall1.velocityY = -5
wall1.addImage(groundimg)
wall1.scale = 0.3

wall2 = createSprite(100,height-200,100,20)
wall2.addImage(groundimg)
wall2.scale = 0.35

wall3 = createSprite(350,height/2,300,20)
wall3.addImage(groundimg)
wall3.scale = 0.5
wall4 = createSprite(width-300,200,350,20)
wall4.addImage(groundimg)
wall4.scale = 0.7

wall5 = createSprite(width-300,height-100,350,20)
wall5.addImage(groundimg)
wall5.scale = 0.7

wall6 = createSprite(width,height-250,350,20)
wall6.addImage(groundimg)
wall6.scale = 0.7

wall7 = createSprite(width+400,height-100,150,20)
wall7.velocityY = -5
wall7.addImage(groundimg)
wall7.scale = 0.4

wall8 = createSprite(width+800,height-100,150,20)
wall8.velocityY = 7
wall8.addImage(groundimg)
wall8.scale = 0.4

wall9 = createSprite(width+1200,height-100,150,20)
wall9.velocityY = -6
wall9.addImage(groundimg)
wall9.scale = 0.4

wall10 = createSprite(width+1700,height/2)
wall10.addImage(groundimg)
wall10.scale = 0.7

endwall = createSprite(width+2500,height-200)
endwall.addImage(groundimg)
endwall.scale = 2

monster = createSprite(width+2600,height-300)
monster.addAnimation("mon",monsterimg);



heart1 = createSprite(camera.x+100,100)
heart1.addImage(heart);
heart1.scale = 0.1;

heart2 = createSprite(camera.x+150,100)
heart2.addImage(heart);
heart2.scale = 0.1;

heart3 = createSprite(camera.x+200,100)
heart3.addImage(heart);
heart3.scale = 0.1;


// youwin = createSprite(width/2,height/2);
// youwin.addImage(gameoverimg)

}

function draw(){
background("black")
//canvas.x =  camera.x;
if(keyDown("space")){
    player.velocityY = -13
}

if(keyDown(RIGHT_ARROW)){
    camera.x += 5
}
spawnbullet();


player.velocityY += 1
background1.x = camera.x
player.x = camera.x-570
camera.y = height/2
wall1.bounceOff(edges)
// wall7.bounceOff(edges)
// wall8.bounceOff(edges)
// wall9.bounceOff(edges)
if(wall7.y<20){
    wall7.velocityY = 5;
}
if(wall7.y>height-20){
    wall7.velocityY = -5;
}

if(wall8.y<20){
    wall8.velocityY = 5;
}
if(wall8.y>height-20){
    wall8.velocityY = -5;

}if(wall9.y<20){
    wall9.velocityY = 5;
}
if(wall9.y>height-20){
    wall9.velocityY = -5;
}
player.bounceOff(edges[2])
player.collide(wall1);
player.collide(wall2);
player.collide(wall3);
player.collide(wall4);
player.collide(wall5);
player.collide(wall6);
player.collide(wall7);
player.collide(wall8);
player.collide(wall9);
player.collide(wall10);
player.collide(endwall);
drawSprites()
//text(mouseX+","+mouseY,width-200,100)
}

function spawnbullet(){
    
bullet = createSprite(displayWidth/2,displayHeight/2)
bullet.addImage(bulletimg);
bullet.scale =0.1
if(frameCount%100){
    bullet.velocityX = -3
}
bullet.lifetime = 100
}