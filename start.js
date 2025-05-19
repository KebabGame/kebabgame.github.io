	/*
	The Kebab Game -- https://kebabgame.github.io
	Made by Dennis2008
	*/
	
	var coin = new Image(100, 100);
	var kebap = document.getElementById("kebap"); //gets the html element of kebap
		kebap.style.left = "100px"; kebap.style.top = "100px"; //sets some style settings
	
	spawnCoin(); //spawns the first coin
	
	//Functions
	
	function isOverlapping(element1, element2) //Checks if two element are overlapping
	{
		const rect1 = element1.getBoundingClientRect();
		const rect2 = element2.getBoundingClientRect(); 
		return !( 
			rect1.right < rect2.left ||    // Element 1 is left of Element 2 
			rect1.left > rect2.right ||    // Element 1 is right of Element 2 
			rect1.bottom < rect2.top ||    // Element 1 is above Element 2 
			rect1.top > rect2.bottom       // Element 1 is below Element 2 
		); 
	}
	
	function checkOverlapping() //checks if kebap overlaps with a coin
	{
		if(isOverlapping(kebap, coin))
		{	
			deleteCoin(); //deletes the coin
			addMoney(); //adds money
			spawnCoin(); //spawn another coin
		}
	}
	
	function deleteCoin() //Deletes the coin
	{
		document.getElementById("coin").remove();
	}
	
	function createCoin() //Creates the coin
	{
		var x = 0;
		var y = 0;
		typeOfCoin = parseInt(Math.random() * 5);
		if(typeOfCoin==0)
		{
			coin.src = "resources/coin1.png";
		}
		else
		{
			coin.src = "resources/coin.png";
		}
		coin.id = "coin";
		coin.style.zIndex = 1;
		coin.style.position = 'absolute';
	}
	
	function createCoinPosition() //Generates the coin's random position and applies it
	{
		const rectKebap = kebap.getBoundingClientRect();
		do{
			y = Math.random()*(screen.height-250);
			x = Math.random()*(screen.width-200);
		}
		while((y>rectKebap.bottom-100 && y<rectKebap.top+100) || (x>rectKebap.left-100 && x<rectKebap.right+100));
		coin.style.top = y + "px";
		coin.style.left = x + "px";
	}
	
	function spawnCoin() //Spawns a coin in a random position
	{
		createCoin();
		createCoinPosition();
		document.body.appendChild(coin);
	}