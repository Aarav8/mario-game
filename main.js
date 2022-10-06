img="";
noseX=0;
noseY=0;
marioX=300;
marioY=0;
function preload() {
	world_start = loadSound("world_start.wav");
	mario_jump= loadSound("jump.wav");
	mario_coin=loadSound("coin.wav");
	mario_kick=loadSound("kick.wav");
	mario_gameover= loadSound("gameover.wav");
	mario_die=loadSound("mariodie.wav");
	img=loadImage("mario01.png");
	setSprites();
	MarioAnimation();
	if(gamestatus="start")
	{
		world_start=loadSound("world_start.wav");
	}
}

function setup() {
	canvas = createCanvas(1100,375);
	video=createCapture(VIDEO);
	video.size(800,400);
	video.parent("video");
	canvas.parent("canvas");
	instializeInSetup(mario);

	posenet=ml5.poseNet(video,modelLoaded);
	posenet.on('pose',gotPoses);
}
function modelLoaded()
{
	console.log("modelLoaded");
}
function gotPoses(results)
{
	if(results.length>0)
	{
		noseX=results[0].pose.nose.x;
		noseY=results[0].pose.nose.y;
		console.log(noseX,noseY,results);
	}
}
function draw() 
{
	game();
	if(noseX<300)
	{
		marioX=marioX-1;
	}
	if(noseX>300)
	{
		marioX=marioX+1;
	}
	if(noseY<150)
	{
		marioY=marioY-1;
	}
	image(img,marioX,marioY,40,70);

}






