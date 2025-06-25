function getTemplateListe(table, i) {
     let tempDisch;
     if (table === 'myListe') {
       tempDisch = myListe[i];
     } else {tempDisch = myListe2[i];}
     const dish = tempDisch;
    
  return `
    <div class="card" onclick="DisheToCard('${table}', ${i},event)">
    <div class="cardHeader">
    <h2 class="nameEat">${dish.name}</h2>
     <button class="addToBasket" onclick="DisheToCard('${table}', ${i},event)" >
     <img src="./img/icons8-add-32.png" alt="add" class="addImg">
     </button>
        </div>
        <p class="descriptionEat">${dish.description}</p>
        <div class="priceEet">${dish.preise} &euro;</div>
    </div>`;
}

function getTemplateCard(index) {
  return `
  <hr>
    <div class="warenElement">
      <h5>${productInCard[index] && productInCard[index].name ? productInCard[index].name : 'N/A'}</h5>
     <div class="warenIcon">
    <button class="deleteFormBasket">
     <img src="./icon/Favicon/icons8-minus-24.png" alt="remove" class="removeImg"></button>
     <span> ${productInCard[index]?.quantity}x</span>
     <button class="plusFormBasket" >
     <img src="./icon/Favicon/icons8-plus-math-26.png" alt="add" class="addImg"></button>
     <span class="priceEet">${productInCard[index].price} &euro;</span>
     <button class="deleteVonCard">
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
        <div class="card">
        <div class="cardBody">
            <h4 class="cardTitle">Kein Menü ausgewählt!!</h4>
            <p class="cardText">wähle leckere Gerichte aus der Karte und bestelle Dein Menü.</p>
        </div>
        </div>
    
    `;
}
