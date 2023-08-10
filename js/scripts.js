// UI logic

function formEventShow(animal) {
  document.querySelector("div#" + animal).removeAttribute("class");
}

function formEventHide(...Allanimal) {
  Allanimal.forEach((animal) => document.querySelector("div#" + animal).setAttribute("class", "hidden"));
}

function formSubmissionEventHandler() {
  let form = document.querySelector("#form");
  form.onsubmit = function (event) {
    event.preventDefault();
    let animalInput = document.getElementById("animalInput").value;
    const button = document.querySelector("button");
    button.innerText = "Enter";
    if (animalInput === "notsnake"||animalInput === "ontovore"||animalInput === "dog") {
      formEventShow(animalInput);
      if (animalInput === "notsnake") {
        formEventHide("ontovore", "dog");
      } else if (animalInput === "ontovore") {
        formEventHide("notsnake", "dog");
      } else if (animalInput === "dog") {
        formEventHide("notsnake", "ontovore");
      }
    } else {
      button.innerText = "Try again, smartass!";
    }
  }
}

window.onload = function() {
  formSubmissionEventHandler();
}