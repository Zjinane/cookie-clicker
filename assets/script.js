var click = 1;
var score = 0;
var prixMulti = 10;
var auto = 0;
var prixAuto = 50;

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
    afficheScore.innerHTML = score;
});

btnMulti.addEventListener("click", function() {
    var testeurScore = score - prixMulti;
    if (testeurScore >= 0) {
        click = click + 1;
        score = score - prixMulti;
        prixMulti = prixMulti * 2;
        multi.innerHTML = click;
        afficheScore.innerHTML = score;
        affichePrixMulti.innerHTML = "Multiplicateur (prix = " + prixMulti + ")";
    } else {
        alert("Il te faut plus de cliques !!!");
    }
});

btnAuto.addEventListener("click", function() {
    var testeurScore = score - prixAuto;
    if (testeurScore >= 0) {
        score = score - prixAuto;
        afficheScore.innerHTML = score;
        auto = auto + 1;
        prixAuto = prixAuto * 2;
        afficheAuto.innerHTML = auto;
        affichePrixAuto.innerHTML = "Auto-click (prix = " + prixAuto + ")";
    } else {
        alert("Il te faut plus de cliques !!!");
    }
});

function autoclick() {
    score = score + auto;
    afficheScore.innerHTML = score;
}

setInterval(autoclick, 1000);

function bonus() {
    for (let i = 30; i < 0; i--) {
        setTimeout(function() {
            document.getElementById("afficheBonus").innerHTML = i;
        }, 1000);
    }
}

btnBonus.addEventListener("click", function() {
    var i = 0;
    while(i>=0){
        setTimeout(intervale, 1000);
        i++;
    }
    function intervale(){
        afficheBonus.innerHTML = i;
        
    }
});