import { fibo } from "./fib";

const popup = document.getElementById("popupok");
const wrapers = document.getElementsByClassName("wrapper");
const wraper = wrapers[0] as HTMLElement;
const right = document.getElementsByClassName("odwolane")[0] as HTMLElement;
const odwolane = document.getElementById("lodwolane");
const formularz = document.getElementById("formularz");
const pomiedzyTablaIFormularz = document.getElementById("pomiedzy");
const rezerwacjaNapis = document.getElementById("reznapis");

const submit = document.querySelector("input[type=button]") as HTMLElement;
const username = document.querySelector("input[name=name]") as HTMLInputElement;
const surname = document.querySelector("input[name=surname]") as HTMLInputElement;
const date = document.querySelector("input[type=date]") as HTMLInputElement;
const from = document.getElementById("fromselect") as HTMLSelectElement;
const to = document.getElementById("toselect") as HTMLSelectElement;

const displayname = document.getElementById("displayname") as HTMLSpanElement;
const displaysurname = document.getElementById("displaysurname") as HTMLSpanElement;
const displayfrom = document.getElementById("displayfrom") as HTMLSpanElement;
const displayto = document.getElementById("displayto") as HTMLSpanElement;
const displaydate = document.getElementById("displaydate") as HTMLSpanElement;

// Przykład odmirzania czasu

setTimeout(() => {
    console.log("Minęły 2 sekundy.");
  }, 2000);

// Zmiana koloru tła po kliknięci w prawą kolumnę i liczby Fibonacciego

const colors: string[] = ['burlywood', 'white', 'orange', 'cadetblue'];
let clickNumber: number = 0;

function changeColor() {
  document.body.style.backgroundColor = colors[clickNumber % colors.length];
}

function handler(event : Event) {
  const target = event.target as HTMLElement;
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

function formCompleted() : boolean {
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

function reservation(event : Event) {
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


