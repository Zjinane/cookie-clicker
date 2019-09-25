var click = 1;
var score = 0;
var prixMulti = 10;
var auto = 0;
var prixAuto = 50;
var bonus = false;

var btnMulti = document.getElementById("btnMulti");
var afficheScore = document.getElementById("afficheScore");
var btnClick = document.getElementById("btnClick");
var multi = document.getElementById("multi");
var affichePrixMulti = document.getElementById("affichePrixMulti");
var affichePrixAuto = document.getElementById("affichePrixAuto");
var afficheAuto = document.getElementById("afficheAuto");
var btnAuto = document.getElementById("btnAuto");
var afficheBonus = document.getElementById("afficheBonus");
var btnBonus = document.getElementById("btnBonus");

affichePrixMulti.innerHTML = "Multiplicateur (prix = " + prixMulti + ")";
affichePrixAuto.innerHTML = "Auto-click (prix = " + prixAuto + ")";

btnClick.addEventListener("click", function() {
    score = score + click;
    afficheScore.innerHTML = "Vous avez "+score+" planètes";
});

btnMulti.addEventListener("click", function() {
    var testeurScore = score - prixMulti;
    if (testeurScore >= 0) {
        click = click + 1;
        score = score - prixMulti;
        prixMulti = prixMulti * 2;
        multi.innerHTML = "Vos cliques sont multipliés par "+click;
        afficheScore.innerHTML = "Vous avez "+score+" planètes";
        affichePrixMulti.innerHTML = "Multiplicateur (prix = " + prixMulti + ")";
    } else {
        alert("Il te faut plus de cliques !!!");
    }
});

btnAuto.addEventListener("click", function() {
    var testeurScore = score - prixAuto;
       (testeurScore >= 0) 
        score = score - prixAuto;
        afficheScore.innerHTML = score;
        auto = auto + 1;
        prixAuto = prixAuto * 2;
        afficheAuto.innerHTML = "Vous avez "+auto+" cliques auto par secondes";
        affichePrixAuto.innerHTML = "Auto-click (prix = " + prixAuto + ")";
    
});

function autoclick() {
    score = score + auto;
    afficheScore.innerHTML = "Vous avez "+score+" planètes";
}

setInterval(autoclick, 1000);

function bonus() {
    for (let i = 30; i < 0; i--) {
        setTimeout(function() {
            afficheBonus.innerHTML = i;
        }, 1000);
    }
}

btnBonus.addEventListener("click", function() {

if(score >= 100){
	i=30;
    compte = setInterval(decompte,1000);
    click = click*2;
    auto = auto*2;
	bonus = true;
    score = score-100;
	btnMulti.disabled = true ;
	btnAuto.disabled = true ; 
}
else
{
alert("Il vous faut plus de cliques");
}

});
function decompte(){
    afficheBonus.innerHTML = "Temps restant : "+i+" sec";
    i--;
    if(i<=0){
        clearInterval(compte);
        afficheBonus.innerHTML = "Aucun bonus en cours";
        click = Math.round(click/2);
        auto = Math.round(auto/2);
		bonus = false;
		btnMulti.disabled = false;
		btnAuto.disabled = false;
		multi.innerHTML = click ;
		afficheAuto.innerHTML = auto;
}
}

function hideBtn(){
if(bonus == false){

if(score < prixMulti){
	btnMulti.disabled = true ;
}
else{
	btnMulti.disabled = false ;
}
if(score < prixAuto){
	btnAuto.disabled = true ;
}
else{
	btnAuto.disabled = false ;
}
if(score < 100){
	btnBonus.disabled = true;
}
else{
	btnBonus.disabled = false ;
}
}
}

setInterval(hideBtn,100);

