document.getElementById("gioca").addEventListener("click", avviaSlot);

let idUno;
let idDue;
let idTre;

let vittorie = 0;
let tentativi = 0;
let percentuale = 0;

let delayUno = Math.floor(Math.random() * 450) + 50;
let delayDue = Math.floor(Math.random() * 450) + 50;
let delayTre = Math.floor(Math.random() * 450) + 50;

const immagini = ["static/images/1.png", "static/images/2.png", "static/images/3.png", "static/images/4.png", "static/images/5.png"];

function avviaSlot() {

    cambiaImmagine("uno", 0);
    cambiaImmagine("due", 0);
    cambiaImmagine("tre", 0);
    document.getElementById("gioca").disabled = true;
    document.getElementById("ferma").disabled = false;
}

function cambiaImmagine(position, currentIndex) {
    if (currentIndex < immagini.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }

    document.getElementById(position).src = immagini[currentIndex];

    if (position === "uno") {
        idUno = setTimeout(() => cambiaImmagine(position, currentIndex), delayUno);
    } else if (position === "due") {
        idDue = setTimeout(() => cambiaImmagine(position, currentIndex), delayDue);
    } else if (position === "tre") {
        idTre = setTimeout(() => cambiaImmagine(position, currentIndex), delayTre);
    }
}

document.getElementById("ferma").addEventListener("click", fermaSlot);

function fermaSlot() {
    clearTimeout(idUno);
    clearTimeout(idDue);
    clearTimeout(idTre);
    document.getElementById("gioca").disabled = false;
    document.getElementById("ferma").disabled = true;

    if (document.getElementById("uno").src === document.getElementById("due").src && document.getElementById("due").src === document.getElementById("tre").src) {
        document.getElementById("esito").innerText = "Hai vinto!";
        document.getElementById("esito").style.color = "greenyellow";
        vittorie++


    } else {
        document.getElementById("esito").innerText = "Hai perso!";
        document.getElementById("esito").style.color = "red";
    }

    tentativi++;
    percentuale = vittorie / tentativi * 100;

    document.getElementById("vittorie").innerText = vittorie;
    document.getElementById("tentativi").innerText = tentativi;
    document.getElementById("percentuale").innerText = percentuale;
}