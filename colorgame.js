var numSquares=6;
var colors=[];
var pickedColor;
var correctColor;


var colorDisplay=document.querySelector("#colorDisplay");
var squares = document.querySelectorAll(".square");
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton= document.querySelector("button");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButtons=document.querySelectorAll(".mode");

//


init();

function init(){

	reset();
	
	colorDisplay.textContent=pickedColor;


	for(var i=0;i<modeButtons.length;i++)
	{
	
		modeButtons[i].addEventListener("click",function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			if(this.textContent==="Easy")
				numSquares=3;
			else
				numSquares=6;

			reset();
		});


	}

	for(var i=0;i<squares.length;i++){

	squares[i].style.backgroundColor= colors[i];

	squares[i].addEventListener("click",function(){
		correctColor=this.style.backgroundColor;
		if(pickedColor===correctColor)
		{
			message.textContent="Correct!!";
			resetButton.textContent="Play Again?";
			changeColor(pickedColor);
			h1.style.backgroundColor=pickedColor;
		}	
	else{
			message.textContent="Try again";
			this.style.backgroundColor="#232323";
		}
	});

	
}


}




function reset(){

	colors=generateRandomColors(numSquares);
	pickedColor=pickColor();
	h1.style.backgroundColor="steelblue";
	colorDisplay.textContent=pickedColor;
	message.textContent="";
	resetButton.textContent="New Colors";



	for(var i = 0;i<squares.length;i++){
		
		if(colors[i])
		{
			squares[i].style.display="block";
			squares[i].style.backgroundColor=colors[i];
		}

		else{
			squares[i].style.display="none";
		}
	}

}



resetButton.addEventListener("click",function(){

	reset();
	
 });





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

