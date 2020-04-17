"use strict";
window.addEventListener('DOMContentLoaded', insert);
function insert(event) {
    const surname = document.querySelector("input[name=surname]");
    const username = document.querySelector("input[name=name]");
    surname.value = "Kamiński";
    username.value = "Łukasz";
}
