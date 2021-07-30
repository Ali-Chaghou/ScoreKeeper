"use strict"

let totalHome = 0;
let totalAway = 0;

document.getElementById('zero').onclick = zero;
document.getElementById('add1').onclick = add1;
document.getElementById('add2').onclick = add2;
document.getElementById('add3').onclick = add3;
document.getElementById('add4').onclick = add4;
document.getElementById('add5').onclick = add5;
document.getElementById('add6').onclick = add6;

//Hiermit werden beide Punktezähler wieder auf 0 gesetzt. 
function zero() {
    totalHome = 0;
    totalAway = 0;
    document.getElementById('resultHome').innerText = totalHome;
    document.getElementById('resultAway').innerText = totalAway;
}

//Der Punktezähler für die Heimmanschaft.

function add1() {
    // totalHome += 1;
    // totalHome = totalHome + 1;
    totalHome++;
    document.getElementById('resultHome').innerText = totalHome;
}

function add2() {
    totalHome += 2;
    document.getElementById('resultHome').innerHTML = totalHome;
}

function add3() {
    totalHome += 3;
    document.getElementById('resultHome').innerText = totalHome;
}

//Der Punktezähler für die Auswärtsmanschaft.

function add4() {
    totalAway++;
    document.getElementById('resultAway').innerText = totalAway;
}

function add5() {
    totalAway += 2;
    document.getElementById('resultAway').innerText = totalAway;
}

function add6() {
    totalAway += 3;
    document.getElementById('resultAway').innerText = totalAway;
}

//Zusatzaufgabe 

const form = document.querySelector('form');
form.addEventListener('submit', submitForm);

function submitForm(event) {
    event.preventDefault();
    const teamHome = document.querySelector('input[name="Home"]').value;
    const teamAway = document.querySelector('input[name="away"]').value;
    document.querySelector('#home').innerText = teamHome;
    document.querySelector('#away').innerText = teamAway;
}

//Pop up öffnen mit longButton

document.getElementById('longButton').onclick = function sichtbar() {
    document.querySelector("form").style.visibility = "visible";
}

//Pop up schließen mit Close Button 
document.querySelector('#close').onclick = function unsichtbar() {
    document.querySelector("form").style.visibility = "hidden";
}