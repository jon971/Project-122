function preload(){
}

function setup(){
    canvas=createCanvas(640,480);
    canvas.position(110,250);
    video=createCapture(VIDEO);
    video.size(300,200)
    video.hide();

    tint_color="";
}
function draw(){
    image(video,150,120,300,200);
    fill("red");
    circle(50, 50, 40); 
    circle(590, 50, 40);
    circle(50, 430, 40);
    circle(590, 430, 40);
    fill("green");
    rect(70,40,500,20);
    rect(70,420,500,20);
    rect(40,65,20,350);
    rect(580,65,20,350);
}

function take_snapshot(){
    save('student_name.png');
}

function filter_tint()
{
    tint_color=document.getElementById("color_name").value
}