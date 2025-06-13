
function preload() {
  rural = loadImage("24010.jpg")
}

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let x;
let y;


function setup() {
  createCanvas(600, 600);
  x = random(700);  
  y = random(300);
}

function draw() {
  background("#FFEB3B");
  image(rural,0,0,600,600)
  x = x + random(-5,5,);
  y = y + random(-5,5,);
  x = constrain(x,0,150);
  y = constrain(y,0,300);
  let distancia;
  distancia = dist(mouseX, mouseY, x, y);
  circle(mouseX, mouseY, distancia);
  //circle(x, y, 20);

  if (distancia < 7) {
    text("Encontrei!", 150, 250);
    noLoop();
  }
  
  
}