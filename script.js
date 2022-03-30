var rating = "0";

function thnx() {
	var elem = document.getElementById("container");
  	elem.parentNode.removeChild(elem);
  	document.getElementById("thnxcontainer").style.display = "block";
  	document.getElementById("info").innerHTML = "You selected "+ rating + " out of 5";
}

function c1(){
	if (rating != "0"){
		document.getElementById("cont" + rating).style.color = "hsl(216, 12%, 54%)";
		document.getElementById("cont" + rating).style.background = "rgba(31,38,48,255)";
	}
	document.getElementById("cont1").style.color = "white";
	document.getElementById("cont1").style.background = "hsl(217, 12%, 63%)";
	rating = "1";
}

function c2(){
	if (rating != "0"){
		document.getElementById("cont" + rating).style.color = "hsl(216, 12%, 54%)";
		document.getElementById("cont" + rating).style.background = "rgba(31,38,48,255)";
	}
	rating = "2";
	document.getElementById("cont2").style.color = "white";
	document.getElementById("cont2").style.background = "hsl(217, 12%, 63%)";
}

function c3(){
	if (rating != "0"){
		document.getElementById("cont" + rating).style.color = "hsl(216, 12%, 54%)";
		document.getElementById("cont" + rating).style.background = "rgba(31,38,48,255)";
	}
	rating = "3";
	document.getElementById("cont3").style.color = "white";
	document.getElementById("cont3").style.background = "hsl(217, 12%, 63%)";
}

function c4(){
	if (rating != "0"){
		document.getElementById("cont" + rating).style.color = "hsl(216, 12%, 54%)";
		document.getElementById("cont" + rating).style.background = "rgba(31,38,48,255)";
	}
	rating = "4";
	document.getElementById("cont4").style.color = "white";
	document.getElementById("cont4").style.background = "hsl(217, 12%, 63%)";
}

function c5(){
	if (rating != "0"){
		document.getElementById("cont" + rating).style.color = "hsl(216, 12%, 54%)";
		document.getElementById("cont" + rating).style.background = "rgba(31,38,48,255)";
	}
	rating = "5";
	document.getElementById("cont5").style.color = "white";
	document.getElementById("cont5").style.background = "hsl(217, 12%, 63%)";
}