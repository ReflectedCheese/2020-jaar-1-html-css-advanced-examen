function voegEventHandlerToeAanKnop() {
  const buttonEl = document.querySelector("#knop-2");
  buttonEl.addEventListener("click", itemToevoegen);
  // Voeg een event listener toe aan het 'click' event.
  // Als geklikt wordt, moet de functie "itemToevoegen" aangeroepen worden.
}
voegEventHandlerToeAanKnop();

function itemToevoegen() {
  const lijst = document.querySelector("#lijst");
  const itemInputWaarde = document.querySelector("#item-input").value;

  if (itemInputWaarde) {
    const nieuwLiEl = document.createElement("li");
    nieuwLiEl.classList.add("list-group-item");
    nieuwLiEl.textContent = itemInputWaarde;
    // Niet vergeten: nieuwLiEl moet ook een Bootstrap class toegekend krijgen

    lijst.appendChild(nieuwLiEl);
  }
}
