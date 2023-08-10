// UI logic

function formSubmissionEventHandler() {
  let form = document.querySelector("#form");
  form.onsubmit = function (event) {
    event.preventDefault();
    let animalInput = document.getElementById("animalInput").value;
    if (animalInput === "notsnake") {
      console.log(animalInput);
    } else if (animalInput === "ontovore") {
      console.log(animalInput);
    } else if (animalInput === "dog") {
      console.log(animalInput);
    }
  }
}

window.onload = function() {
  formSubmissionEventHandler();
}