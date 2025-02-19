	/*
	The Kebab Game -- https://kebapSite.github.io
	Made by Dennis2008
	*/
	let money = 0;
	let typeOfCoin = 1;
	let seconds = 0, minutes = 0;
	let coin = new Image(100, 100);
	let kebap = document.getElementById("kebap"); //gets the html element of kebap
		kebap.style.left = "100px"; kebap.style.top = "100px"; //sets some style settings
	main();
	
	function main()
	{
		//let fork = new Image(100, 100);
	
		spawnCoin(); //spawns the first coin
		//spawnFork();
	
		window.addEventListener("keydown", function(e) {
			move(e.code);
		});
		
		setInterval(function (){
			document.getElementById("timer").innerHTML = "Timer: " + minutes + "min and " + seconds + "s";
			seconds++;
			if(seconds == 60)
			{
				minutes++;
				seconds = 0;
			}
		}, 1000);
	}
	
	function move(b) { //checks the button's input and moves the kebab
		if(b=="ArrowLeft" || b=="KeyA") {  
			kebap.style.left=(parseInt(kebap.style.left)-50)+"px";
        }  
        else if(b=="ArrowRight" || b=="KeyD") {  
            kebap.style.left=(parseInt(kebap.style.left)+50)+"px";
        }  
        else if(b=="ArrowUp" || b=="KeyW") {  
            kebap.style.top=(parseInt(kebap.style.top)-50)+"px";
        }  
        else if(b=="ArrowDown" || b=="KeyS") {  
            kebap.style.top=(parseInt(kebap.style.top)+50)+"px";
        }
		else if(b=="Digit1")
		{
			changeFood(0);
		}
		else if(b=="Digit2")
		{
			changeFood(1);
		}
		else if(b=="Digit3")
		{
			changeFood(2);
		}
		checkCoin(); //calls checkOverlapping()
    }
	
	function checkCoin() { //checks if kebap overlaps with a coin
		if(isOverlapping(kebap, coin)) {	
			deleteCoin(); //deletes the coin
			addMoney(); //adds money
			spawnCoin(); //spawn another coin
		}
	}
	
	function spawnCoin() { //Spawns a coin in a random position
		createCoin();
		createCoinPosition();
		document.body.appendChild(coin);
	}
	
	function spawnFork() {
		if(!forkSpawned && money>=80) {
			fork.id = "fork";
			fork.src = "fork.png";
			fork.style.zIndex = 1;
			fork.style.position = 'absolute';
			document.body.appendChild(fork);
			forkSpawned = true;
		}
	}
	
	function createCoin() { //Creates the coin
		var x = 0;
		var y = 0;
		typeOfCoin = parseInt(Math.random() * 5);
		if(typeOfCoin==0) {
			coin.src = "resources/coin1.png";
		}
		else {
			coin.src = "resources/coin.png";
		}
		coin.id = "coin";
		coin.style.zIndex = 1;
		coin.style.position = 'absolute';
	}
	
	function createCoinPosition() { //Generates the coin's random position and applies it
		const rectKebap = kebap.getBoundingClientRect();
		do {
			y = Math.random()*(screen.height-250);
			x = Math.random()*(screen.width-200);
		}
		while((y>rectKebap.bottom-100 && y<rectKebap.top+100) || (x>rectKebap.left-100 && x<rectKebap.right+100));
		coin.style.top = y + "px";
		coin.style.left = x + "px";
	}
	
	function deleteCoin() { //Deletes the coin
		document.getElementById("coin").remove();
	}
	
	function addMoney() { //Adds money
		if(typeOfCoin==0) {
			money = money + 1;
		}
		else {
			money = money + 0.50;
		}
		document.getElementById("points").innerHTML = "Money: " + money + " €";
	}
	
	function isOverlapping(element1, element2) { //Checks if two element are overlapping
		const rect1 = element1.getBoundingClientRect();
		const rect2 = element2.getBoundingClientRect(); 
		return !( 
			rect1.right < rect2.left ||    // Element 1 is left of Element 2 
			rect1.left > rect2.right ||    // Element 1 is right of Element 2 
			rect1.bottom < rect2.top ||    // Element 1 is above Element 2 
			rect1.top > rect2.bottom       // Element 1 is below Element 2 
		); 
	}
	
	function showChangeFood() {
		var hide = document.getElementById("hide");
		if (hide.style.display === "none") {
			hide.style.display = "block";
		} else {
			hide.style.display = "none";
		}
	}
	
	function changeFood(g) { //changes the food by changing it's image
		switch(g) {
			case 0: kebap.src = "resources/kebab.png"; break;
			case 1: kebap.src = "resources/burger.png"; break;
			case 2: kebap.src = "resources/curry.jpg"; break;
		}
	}