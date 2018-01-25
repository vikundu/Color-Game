var numSquares=6;
var colors=generateRandomColors(numSquares);

var pickedColor=pickColor();
var colorDisplay=document.querySelector("#colorDisplay");
var correctColor;
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton= document.querySelector("button");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");

colorDisplay.textContent=pickedColor;


resetButton.addEventListener("click",function(){

	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();

	h1.style.backgroundColor="steelblue";
	colorDisplay.textContent=pickedColor;

	for(var i = 0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}

	//testing the git

 });


easyBtn.addEventListener("click",function(){
	
	numSquares=3;
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");

	colors=generateRandomColors(3);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;

	for(var i =0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}

		else{
			squares[i].style.display="none";
		}
	}

});


hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");

	numSquares=6;
	colors=generateRandomColors(6);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	
	for(var i =0;i<squares.length;i++){
			squares[i].style.backgroundColor=colors[i];
			squares[i].style.display="block";
		
	}	

});

for(var i=0;i<squares.length;i++){

	squares[i].style.backgroundColor= colors[i];

	squares[i].addEventListener("click",function(){
		correctColor=this.style.backgroundColor;
		if(pickedColor===correctColor)
		{
			message.textContent="Correct!!";
			//resetButton.textContent="Play Again?";
			changeColor(pickedColor);
			h1.style.backgroundColor=pickedColor;
		}	
	else{
			message.textContent="Try again";
			this.style.backgroundColor="#232323";
		}
	});

	
}


function changeColor(color){

	for (var i = 0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor=color;
	}
}


function pickColor(){

	var random=Math.floor(Math.random()*colors.length);
	return colors[random];
}



function generateRandomColors(num){

	var arr=[];

	for (var i = 0;i<num;i++)
	{
		arr.push(randomColor());
	}
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random()*256);
	var g = Math.floor(Math.random()*256);
	var b = Math.floor(Math.random()*256);

	return("rgb("+r+", "+g+", "+b+")");
}

