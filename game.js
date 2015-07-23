function random(dir) {
  if (dir == "y") {
    return (Math.floor(Math.random() * 30 + 1)) * 20;
  }
  if (dir == "x") {
    return (Math.floor(Math.random() * 50 + 1)) * 20;
  }
}
//moving
window.addEventListener('keydown', function(e) {

    switch (e.keyCode) {
    	case 37: playerX -= 20; //left
    		move();
    	break;

    	case 38: playerY -= 20; //up
    		move();
    	break;

    	case 39: playerX += 20; //right
    		move();
    	break;

    	case 40: playerY += 20;  //down
    		move();
    	break;


    }
});

var move = function(){
	movePlayer();
	moveDragon();
	gatherCoin();
  winner();
};

//player

playerX = 600;
playerY = 300;

var movePlayer = function(){
	document.getElementById("player").style.left = playerX+"px";
	document.getElementById("player").style.top = playerY+"px";
};

//dragon

dragonX = 300;
dragonY = 600;

var moveDragon = function() {
	dragonX = random("x");
	dragonY = random("y");
	document.getElementById("dragon").style.left = dragonX+"px";
  document.getElementById("dragon").style.top = dragonY+"px";

};

var dragonGetsPlayer = function() {
  return (dragonX === playerX) && (dragonY === playerY);
};

//coins
function getRandomCoin() {
	var left = random("x");
	var top = random("y");
	return {x: left, y: top};
}

var coins = [
	getRandomCoin(),
	getRandomCoin(),
	getRandomCoin(),
	getRandomCoin(),
	getRandomCoin()
];

for (var i = 0; i < coins.length; i++) {
	var coin = "coin"+i;
	document.getElementById(coin).style.left = coins[i].x+"px";
	document.getElementById(coin).style.top = coins[i].y+"px";
}


//coin gathering
function isGathered (coinX, coinY){
	return (coinX === playerX) && (coinY === playerY);
}
var collectCoin = function(coin) {
	coinCount++;
	document.getElementById(coin).style.left = "0px";
	document.getElementById(coin).style.top = "0px";
};

coinCount = 0;
function gatherCoin() {
	for (var i = 0; i < coins.length; i++) {
		var coinX = coins[i].x;
		var coinY = coins[i].y;

		if (isGathered(coinX, coinY)) {
			collectCoin('coin'+i);

		}
	}
}

//winning
function winner() {
	if (coinCount === coins.length) {
		alert("YOU WIN!");
	}
	if (dragonGetsPlayer()) {
		alert("YOU LOST!");
	}
}

