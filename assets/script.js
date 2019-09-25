var click = 1;
var score = 0;
var prixMulti = 10;
var auto = 0;
var prixAuto = 50;
var bonus = false;

var btnMulti = document.getElementById("multiplicator");
var afficheScore = document.getElementById("afficheScore");
var btnClick = document.getElementById("planet");
var multi = document.getElementById("afficheMulti");
var affichePrixMulti = document.getElementById("affichePrixMulti");
var affichePrixAuto = document.getElementById("affichePrixAuto");
var afficheAuto = document.getElementById("afficheAuto");
var btnAuto = document.getElementById("autoclick");
var afficheBonus = document.getElementById("afficheBonus");
var btnBonus = document.getElementById("bonus");
var save = document.getElementById("save");
var load = document.getElementById("load");

affichePrixMulti.innerHTML = "Multiplicateur (prix = " + prixMulti + ")";
affichePrixAuto.innerHTML = "Auto-click (prix = " + prixAuto + ")";

btnClick.addEventListener("click", function() {
    score = score + click;
    afficheScore.innerHTML = score;
});

btnMulti.addEventListener("click", function() {
    click = click + 1;
    score = score - prixMulti;
    prixMulti = prixMulti * 2;
    multi.innerHTML = click;
    afficheScore.innerHTML = score;
    affichePrixMulti.innerHTML = "Multiplicateur (prix = " + prixMulti + ")";
});

btnAuto.addEventListener("click", function() {
    var testeurScore = score - prixAuto;
    testeurScore >= 0;
    score = score - prixAuto;
    afficheScore.innerHTML = score;
    auto = auto + 1;
    prixAuto = prixAuto * 2;
    afficheAuto.innerHTML = auto;
    affichePrixAuto.innerHTML = "Auto-click (prix = " + prixAuto + ")";
});

function autoclick() {
    score = score + auto;
    afficheScore.innerHTML = score;
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
    i = 30;
    compte = setInterval(decompte, 1000);
    click = click * 2;
    auto = auto * 2;
    bonus = true;
    score = score - 100;
    btnMulti.disabled = true;
    btnAuto.disabled = true;
});

function decompte() {
    afficheBonus.innerHTML = i + " sec";
    i--;
    if (i <= 0) {
        clearInterval(compte);
        afficheBonus.innerHTML = "0";
        bonus = false;
        btnMulti.disabled = false;
        btnAuto.disabled = false;
    }
}

function hideBtn() {
    if (bonus == false) {
        if (score < prixMulti) {
            btnMulti.disabled = true;
        } else {
            btnMulti.disabled = false;
        }
        if (score < prixAuto) {
            btnAuto.disabled = true;
        } else {
            btnAuto.disabled = false;
        }
    }
    if (score < 100) {
        btnBonus.disabled = true;
    } else {
        btnBonus.disabled = false;
    }
}

setInterval(hideBtn, 100);

save.addEventListener("click", function() {
    localStorage.setItem("score", score);
    localStorage.setItem("click", click);
    localStorage.setItem("auto", auto);
    localStorage.setItem("prixMulti", prixMulti);
    localStorage.setItem("prixAuto", prixAuto);
    alert("Sauvegardé");
});
load.addEventListener("click", function() {
    click = +localStorage.getItem("click");
    score = +localStorage.getItem("score");
    auto = +localStorage.getItem("auto");
    prixMulti = +localStorage.getItem("prixMulti");
    prixAuto = +localStorage.getItem("prixAuto");
    afficheScore.innerHTML = score;
    afficheAuto.innerHTML = auto;
    multi.innerHTML = click;
    affichePrixAuto.innerHTML = "Auto-click (prix = " + prixAuto + ")";
    affichePrixMulti.innerHTML = "Multiplicateur (prix = " + prixMulti + ")";
    alert("Chargé");
});