var database;
var gameState = 0, playerCount;
var form, game, player;
var allPlayers;
var c1, c2, c3, c4, car 

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth, displayHeight-30);
  game = new Game();
  game.gameState();
  game.start();

 
}

function draw(){
  background("white");
  if(playerCount===4){
    game.update(1)
  }
  if(gameState===1){
    clear()
    game.play()
  }
    
    drawSprites();
  
}



