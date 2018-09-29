const canvas = document.getElementById('myCanvas');
const c = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
const startingRadius = 400;
let circleX = Math.floor(Math.random()*canvasWidth);
let circleY = Math.floor(Math.random()*canvasHeight);
if(circleX+startingRadius>canvasWidth){
    circleX = circleX - startingRadius;
}else if(circleX-startingRadius<0){
    circleX+= startingRadius;
}
if(circleY+startingRadius>canvasHeight){
    circleY-= startingRadius;
}else if(circleY-startingRadius<0){
    circleY+= startingRadius;
}
c.beginPath();
c.arc(circleX,circleY,startingRadius,0,Math.PI *2);
c.stroke();
