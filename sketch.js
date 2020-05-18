var ball;
var database;
var position;
function setup(){
    createCanvas(500,500);
    ball = createSprite(250,250,10,10);
    ball.shapeColor = "red";
    database=firebase.database();
    //read
    var location=database.ref('ball/position');
    location.on("value",readData,error);
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        changePosition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        changePosition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        changePosition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        changePosition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    database.ref('ball/position').set({
    x:position.x+x,
    y:position.y+y
    });
    //ball.x = ball.x + x;
    //ball.y = ball.y + y;
}
function readData(data){
position=data.val();
ball.x=pos.x;
ball.y=pos.y;
}
function error(){
console.log("error");
}
