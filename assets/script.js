var click = 1;
var score = 0;
var prixMulti = 10;


var btnMulti = document.getElementById("btnMulti");
var afficheScore = document.getElementById("afficheScore");
var btnClick = document.getElementById("btnClick");
var multi = document.getElementById("multi");
var affichePrixMulti = document.getElementById("affichePrixMulti");


btnClick.addEventListener("click", function(){

	score = score + click ;
	afficheScore.innerHTML = score;

});

btnMulti.addEventListener("click",function(){

	click = click + 1 ;
	score = score - prixMulti;
	prixMulti = prixMulti * 2 ;
	multi.innerHTML = click;
	afficheScore.innerHTML = score;

});


