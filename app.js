const canvas = document.getElementById('myCanvas');
const c = canvas.getContext('2d');

canvas.height = window.innerHeight;
canvas.width = window.innerWidth;

const canvasWidth = canvas.width;
const canvasHeight = canvas.height;
let startingRadius = 400;
let circleNum = 0;
function Circle(xCenter,yCenter){
    this.num = circleNum;
    this.xCenter = xCenter;
    this.yCenter = yCenter;
    this.radius = startingRadius/(this.num+1);
    circleNum++;
    this.draw = function(){
        c.beginPath();
        c.arc(this.xCenter,this.yCenter,this.radius,0,Math.PI *2);
        c.stroke();
    }
}


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
let bigCircle = new Circle(circleX,circleY);
bigCircle.draw();

//circle 2
let circle2X = Math.floor(Math.random()*(startingRadius*2))+bigCircle.xCenter-startingRadius
let circle2Y = Math.floor(Math.random()*(startingRadius*2))+bigCircle.yCenter-startingRadius
let radius2 = startingRadius/2;
//TODO make random from difference so it isn't always in the center
if(circle2X+radius2>bigCircle.xCenter+startingRadius){
    let diff = circle2X -bigCircle.xCenter;
    circle2X = circle2X - diff;
}else if(circle2X-radius2<bigCircle.xCenter-startingRadius){
    let diff = circle2X -bigCircle.xCenter;
    circle2X = circle2X - diff;
}
if(circle2Y+radius2>bigCircle.yCenter+startingRadius){
    let diff = circle2Y-bigCircle.yCenter;
    circle2Y = circle2Y - diff
}else if(circle2Y-radius2<bigCircle.yCenter-startingRadius){
    let diff = circle2Y-bigCircle.yCenter;
    circle2Y = circle2Y - diff 
}
let smallCircle = new Circle(circle2X,circle2Y)
smallCircle.draw();

let dy = bigCircle.yCenter - smallCircle.yCenter;
let dx = bigCircle.xCenter - smallCircle.xCenter;
console.log(dx,dy)
//TODO: Fix bug where circle can go outside because corners
function checker(){
    c.clearRect(0, 0, canvasWidth, canvasHeight)
    if(dy!=0 || dx!=0){
    console.log(dx,dy);
        if(dy>0){
            bigCircle.yCenter--;
            dy = dy - 1
        } 
        if(dy<0){
            bigCircle.yCenter++;
            dy = dy + 1;
        }
        if(dx>0){
            bigCircle.xCenter--;
            dx = dx - 1;
        }
        if(dx<0){
            bigCircle.xCenter++;
            dx = dx + 1;
        }
    }
    if(bigCircle.radius!==smallCircle.radius){
        bigCircle.radius--;
    }
    bigCircle.draw();
    smallCircle.draw();
    //&&smallCircle.yCenter===bigCircle.yCenter && smallCircle.radius===bigCircle.radius
    if(smallCircle.xCenter===bigCircle.xCenter&&smallCircle.yCenter===bigCircle.yCenter && smallCircle.radius===bigCircle.radius){
        console.log("ok")
    }else{
        window.requestAnimationFrame(checker);
    }
}
checker();