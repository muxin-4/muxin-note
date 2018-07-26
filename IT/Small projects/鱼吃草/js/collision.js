//判断大鱼和果实的距离
function momFruitsCollision() {
	for (var i = 0; i < fruit.num; i++) {
		if (fruit.alive[i]) {
		    var l = calLength2(fruit.x[i], fruit.y[i], mom.x, mom.y);
		    if (l < 900) {
		    	//fruit eaten
		    	fruit.dead(i);
		    	data.fruitNum++;
		    	if (mom.momBodyCount < 6) {
		    		mom.momBodyCount++;
		    	}
		    	
		    	if (mom.momBody>7) {
		    		momBodyCount = 7;
		    	}
		    	if (fruit.fruitType[i] == "blue")//blue
		    	{
		    		data.double = 2;
		    	}
		    	if(fruit.fruitType[i]=="blue") {

					data.double=2;      //吃到蓝色果实

				} else {

					data.double=1;     //吃到橙色果实

				}
		    }
		}
	}
}

//mom baby collision
function momBabyCollision() {
	var l = calLength2(mom.x,mom.y,baby.x,baby.x);
	if (l<900) {
		//baby recover
		baby.babyBodyCount = 0;
		mom.momBodyCount = 0;

		data.addScore();
	}
}





































