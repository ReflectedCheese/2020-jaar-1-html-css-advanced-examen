/* Negeren */
function randomScore(min, max) {
  return Math.random() * (max - min) + min;
}

const cursisten = [
  { id: 0, naam: "Yoeri" },
  { id: 1, naam: "Marvi Hendriks" },
  { id: 2, naam: "Simone :P" },
  { id: 3, naam: "Domenico" },
  { id: 4, naam: "Marco " },
  { id: 5, naam: "Michelle" },
  { id: 6, naam: "Romy" },
  { id: 9, naam: "Ian" },
  { id: 10, naam: "Angelique" },
  { id: 11, naam: "Arne" },
];

function voegScoresToeAanCursisten() {
  cursisten.forEach(
    (cursist) => (cursist.score = Math.round(randomScore(50, 100)))
  );
}
/* Tot hier negeren */

function cursistenToevoegen() {
  voegScoresToeAanCursisten();
  const cardsEl = document.querySelector(".cards");
  cardsEl.innerHTML = "";

  cursisten.forEach((cursist) => {
    let cardEl = document.createElement("div");
    cardEl.classList.add("card");
    cardEl.setAttribute("style", "width:250px");
    const score = parseInt(randomScore(0, 100));
    cardEl.innerHTML = `
        <div class="card-body">
            <h5 class="card-title">${cursist.naam}</h5>
            <p class="card-text">Score: ${score}/100</p>
            <div class="progress">
            <div class="progress-bar" role="progressbar" style="width: ${score}%" aria-valuenow="${score}" aria-valuemin="0" aria-valuemax="100"></div>
          </div>
        </div>`;
    const cardContainer = document.querySelector(".cards");
    cardContainer.appendChild(cardEl);
  });
}
