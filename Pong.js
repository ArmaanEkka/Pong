var playerPaddle;
var compPaddle;

function setup(){
  createCanvas(600,600);

  playerpaddle = createSprite(50,300,50,100);
  playerPaddle.debug = true;

  compPaddle = createSprite(550,300,50,100);
  compPaddle.debug = true;

  for (var r = 50; r < 400; r=r+50) {
    var line = createSprite(350, r, 20, 20);
    line.debug = true;
   
    }
  }    

function draw(){
    background("black");
    drawSprites();
}