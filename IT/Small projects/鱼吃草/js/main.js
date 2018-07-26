var canvas1;
var canvas2;
var context1;
var context2;
var canWidth;
var canHeight
var bgPic = new Image();

var ane;
var fruit;

var mom;
var baby;

var mx;
var my;

var babyTail = [];
var babyEye = [];
var babyBody = [];

var momTail = [];
var momEye = [];
var momBodyOra = [];
var momBodyBlue = [];

var data;

document.body.onload = game;
function game() {
	init();
	lastTime = Date.now();
	deltaTime = 0;
	gameloop();
}

	
function init() {
	canvas1 = document.getElementById('canvas1');//fishes,dust,UI,circle
	context1 = canvas1.getContext('2d');
	canvas2 = document.getElementById('canvas2');//background,ane,fruits
	context2 = canvas2.getContext('2d');



	canvas1.addEventListener('mousemove', onMouseMove, false);


	bgPic.src = "./src/background.jpg";
	
	canWidth = canvas1.width;
	canHeight = canvas1.height;
	
	ane = new aneObj();
	ane.init();

	fruit = new fruitObj();
	fruit.init();

	mom = new momObj();
	mom.init();

	baby = new babyObj();
	baby.init();
	
	mx = canWidth * 0.5;
	my = canHeight * 0.5;

	for (var i = 0; i < 8; i++) {
		babyTail[i] = new Image();
		babyTail[i].src = "./src/babyTail" + i + ".png";
	}

	for (var i = 0; i < 2; i++) {
		babyEye[i] = new Image();
		babyEye[i].src = "./src/babyEye" + i + ".png";
	}

	for (var i = 0; i < 20; i++) {
		babyBody[i] = new Image();
		babyBody[i].src = "./src/babyFade" + i + ".png";
	}
	
	for (var i = 0; i < 8; i++) {
		momTail[i] = new Image();
		momTail[i].src = "./src/bigTail" + i + ".png";
	}
	
	for (var i = 0; i < 2; i++) {
		momEye[i] = new Image();
		momEye[i].src = "./src/bigEye" + i + ".png";
	}

	data = new dataObj();
	for (var i = 0; i < 8; i++) {
		momBodyOra[i] = new Image();
		momBodyBlue[i] = new Image();
		momBodyOra[i].src = "./src/bigSwim" + i + ".png";
		momBodyBlue[i].src = "./src/bigSwimBlue" + i + ".png";

	}
	context1.font = "30px Verdana";
	context1.textAlign = "center";


}

function gameloop() {
	window.requestAnimFrame(gameloop);
	var now = Date.now();
	deltaTime = now - lastTime;
	lastTime = now;
	if (deltaTime > 40) deltaTime = 40;


	drawBackground();
	ane.draw();
	fruitMonitor();
	fruit.draw();

	context1.clearRect(0,0,canWidth,canHeight);
	mom.draw();
	baby.draw();
	// 大鱼和果实碰撞
	momFruitsCollision();
	//大鱼和小鱼碰撞
	momBabyCollision();

	data.draw();
	
}

function onMouseMove(e) {
	if (e.offsetX || e.layerX) {
		mx = e.offsetX == undefined ? e.layerX : e.offsetX;
		my = e.offsetY == undefined ? e.layerY : e.offsetY;
	}
}










































