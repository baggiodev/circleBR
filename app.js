const canvas = document.getElementById('myCanvas');
const c = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const startingRadius = 400;

//circle 1
let circleX = Math.floor(Math.random()*canvasWidth);
let circleY = Math.floor(Math.random()*canvasHeight);
//right
if(circleX+startingRadius>canvasWidth){
    circleX = circleX - startingRadius;
//left
}else if(circleX-startingRadius<0){
    circleX+= startingRadius;
}
//bottom
if(circleY+startingRadius>canvasHeight){
    circleY-= startingRadius;
//top
}else if(circleY-startingRadius<0){
    circleY+= startingRadius;
}
c.beginPath();
c.arc(circleX,circleY,startingRadius,0,Math.PI *2);
c.stroke();

//circle 2
let circle2X = Math.floor(Math.random()*(startingRadius*2))+circleX-startingRadius
let circle2Y = Math.floor(Math.random()*(startingRadius*2))+circleY-startingRadius
let radius2 = startingRadius/2;
//TODO make random from difference so it isn't always in the center
if(circle2X+radius2>circleX+startingRadius){
    let diff = circle2X -circleX;
    circle2X = circle2X - diff;
}else if(circle2X-radius2<circleX-startingRadius){
    let diff = circle2X -circleX;
    circle2X = circle2X - diff;
}
if(circle2Y+radius2>circleY+startingRadius){
    let diff = circle2Y-circleY;
    circle2Y = circle2Y - diff
}else if(circle2Y-radius2<circleY-startingRadius){
    let diff = circle2Y-circleY;
    circle2Y = circle2Y - diff 
}
c.beginPath();
c.arc(circle2X,circle2Y,radius2,0,Math.PI*2);
c.stroke()
//TODO: Fix bug where circle can go outside because corners

//TODO find slope between two circles then redraw circles until they equal by changing the bigger circle(first)
