class Game {
  constructor(){

  }

  play(){
      background(rgb(198,135,103));
      image(track, 0,-displayHeight*4,displayWidth, displayHeight*5);
          camera.position.x = displayWidth/2;
          camera.position.y = car1.y;
  
    if(keyIsDown(UP_ARROW)){
     car1.y -=10
    }

    drawSprites();
  }
  end(){
    console.log("Game Ended");
  }
}
