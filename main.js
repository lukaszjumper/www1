var popup = document.getElementById("error");
var submit = document.querySelector("input[type=submit]");
var username = document.querySelector("input[name=imie]");
var wrapers = document.getElementsByClassName("wrapper");
var wraper = wrapers[0];
var pasazerowie = document.getElementsByClassName("ol");
wraper.style.pointerEvents = "all";
popup.style.display = "none";
/*for(var i=0; i<pasazerowie.length; i++) {
    console.log(pasazerowie[i].getAttribute("data-numer"));
}*/
setTimeout(function () {
    console.log("Minęły 2 sekundy.");
}, 2000);
