"use strict";
const popup = document.getElementById("popupok");
const wrapers = document.getElementsByClassName("wrapper");
const wraper = wrapers[0];
const right = document.getElementsByClassName("odwolane")[0];
const odwolane = document.getElementById("lodwolane");
const formularz = document.getElementById("formularz");
const pomiedzyTablaIFormularz = document.getElementById("pomiedzy");
const rezerwacjaNapis = document.getElementById("reznapis");
const submit = document.querySelector("input[type=button]");
const username = document.querySelector("input[name=name]");
const surname = document.querySelector("input[name=surname]");
const date = document.querySelector("input[type=date]");
const from = document.getElementById("fromselect");
const to = document.getElementById("toselect");
const displayname = document.getElementById("displayname");
const displaysurname = document.getElementById("displaysurname");
const displayfrom = document.getElementById("displayfrom");
const displayto = document.getElementById("displayto");
const displaydate = document.getElementById("displaydate");
// Przykład odmirzania czasu
setTimeout(() => {
    console.log("Minęły 2 sekundy.");
}, 2000);
// Zmiana koloru tła po kliknięci w prawą kolumnę i liczby Fibonacciego
const colors = ['burlywood', 'white', 'orange', 'cadetblue'];
let clickNumber = 0;
function changeColor() {
    document.body.style.backgroundColor = colors[clickNumber % colors.length];
}
function fibo(index) {
    if (index === 0) {
        return 0;
    }
    else {
        let last = 1;
        let seclast = 0;
        let aux;
        for (let _i = 1; _i < index; _i++) {
            aux = last;
            last = seclast + last;
            seclast = aux;
        }
        return last;
    }
}
function handler(event) {
    const target = event.target;
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
    const resDate = new Date(date.value);
    const now = new Date();
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
