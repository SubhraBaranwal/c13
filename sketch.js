var sea,ship,shipImage,seaImage
function preload(){
shipImage=loadImage("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
seaImage=loadImage("sea.png")
}

function setup(){
  createCanvas(1500,700);

sea=createSprite(0,0,400,400);
sea.velocityX=-3
sea.addImage(seaImage)



ship=createSprite(50,160,200,70);
shipImage.scale=0.05
ship.addImage(shipImage);


}

function draw() {
  background("blue");

 

if(sea.x<0){
   sea.x=sea.width/2;
}
  

drawSprites()

text("Subhra",200,200);

}