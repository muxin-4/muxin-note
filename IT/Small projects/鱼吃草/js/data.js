var dataObj = function () {
	this.fruitNum = 0;
	this.double = 1;
	this.score = 0;
}

dataObj.prototype.draw = function () {
	var w = canvas1.width;
	var h = canvas1.height;

	context1.fillStyle = "white";
	context1.fillText("score" + this.score, w * 0.5, h - 20);
}
dataObj.prototype.addScore = function () {
	this.score += this.fruitNum * 100 * this.double;
	this.fruitNum = 0;
	this.double = 1;
	console.log(this.score);
}





























