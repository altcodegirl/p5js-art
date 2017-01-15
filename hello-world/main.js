var x = 0;

function setup() {
  createCanvas(600, 400);
  drawingContext.shadowOffsetX = 5;
  drawingContext.shadowOffsetY = -5;
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = "black";
  background(200);
}

function draw() {
  ellipse(x, height/2, 20, 20);
  x = x + 1;
}
