// sketch.js

let gameMap;

function setup() {
  createCanvas(1800, 800);
  gameMap = new GameMap(); 
}

function draw() {
  background(135, 206, 235); // Sky blue background
  gameMap.update(); // Correct function call
  gameMap.display();
}

function keyPressed() {
  if (keyCode === RIGHT_ARROW) {
    gameMap.move(-5); // Move map left when right arrow is pressed
  } else if (keyCode === LEFT_ARROW) {
    gameMap.move(5); // Move map right when left arrow is pressed
  }
}
