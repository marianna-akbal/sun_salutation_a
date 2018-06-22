let canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let c = canvas.getContext('2d');

function Circle(){

}


let x1 = Math.random() * innerWidth;
let y1 = Math.random() * innerHeight;
let dx1 = (Math.random() - 0.5) * 4;
let dy1 = (Math.random() - 0.5) * 4;
let radius1 = 10;
let fillstyle1 = "#3f4749";

let x2 = Math.random() * innerWidth;
let y2 = Math.random() * innerHeight;
let dx2 = (Math.random() - 0.5) * 2;
let dy2 = (Math.random() - 0.5) * 2;
let radius2 = 20;
let fillstyle2 = "#efe039";

let x3 = Math.random() * innerWidth;
let y3 = Math.random() * innerHeight;
let dx3 = (Math.random() - 0.5) * 3;
let dy3 = (Math.random() - 0.5) * 3;
let radius3 = 15;
let fillstyle3 = "#3f4749";

let x4 = Math.random() * innerWidth;
let y4 = Math.random() * innerHeight;
let dx4 = (Math.random() - 0.5) * 4;
let dy4 = (Math.random() - 0.5) * 4;
let radius4 = 8;
let fillstyle4 = "#efe039";

function animateCircle(x, y, dx, dy, radius, fillstyle) {
  c.beginPath();
  c.arc(x, y, radius, 0, Math.PI *2, false);
  c.fillStyle = fillstyle;
  c.fill();

  if( x + radius > innerWidth  || x - radius < 0 ){
    dx = -dx;
  }

  if( y + radius > innerHeight || y - radius < 0) {
    dy = -dy;
  }

  x += dx;
  y += dy;

  return {
    x: x,
    y: y,
    dx: dx,
    dy: dy
  };
}

function animate() {
  requestAnimationFrame(animate);
  c.clearRect(0, 0, innerWidth, innerHeight);

  let newXY = animateCircle(x1, y1, dx1, dy1, radius1, fillstyle1);
  x1 = newXY.x;
  y1 = newXY.y;
  dx1 = newXY.dx;
  dy1 = newXY.dy;

  let newXY2 = animateCircle(x2, y2, dx2, dy2, radius2, fillstyle2);
  x2 = newXY2.x;
  y2 = newXY2.y;
  dx2 = newXY2.dx;
  dy2 = newXY2.dy;

  let newXY3 = animateCircle(x3, y3, dx3, dy3, radius3, fillstyle3);
  x3 = newXY3.x;
  y3 = newXY3.y;
  dx3 = newXY3.dx;
  dy3 = newXY3.dy;

  let newXY4 = animateCircle(x4, y4, dx4, dy4, radius4, fillstyle4);
  x4 = newXY4.x;
  y4 = newXY4.y;
  dx4 = newXY4.dx;
  dy4 = newXY4.dy;
}

animate();
