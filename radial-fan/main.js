var diameter = 400;
var isFirstClick = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  fill(0);
  stroke(0);
  textSize(100);
  textAlign(CENTER);
  text("sketchpad", 0, windowHeight / 2 - 75, windowWidth, windowHeight);
}

function draw() {
  if (mouseIsPressed && isFirstClick) {
    background(255);
    isFirstClick = false;
  }
  if (mouseIsPressed) {
      line(mouseX, mouseY, width/2, height/2);
  }
}
