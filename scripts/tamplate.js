function getTemplateListe(eatListe, i) {
  return `
  
    <div class="card" data-index="${i}" onclick="DisheToCard(${i})">
     <div class="card-body">
    <div class="cardHeader">
    <h2 class="nameEat">${eatListe.name}</h2>
     <button class="addToBasket" onclick="DisheToCard(${i})" >
     <img src="./img/icons8-add-32.png" alt="add" class="addImg">
     </button>
       
        </div>
        <p class="descriptionEat">${eatListe.description}</p>
        <div class="priceEet">${eatListe.preise} &euro;</div>
    </div>`;
}

function getTemplateCard(index) {
  return `
    
    <div class="warenElement">
     <h3 class="nameEat">${productInCard[index].name} </h3>


     <div class="warenIcon">
    <button class="deleteFormBasket" data-index="${index}">
     <img src="./icon/Favicon/icons8-minus-24.png" alt="remove" class="removeImg"></button>
     <span> ${productInCard[index]?.quantity}</span>
     <button class="plusFormBasket" data-index="${index}">
     <img src="./icon/Favicon/icons8-plus-math-26.png" alt="add" class="addImg"></button>
     <span class="priceEet">${productInCard[index].preise} &euro;</span>
     <button class="deleteVonCard" data-index="${index}">
     <img src="./icon/Favicon/icons8-delete-24.png" alt="delete" class="deleteImg"></button>
    </div>
    </div>
    `;
}

function templateTptalPrice(totalPrice, deliveryPrice, prouductPrice) {
  return `
    <div class="totalPrice">
      <h3>Gesamtpreis:</h3>
      <p>Produktpreis: ${prouductPrice} &euro;</p>
      <p>Lieferkosten: ${deliveryPrice} &euro;</p>
      <p>Gesamt: ${totalPrice} &euro;</p>
        <button class="orderButton">Bestellen</button>
    </div>`;
}

function productInCardNull() {
  return `
        <div class="card text-center mb-3 kein-artikel" >
        <div class="card-body">
            <h5 class="card-title">Kein Menü ausgewählt!!</h5>
            <p class="card-text">wähle leckere Gerichte aus der Karte und bestelle Dein Menü.</p>
        </div>
        </div>
    
    `;
}
