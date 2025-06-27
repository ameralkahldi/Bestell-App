function getTemplateListe(table, i) {
     const dish = myListe[i];
  return `
    <div class="card" onclick="addDisheToCard('${table}', ${i},event)">
    <div class="cardHeader">
    <h2 class="nameEat">${dish.name}</h2>
     <button class="addToBasket" onclick="addDisheToCard('${table}', ${i},event)" >
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
      <h5>${productInCard[index].name }</h5>
     <div class="warenIcon">
    <button class="deleteFormBasket" onclick="decincreaseQuantity(${index})">
     <img src="./icon/Favicon/icons8-minus-24.png" alt="remove" class="removeImg" ></button>
     <span> ${productInCard[index]?.quantity}x</span>
     <button class="plusFormBasket" onclick="increaseQuantity(${index})">
     <img src="./icon/Favicon/icons8-plus-math-26.png" alt="add" class="addImg"></button>
     <span>${((productInCard[index]?.price)* (productInCard[index]?.quantity)).toFixed(2)}&euro; </span> 
     <button class="deleteVonCard"> 
     <img src="./icon/Favicon/icons8-delete-24.png" alt="delete" class="deleteImg" onclick="deleteFromCard(${index})"></button> 
    </div>
    </div>
    `;
}


function templateTptalPrice(totalPrice, deliveryPrice, prouductTotalPrice) {
  return `
    <div class="totalPrice">
    <hr>
      <p>Zwischenpreise: ${prouductTotalPrice.toFixed(2)} &euro;</p>
      <p>Lieferpreis: ${deliveryPrice.toFixed(2)} &euro;</p>
      <p>Gesamt: ${totalPrice.toFixed(2)} &euro;</p>
        <div class="justify-content-center align-items-center d-flex ">
            <button class="btn btn-info text-center m-3 w-75" onclick = "orderAllInCard()">Bestellen</button>
        </div>
    
    </div>`;
}

function productInCardNull() {
  return `
        <div class="card">
        <div class="cardBody">
            <h6 class="cardTitle">Kein Menü ausgewählt!!</h6>
        </div>
        </div>`;
}
function linkTemplateResponsive(){
    return `
        <button class="btn btn-primary basket-responsive-btn" onclick = "closePopup()">Warenkorp</button>
    `;
}
function toggleCard(){
    let cardTitle = document.getElementById('baskeTitle');
    let cardProductList = document.getElementById('basketList');
    let cardTotalPrice = document.getElementById('basketPrice'); 
    cardTitle.classList.toggle('desactive');
    cardProductList.classList.toggle('desactive');
    cardTotalPrice.classList.toggle('desactive');
}
function orderAllInCard() {
  let cardOrder = document.getElementById("order");
  toggleCard();
  cardOrder.innerHTML = `<h5>Vielen Dank für Ihre Bestellung!</h5>`;
  localStorage.removeItem("productInCard");
  setTimeout(() => {
        showElementToCart();
        toggleCard();
        cardOrder.innerHTML = '';
    }, 10000); 
}


 