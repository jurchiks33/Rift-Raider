// sketch.js

let map;

function setup()
{
    createCanvas(800, 400);
    map = new Map();
}

function draw() 
{
    background(135, 206, 235); //sky blue background
    map.update();
    map.display();
}

function keyPressed()
{
    if (keyCode === RIGHT_ARROW)
    {
        map.move(-5);   //move map left when right arrow is pressed
    } else if (keycode ===LEFT_ARROW)
    {
        map.move(5);   //move map right when left arrow is pressed
    }
}