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
    document.getElementById('resultHome').innerHTML = totalHome;
    document.getElementById('resultAway').innerHTML = totalAway;
}

//Der Punktezähler für die Heimmanschaft.

function add1() {
    totalHome = totalHome + 1;
    document.getElementById('resultHome').innerHTML = totalHome;
}

function add2() {
    totalHome = totalHome + 2;
    document.getElementById('resultHome').innerHTML = totalHome;
}

function add3() {
    totalHome = totalHome + 3;
    document.getElementById('resultHome').innerHTML = totalHome;
}

//Der Punktezähler für die Auswärtsmanschaft.

function add4() {
    totalAway = totalAway + 1;
    document.getElementById('resultAway').innerHTML = totalAway;
}

function add5() {
    totalAway = totalAway + 2;
    document.getElementById('resultAway').innerHTML = totalAway;
}

function add6() {
    totalAway = totalAway + 3;
    document.getElementById('resultAway').innerHTML = totalAway;
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

document.getElementById('longButton').onclick = function Sichtbar() {
    document.querySelector("form").style.visibility = "visible";
}

//Pop up schließen mit Close Button 
document.querySelector('#close').onclick = function close() {
    document.querySelector("form").style.visibility = "hidden";
}