function formEventShow(animal) {
  document.querySelector("div#" + animal).classList.remove("hidden");
}

function formEventHide(animalToShow, allAnimals) {
  allAnimals.forEach(animal => {
    if (animal !== animalToShow) {
      document.querySelector("div#" + animal).classList.add("hidden");
    }
  });
}

function formSubmissionEventHandler() {
  let form = document.querySelector("#form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let animalInput = document.getElementById("animalInput").value.toLowerCase();
    const button = document.querySelector("button");
    const animalEntries = Array.from(document.querySelectorAll(".infocard"));
    const animalTypes = animalEntries.map(element => element.id);

    if (animalTypes.includes(animalInput)) {
      button.innerText = "Enter";
      document.getElementById("animalInput").value = "";
      
      formEventShow(animalInput);
      formEventHide(animalInput, animalTypes);
    } 
    else {
      button.innerText = "Try again, smartass!";
    }
  })
  window.removeEventListener("load", formSubmissionEventHandler);
}

window.addEventListener("load", formSubmissionEventHandler);