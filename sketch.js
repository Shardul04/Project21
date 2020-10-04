var bullet,wall;
var speed,weight,thickness;


function setup() {
  createCanvas(1600,400);
 wall = createSprite(1200, 200, thickness, height/2);
 wall.shapeColor = (80,80,80);
 thickness = random (22,83);
  speed = random (223,321);
 weight = random(30,52);
  bullet = createSprite(50, 200, 50, 50);
  bullet.velocityX = speed;
   bullet.shapeColor = (255,255,255);
   
}



function draw() {
  background(200,191,231);  


  function hasCollided(lbullet, lwall)
  {
    bulletRightEdge=lbullet.x +lbullet.width;
    wallLeftEdge=lwall.x;
    if(bulletRightEdge>=wallLeftEdge)
    {
      return true
    }
    return false
  }

  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage=0.5 * weight * speed* speed / (thickness *thickness *thickness);
    
    if(damage>10){
      wall.shapeColor = color(225,0,0);
     }
     if(damage<10){
      wall.shapeColor = color(0,255,0);
     }
  
    
  }
 

  drawSprites();
 /* fill ("red");
  textsize = ( "50");
  Text("PRESS R TO RESTART", 1400,300);*/
}













