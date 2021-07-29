var ball;
var database, position
function setup() {
    createCanvas(500, 500);
    ball = createSprite(250, 250, 10, 10);
    ball.shapeColor = "red";
    database = firebase.database();
    var ballref = database.ref("ball/position")
    ballref.on("value", readPosition, showError)
}

function draw() {
    background("white");
    if(position!== undefined){
    if (keyDown(LEFT_ARROW)) {
        writePosition(-2, 0);
    }
    else if (keyDown(RIGHT_ARROW)) {
        writePosition(2, 0);
    }
    else if (keyDown(UP_ARROW)) {
        writePosition(0, -2);
    }
    else if (keyDown(DOWN_ARROW)) {
        writePosition(0, +2);
    }
    drawSprites();
    }
}

function writePosition(x, y) {
database.ref("ball/position").set({
"x": position.x+x, "y": position.y+y
})
}
function readPosition(data) {
    position = data.val()
    ball.x = position.x
    ball.y = position.y
}
function showError()
{
console.log("ErrorOccurred")    
}