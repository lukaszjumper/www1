"use strict";
let pasazerowie = document.getElementsByTagName('li');
function pasazerNajwiekszyNumer() {
    let max = pasazerowie[0];
    for (let i = 1; i < pasazerowie.length; i++) {
        const maxnr = Number(max.getAttribute('data-numer'));
        const newnr = Number(pasazerowie[i].getAttribute('data-numer'));
        if (maxnr < newnr) {
            max = pasazerowie[i];
        }
    }
    console.log(max.innerHTML.replace(/<span>.*<\/span>/, ""));
}
pasazerNajwiekszyNumer();
