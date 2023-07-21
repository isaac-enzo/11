
function preload(){

}

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
    drawSprites();
sea = loadImage("sea.png");
shipImg1 = loadAnimation(ship1.png, ship2.png );
spritename.addImage(seaImg);
 if(sea.x < 0){
  sea.x = sea.width/2;
 }
}
