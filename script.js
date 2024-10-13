	spawnCoin();
	var points = 0;
	document.getElementById("points").innerHTML = localStorage.getItem("points");
	var a=document.getElementById("kebap");
    a.style.position="absolute";  
    a.style.left="0px";  
    a.style.top="0px";  
    a.style.right="0px";  
    a.style.down="0px";  
    function fun(b)  
    {  
        if(b==="left")  
        {  
            a.style.left=(parseInt(a.style.left)-50)+"px";  
        }  
        if(b==="right")  
        {  
                a.style.left=(parseInt(a.style.left)+50)+"px";  
        }  
        if(b==="up")  
        {  
                a.style.top=(parseInt(a.style.top)-50)+"px";  
        }  
        if(b==="down")  
        {  
                a.style.top=(parseInt(a.style.top)+50)+"px";  
        }
		checkOverlapping();
    }
	function isOverlapping(element1, element2) { 
    const rect1 = element1.getBoundingClientRect();
    const rect2 = element2.getBoundingClientRect(); 
 
    return !( 
        rect1.right < rect2.left ||    // Element 1 is left of Element 2 
        rect1.left > rect2.right ||    // Element 1 is right of Element 2 
        rect1.bottom < rect2.top ||    // Element 1 is above Element 2 
        rect1.top > rect2.bottom       // Element 1 is below Element 2 
    ); 
} 
	function spawnCoin()
	{
		var coin = new Image(100, 100);
		var x = 0;
		var y = 0;
		coin.src="coin.png";
		coin.id = "coin";
		coin.style.zIndex = -1;
		coin.style.position = 'absolute';
		const rectKebap = document.getElementById("kebap").getBoundingClientRect();
		do{
			y = Math.random()*(screen.height-200);
			x = Math.random()*(screen.width-200);
		}while((y>rectKebap.bottom-100 && y<rectKebap.top+100) || (x>rectKebap.left-100 && x<rectKebap.right+100));
		coin.style.top = y + "px";
		coin.style.left = x + "px";
		document.body.appendChild(coin);
		localStorage.setItem("points", "points");
	}

	function checkOverlapping()
	{
		if(isOverlapping(a, coin))
		{	
			document.getElementById("coin").remove();
			points = points + 0.5;
			document.getElementById("points").innerHTML = "Money: " + points.toString() + "€";
			spawnCoin();
		}
	}