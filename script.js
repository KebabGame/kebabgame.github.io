	/**
	The Kebab Game -- kebapSite.github.io
	Made by Dennis2008
	*/
	var USER;
	var money = 0;
	var typeOfCoin = 1;
	var timeCounter = 0;
	var coin = new Image(100, 100);
	var kebap = document.getElementById("kebap"); //gets the html element of kebap
		kebap.style.left = "100px"; kebap.style.top = "100px"; //sets some style settings
	spawnCoin(); //spawns the first coin
	document.addEventListener("keydown", function (e) {
		fun(e.code);
	});
	setInterval(function (){
		document.getElementById("timer").innerHTML = "Timer: " + timeCounter + "s";
		timeCounter = timeCounter + 1;
	}, 1000);
	
	/**
	//Connect to Database
	var mysql = require("mysql");
	var hostname = "sql7.freesqldatabase.com";
	var database = "sql7738067";
	var port ="3306";
	var username = "sql7738067";
	var password = "7aaNn2lMYm";
	var con = mysql.createConnection({
		host: hostname,
		user: username,
		password: password
	});
	con.connect(function (err) {
		if (err) throw err;
		con.query("SELECT * FROM users", function (err, result, fields) {
			if (err) throw err;
			if(result.user !== USER)
			{
				con.query("INSERT INTO users (user, money) VALUES (?, ?))", [USER, money], function (err, result) {
					if (err) throw err;
				});
			}
			else
			{
				money = result.money;
			}
		});
	});	*/
	
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
	
	function showChangeFood()
	{
		var x = document.getElementById("hide");
		if (x.style.display === "none") 
		{
			x.style.display = "block";
		} else {
			x.style.display = "none";
		}
	}
	
	function changeFood(g) //changes the food by changing it's image
	{
		switch(g)
		{
			case 0: kebap.src = "kebab.png"; break;
			case 1: kebap.src = "burger.png"; break;
		}
	}
	
	function fun(b) //checks the button's input and moves the kebap
    {  
        if(b==="ArrowLeft")
        {  
            kebap.style.left=(parseInt(kebap.style.left)-50)+"px";
        }  
        if(b==="ArrowRight")  
        {  
                kebap.style.left=(parseInt(kebap.style.left)+50)+"px";
        }  
        if(b==="ArrowUp")
        {  
                kebap.style.top=(parseInt(kebap.style.top)-50)+"px";
        }  
        if(b==="ArrowDown")  
        {  
                kebap.style.top=(parseInt(kebap.style.top)+50)+"px";  
        }
		checkOverlapping(); //calls checkOverlapping()
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
	
	function addMoney() //Adds money
	{
		if(typeOfCoin==0)
		{
			money = money + 1;
		}
		else
		{
			money = money + 0.50;
		}
		/**con.query("UPDATE users SET money = ? WHERE user = ?", [money, USER], function (err, result) {
			if (err) throw err;
		});*/
		document.getElementById("points").innerHTML = "Money: " + money + " €";
	}
	
	function createCoin() //Creates the coin
	{
		var x = 0;
		var y = 0;
		typeOfCoin = parseInt(Math.random() * 5);
		if(typeOfCoin==0)
		{
			coin.src = "coin1.png";
		}
		else
		{
			coin.src = "coin.png";
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