var second,minute,hour;
var secondangle,minuteangle,hourangle;
var line1,line2,line3;

function setup() {
  createCanvas(800,400);
  hour=hour();
  minute=minute();
  second=second();
  secondangle=map(second,0,60,0,360);
  minuteangle=map(minute,0,60,0,360);
  hourangle=map(hour,0,60,0,360);
  line1=line(0,0,100,0);
  line2=line(0,0,100,0);
  line3=line(0,0,100,0);
  line1.rotate(secondangle);
  line2.rotate(minuteangle);
  line3.rotate(hourangle);
  angleMode(degrees);
}

function draw() {
  background(0);  
  translate(400,200)
  drawSprites();
}