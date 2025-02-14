var canvas, backgroundImage;
var car1, car2, car3, car4, cars, booster, boosterImage
var track, car1Image, car2Image, car3Image, car4Image,boostersGroup

var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;

var form, player, game;

function preload() {
  track = loadImage("../images/track.jpg")
  car1Image = loadImage("../images/car1.png")
  car2Image = loadImage("../images/car2.png")
  car3Image = loadImage("../images/car3.png")
  car4Image = loadImage("../images/car4.png")
  boosterImage = loadImage("../images/Boost_Token.png")

}

function setup(){
  canvas = createCanvas(displayWidth-25,displayHeight-25);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();
}


function draw(){
  if(playerCount === 2){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if (gameState === 2){
    game.end()
  }

}
