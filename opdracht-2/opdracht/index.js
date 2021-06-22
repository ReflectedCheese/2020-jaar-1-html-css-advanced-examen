function xssProbleem() {
  // Maak gebruik van de functie 'xssVoorkomen' om XSS te voorkomen
  const lijst = document.querySelector("#lijst");
  const itemInputWaarde = document.querySelector("#item-input").value;

  if (itemInputWaarde) {
    const nieuwLiEl = document.createElement("li");
    // NIET wijzigen naar textContent, dit moet innerHTML blijven
    nieuwLiEl.innerHTML = xssVoorkomen(itemInputWaarde);

    lijst.appendChild(nieuwLiEl);
  }
}

function xssVoorkomen(text) {
  const divEl = document.createElement("div");
  divEl.textContent = text;
  return divEl.innerHTML;
}
