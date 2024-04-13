song_1="";
song_2="";
leftWristX=0;
leftWristY=0;
rightWristX=0;
rightWristY=0;

function preload(){
    song=loadsound("music_1.mp3");
    song=loadsound("music_2.mp3")
}

function setup(){
    canavs=createCanvas(400,700);
    canvas.center();

    video=cretaeCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    pose.on('pose',gotPoses);
}

function gotPoses(result){
    if(result.length>0){
        console.log(result);
        leftWristX=result[0].poses.leftWrist.x;
        leftWristY=result[0].poses.leftWrist.y;
        console.log("leftWristX"+leftWristX+"leftWristY"+leftWristY);

        rightWristX=result[0].poses.rightWrist.x;
        rightWristY=result[0].poses.rightWrist.y;
        console.log("rightWristX"+rightWristX+"rightWristY"+rightWristY);
    }
}

function modelLoaded(){
    console.log('Posenet is Initialized!!');
}

function draw(){
    image(video,0,0,400,700);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}