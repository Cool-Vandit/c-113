function preload(){
}

function setup(){
    canvas = createCanvas(400,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video,75,75,250,250);

    fill(180,220,100);
    stroke(77,19,120);
    rect(35,25,325,325);
    
    fill(240,25,68);
    stroke(67,60,2);
    circle(35,25,100);
    circle(375,25,100);
    circle(35,375,100);
    circle(375,375,100);
}