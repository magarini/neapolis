let img1,img0;
let img2;
let img3;
let img4;
let img5;
let img6;
let img7;
let img8;
let img9;
let img10;
let img11;
let img12;
let img13;
let img14;
let img15;
let img16;
let img17;
let img18;
let img19;
let img20,img21,img22,img23,img24,img25,img26,img27,img28,img29,img30,img31,img32;
let sf = 1; // scaleFactor
let x = 0; // pan X
let y = 0; // pan Y
let img;
let mx, my; // mouse coords;

var dragging = false; // Is the object being dragged?
var rollover = false; // Is the mouse over the ellipse?

// var x, y, w, h;          // Location and size
var offsetX, offsetY;    // Mouseclick offset

let x1=500;
let y1=500;
let x2=6000;

function preload() {
img0 =loadImage('0.png');
img1 = loadImage('1.png');
img2 = loadImage('2.png');
img3 = loadImage('3.png');
img4 = loadImage('4.png');
img5 = loadImage('5.png');
img6 = loadImage('6.png');
img7 = loadImage('7.png');
img8 = loadImage('8.png');
img9 = loadImage('9.png');
img10 = loadImage('10.png');
img11 = loadImage('11.png');
img12 = loadImage('12.png');
img13 = loadImage('13.png');
img14 = loadImage('14.png');
img15 = loadImage('15.png');
img16 = loadImage('16.png');
img17 = loadImage('17.png');
img18 = loadImage('18.png');
img20 = loadImage('20.png');
img21 = loadImage('21.png');
img22 = loadImage('22.png');
img23 = loadImage('24.png');
img24 = loadImage('24.png');
img25 = loadImage('25.png');
img19 = loadImage('19.png');
img26 = loadImage('26.png');
img27 = loadImage('27.png');
img28= loadImage('28.png');
img29 = loadImage('29.png');
img30 = loadImage('30.png');
img31 = loadImage('31.png');
img32 = loadImage('32.png');




}

function setup() {
let canvas=createCanvas(innerWidth, innerHeight);
canvas.parent('sketch-div');
// img1.mouseOver(scaleImg);

}

function draw() {
background(254);
mx = mouseX;
  my = mouseY;
  translate(x,y);
//   translate(mx, my);
  scale(sf);
//   translate(-mx, -my);
//   translate();
textSize(30);
scale(0.5);
// push();
image(img4, 0, 0);
//kranos
image(img6, 2800, 500);
//parking
image(img10, 1200, 100);
//polukat
image(img20, 3900, 100);
image(img5, 1200, 2000);
image(img3, 100, 1800);

image(img7, 6500, 2700);
//glastres fwtot
image(img8, 2500, 2300);
//taksi
image(img9, 3500, 1800);
image(img11, 5000, 2100);
//roz ktirio
image(img13, 6600, 200);
image(img12, 5600, 600);
//kuria pou skuvei
image(img14, 4300, 2700);
image(img15, 7300, 3800);
image(img16, 500, 3000);
//parking gkri
image(img17, 2300, 3800);
//mpalkonoline
image(img28, 3700, 4300);
//portokali
image(img0, 6000, 4500);

image(img18, 8500, 1000);
//shmaia
image(img27, 9700, 1300);
image(img21, 10500, 1200);
//rakosullekths
image(img22, 7500, 2000);
//peristeri
image(img32, 8500, 3500);

text('7500',7500,20);
image(img23, 12000, 1000);
text('12000',12000,20);

image(img24, 8500, 4000);
image(img25, 5600, 4000);

//mpalkonotenta
image(img26, 9500, 3000);
//ompreles
image(img31, 11000, 3500);

//peristeri
image(img32, 3700, 3800);

//mpatsoi
image(img30, 10500, 2250);

image(img2, x2, y1+800);
image(img1, x1, y1);
scale(sf);


x1=x1+2;
x2=x2-3;

//perithwria pou vgainei ektos
if(x1>5000){
  x1=0;
}
if(x2<0){
  x2=5000;
}
// pop();

// if (mouseIsPressed) {
//     x -= pmouseX - mouseX-100;
//     y -= pmouseY - mouseY;
//   }
 
  if (dragging) {
    x = mouseX + offsetX;
    y = mouseY + offsetY;
  }

}


function mousePressed() {
    // Did I click on the rectangle?
      dragging = true;
      // If so, keep track of relative location of click to corner of rectangle
      offsetX = x-mouseX;
      offsetY = y-mouseY;
    
  }
  
  function mouseReleased() {
    // Quit dragging
    dragging = false;
  }

// function scaleImg(){

// }
// function keyPressed(){
// if (keyCode === 219) {
// x1 = x1-100;
// x2=x2+100;
// y1=y1-10;
// console.log(x);
// return x1;


//  } else if (keyCode === 221) {
// x1 = x1+100;
// y1=y1+10;
// x2=x2-100;
// console.log(x1);
// return x1;
// }
// }
window.addEventListener("wheel", function(e) {
  if (e.deltaY > 0)
    sf *= 1.05;
  else
    sf *= 0.95;
});