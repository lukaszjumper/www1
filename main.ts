let popup = document.getElementById("error");
let submit = document.querySelector("input[type=submit]");
let username = document.querySelector("input[name=imie]") as HTMLInputElement;
let wrapers = document.getElementsByClassName("wrapper");
let wraper = wrapers[0] as HTMLElement;


wraper.style.pointerEvents = "all";
popup.style.display = "none";


setTimeout(() => {
    console.log("Minęły 2 sekundy.");
  }, 2000);