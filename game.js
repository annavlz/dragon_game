function random(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

//player

playerX = 600;
playerY = 300;

window.addEventListener('keydown', function(e) {
    
    switch (e.keyCode) {
    	case 37: playerX -= 20; //left
    			 document.getElementById("player").style.left = playerX+"px";
    			 console.log(playerX, playerY, coin1X, coin1Y);
    			 coinGather();
    	break;

    	case 38: playerY -= 20; //up
    			 document.getElementById("player").style.top = playerY+"px";
    			     			 console.log(playerX, playerY, coin1X, coin1Y);
    			     			     			 coinGather();


    	break;

    	case 39: playerX += 20; //right
    			 document.getElementById("player").style.left = playerX+"px";
    			     			 console.log(playerX, playerY, coin1X, coin1Y);
    			     			     			 coinGather();


    	break;

    	case 40: playerY += 20;  //down
    			 document.getElementById("player").style.top = playerY+"px";
    			     			 console.log(playerX, playerY, coin1X, coin1Y);
    			     			     			 coinGather();


    	break;

        
    }
});

//coins

coin1X = random(1,50)*20;
coin1Y = random(1,30)*20;
coin2X = random(1,50)*20;
coin2Y = random(1,30)*20;
coin3X = random(1,50)*20;
coin3Y = random(1,30)*20;
coin4X = random(1,50)*20;
coin4Y = random(1,30)*20;
coin5X = random(1,50)*20;
coin5Y = random(1,30)*20;


document.getElementById('coin1').style.left = coin1X+"px";
document.getElementById('coin1').style.top = coin1Y+"px";

document.getElementById('coin2').style.left = coin2X+"px";
document.getElementById('coin2').style.top = coin2Y+"px";

document.getElementById('coin3').style.left = coin3X+"px";
document.getElementById('coin3').style.top = coin3Y+"px";

document.getElementById('coin4').style.left = coin4X+"px";
document.getElementById('coin4').style.top = coin4Y+"px";

document.getElementById('coin5').style.left = coin5X+"px";
document.getElementById('coin5').style.top = coin5Y+"px";


//dragon


//coin gathering
coinCount = 0;
function coinGather() {
	if ((coin1X === playerX) && (coin1Y === playerY)) {
		coinCount++;
		document.getElementById('coin1').style.left = "0px";
		document.getElementById('coin1').style.top = "0px";
		winner();
	}
	else if (coin2X === playerX && coin2Y === playerY) {
		coinCount++;
		document.getElementById('coin2').style.left = "0px";
		document.getElementById('coin2').style.top = "0px";
		winner();
	}
	else if (coin3X === playerX && coin3Y === playerY) {
		coinCount++;
		document.getElementById('coin3').style.left = "0px";
		document.getElementById('coin3').style.top = "0px";
		winner();
	}
	else if (coin4X === playerX && coin4Y === playerY) {
		coinCount++;
		document.getElementById('coin4').style.left = "0px";
		document.getElementById('coin4').style.top = "0px";
		winner();
	}
	else if (coin5X === playerX && coin5Y === playerY) {
		coinCount++;
		document.getElementById('coin5').style.left = "0px";
		document.getElementById('coin5').style.top = "0px";
		winner();
	}
	else {

	}
}

//winning
function winner() {
	if (coinCount === 5) {
		alert("YOU WIN!")
	}
}

