var bullet, wall
var speed, weight
var deformation
var thickness

function setup() {
  createCanvas(1600,400);

  speed = random(223,321)
  weight = random(30,52)
  thickness = random(22,83)
  bullet = createSprite(50,200,50,25);
  wall = createSprite(1200,200,thickness,height/2)
  bullet.shapeColor = "white"
}

function draw() {
  background(0,0,0);

  wall.shapeColor = rgb(80,80,80)

  bullet.velocityX = speed;
  deformation = 0.5*(weight*speed*speed)/(thickness*thickness*thickness)
  if(wall.x-bullet.x < (bullet.width+wall.width)/2){
    bullet.velocityX = 0
    bullet.x = 1175 - thickness/2
    if(deformation < 10){
      bullet.shapeColor = rgb(0,255,0)
    } 
    if(deformation > 10){
      bullet.shapeColor = rgb(255,0,0)
    }
  }

  console.log(deformation)

  drawSprites();
}