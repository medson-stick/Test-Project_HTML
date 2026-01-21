function setup() {
  createCanvas(window.innerWidth, 400);
  background(220);
}

function draw() {
  noStroke();
  fill(255, 85, 200, 50);
  circle(mouseX, mouseY, width*0.07);
}