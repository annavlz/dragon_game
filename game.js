playerX = 600;
playerY = 300;


window.addEventListener('keydown', function(e) {
    
    switch (e.keyCode) {
    	case 37: playerX -= 20; //left
    			 document.getElementById("player").style.left = playerX+"px";
    	break;

    	case 38: playerY -= 20; //up
    			 document.getElementById("player").style.top = playerY+"px";
    	break;

    	case 39: playerX += 20; //right
    			 document.getElementById("player").style.left = playerX+"px";
    	break;

    	case 40: playerY += 20;  //down
    			 document.getElementById("player").style.top = playerY+"px";
    	break;

        
    }
});

