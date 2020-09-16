var car, speed, wall, weight;

function setup(){
  createCanvas(1600,400);


  car = createSprite(100,height/2,50,30);
  

  wall = createSprite(1500,200,60,height/2);

  speed = random(55,90);
  weight = random(400,1500);

}
function draw(){
  background(0);
  
  car.depth=wall.depth;
  car.depth+=1;
  
  car.velocityX = speed;
  car.shapeColor = 'white';
  


  wall.shapeColor = (80,80,80);

  if(wall.x-car.x<(car.width+wall.width)/2){

    car.velocityX=0;
    deform = 0.5 * weight * speed * speed/22500;

    fill('white');
    textSize(24);
    text("Deformation: "+Math.round(deform), width/2-50, height/2);

    if(deform<100){
      fill(0,255,0);
      textSize(24);
      text("Safe",width/2, height/2+35);
      car.shapeColor = color(0,255,0);
    }
    else if(deform>100&&deform<180){
      fill(230,230,0);
      textSize(24);
      text("Average",width/2, height/2+35);
      car.shapeColor = color(230,230,0);
    }
    else if(deform>180){
      fill(255,0,0);
      textSize(24);
      text("Lethal",width/2, height/2+35);
      car.shapeColor = color(255,0,0);
    }

  }
  
  
  drawSprites();

  


}
