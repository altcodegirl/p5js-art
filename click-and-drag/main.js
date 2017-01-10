console.log("hi");

var diameter = 180;
var isFirstClick = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0,0,0,0.1);
  stroke(255);
  textSize(100);
  textAlign(CENTER);
  text("click and drag", 0, windowHeight / 2 - 75, windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed && isFirstClick) {
    background(0);
    isFirstClick = false;
  }
  if (mouseIsPressed) {
    ellipse(mouseX, mouseY, diameter, diameter);
  }
}
