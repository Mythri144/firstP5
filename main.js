let angle = 90;

function setup(){

    canvas = createCanvas(500, 400);
    video = createCapture(VIDEO);
    video.hide();
    video.center();
    canvas.center();
    angleMode(DEGREES);

}

function draw(){

    image(video, 230, 150, 220, 200);
    
    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(50, 50, 80);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 320, 20);

    fill(255, 0, 0);
    stroke(255, 0, 0);
    circle(450, 50, 80);

    rotate(angle);
    fill(0, 128, 0);
    stroke(0, 128, 0);
    rect(90, 40, 320, 20);

}