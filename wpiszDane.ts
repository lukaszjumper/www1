window.addEventListener('DOMContentLoaded', insert);

function insert(event: Event) {
  const surname = document.querySelector("input[name=surname]") as HTMLInputElement;
  const username = document.querySelector("input[name=name]") as HTMLInputElement;
  surname.value = "Kamiński";
  username.value = "Łukasz";
}