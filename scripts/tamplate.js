function inti() {
  renderArray();
}

function renderArray() {
  const containerhRef = document.getElementById("showListe");
  containerhRef.innerHTML = "";

  for (let i = 0; i < myListe.length; i++) {
    const eatListe = myListe[i];
    containerhRef.innerHTML += getTemplateListe(eatListe, i);
  }
}
function getTemplateListe(eatListe, i) {
  return `
  
    <div class="card" data-index="${i}">
     <div class="card-body">
    <div class="cardHeader">
    <h2 class="nameEat">${eatListe.name}</h2>
     <button class="addToBasket">
     <img src="./img/icons8-add-32.png" alt="add" class="addImg">
     </button>
       
        </div>
        <p class="descriptionEat">${eatListe.description}</p>
        <div class="priceEet">${eatListe.preise} &euro;</div>
    </div>`;
}
