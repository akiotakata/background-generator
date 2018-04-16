var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.getElementById("random");



function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function setRandomGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ getRandomColor() 
	+ ", " 
	+ getRandomColor()
	+ ")";

	css.textContent = body.style.background + ";";
}

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

setGradient()

// color1.value = colors[0];
// color2.value = colors[1];

// setGradient();

// //clear array
// colors = [];

// function getRandomColor1() {
// 	'#'+Math.floor(Math.random()*16777215).toString(16);
// }





// function setRandomColor() {
//   $("#colorpad").css("background-color", getRandomColor());
// }

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
button.addEventListener("click", setRandomGradient);

