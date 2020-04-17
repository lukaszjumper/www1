"use strict";
var popup = document.getElementById("popupok");
var wrapers = document.getElementsByClassName("wrapper");
var wraper = wrapers[0];
var right = document.getElementsByClassName("odwolane")[0];
var odwolane = document.getElementById("lodwolane");
var formularz = document.getElementById("formularz");
var pomiedzyTablaIFormularz = document.getElementById("pomiedzy");
var rezerwacjaNapis = document.getElementById("reznapis");
var submit = document.querySelector("input[type=button]");
var username = document.querySelector("input[name=name]");
var surname = document.querySelector("input[name=surname]");
var date = document.querySelector("input[type=date]");
var from = document.getElementById("fromselect");
var to = document.getElementById("toselect");
var displayname = document.getElementById("displayname");
var displaysurname = document.getElementById("displaysurname");
var displayfrom = document.getElementById("displayfrom");
var displayto = document.getElementById("displayto");
var displaydate = document.getElementById("displaydate");
// Przykład odmirzania czasu
setTimeout(function () {
    console.log("Minęły 2 sekundy.");
}, 2000);
// Zmiana koloru tła po kliknięci w prawą kolumnę i liczby Fibonacciego
var colors = ['burlywood', 'white', 'orange', 'cadetblue'];
var clickNumber = 0;
function changeColor() {
    document.body.style.backgroundColor = colors[clickNumber % colors.length];
}
function fiboNaive(index) {
    if (index === 0) {
        return 0;
    }
    else if (index === 1) {
        return 1;
    }
    else {
        return fiboNaive(index - 1) + fiboNaive(index - 2);
    }
}
function fibo(index) {
    if (index === 0) {
        return 0;
    }
    else {
        var last = 1;
        var seclast = 0;
        var aux = void 0;
        for (var _i = 1; _i < index; _i++) {
            aux = last;
            last = seclast + last;
            seclast = aux;
        }
        return last;
    }
}
function handler(event) {
    var target = event.target;
    /* if (formularz.contains(target) ||
        odwolane.contains(target) ||
        // obsługujemy też kliknięcia pomiędzy tabelą a formularzem
        pomiedzyTablaIFormularz.contains(target) ||
        rezerwacjaNapis.contains(target))*/ {
        clickNumber++;
        changeColor();
        console.log(fibo(10 * clickNumber));
    }
}
odwolane.addEventListener('click', handler, false);
pomiedzyTablaIFormularz.addEventListener('click', handler, false);
// Formularz
function formCompleted() {
    var resDate = new Date(date.value);
    var now = new Date();
    if (username.value !== '' &&
        surname.value !== '' &&
        from.value !== null &&
        to.value !== null &&
        resDate.getTime() > now.getTime()) {
        return true;
    }
    else {
        return false;
    }
}
function reservation(event) {
    if (formCompleted()) {
        wraper.style.opacity = '0.3';
        wraper.style.pointerEvents = "none";
        popup.style.visibility = "visible";
        displayname.innerHTML = username.value;
        displaysurname.innerHTML = surname.value;
        displaydate.innerHTML = date.value;
        displayto.innerHTML = to.value;
        displayfrom.innerHTML = from.value;
    }
}
submit.addEventListener('click', reservation, false);
//# sourceMappingURL=main.js.map