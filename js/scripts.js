function formEventDisplay(animalToShow, allAnimals) {
  allAnimals.forEach(animal => {
    const animalCard = document.querySelector("div#" + animal);
    if (animal === animalToShow) {
      animalCard.classList.remove("hidden");
    }
    else {
      animalCard.classList.add("hidden");
    }
  });
}

function formSubmissionEventHandler() {
  const form = document.querySelector("#form");
  const button = document.querySelector("button");
  const animalEntries = Array.from(document.querySelectorAll(".infocard"));
  const animalTypes = animalEntries.map(element => element.id);

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    let animalInput = document.getElementById("animalInput").value.toLowerCase();

    if (animalTypes.includes(animalInput)) {
      button.innerText = "Enter";
      document.getElementById("animalInput").value = "";
      formEventDisplay(animalInput, animalTypes);
    } 
    else {
      button.innerText = "Try again, smartass!";
    }
  });
  window.removeEventListener("load", formSubmissionEventHandler);
}

window.addEventListener("load", formSubmissionEventHandler);