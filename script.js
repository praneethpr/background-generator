var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");

function setGradient() {
	console.log(color1);
	console.log(color2);
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";

	css.textContent = body.style.background + ";";
}

color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

color1.value = "#00ff00";
color2.value = "#ff0000";
setGradient();

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
    console.log(color);
  }
  // color += letters[Math.floor(Math.random() * 16)];
  return color;
}

function setInput() {
	color1.value = getRandomColor();
	color2.value = getRandomColor();
	setGradient();
}

var randomButton = document.querySelector(".random");
randomButton.addEventListener("click", setInput);