lips_x = 0;
lips_y = 0;
function preload(){
   lips = loadImage('https://i.postimg.cc/q7VhTFvq/lips-clipart-transparent-10.png');
}
function setup(){
   canvas=createCanvas(400,450);
   canvas.center(); 
   video = createCapture(VIDEO);
   video.size(300 , 300);
   video.hide();
   
   poseNet  = ml5.poseNet(video , modelLoaded);
   poseNet.on('pose', gotPoses);
} 

function modelLoaded(){
   console.log("PoseNet is initialized")
}

function gotPoses(results){
   if(results.length >  0){
       console.log(results);
       lips_x = results[0].pose.nose.x + 10;
       lips_y = results[0].pose.nose.y + 120;
       console.log("lips x = " + lips_x);
       console.log("lips y = " + lips_y);
   }
}

function draw(){
   image(video , 0 , 0 , 400 , 450);
   image(lips , lips_x , lips_y , 70 , 50);
}
function take_snapshot(){
save('myFilterImage.png'); 
}