function inti() {
  renderArray();
  showElementToCart();
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
function loadProductInCard() {
    return JSON.parse(localStorage.getItem("ProductInCard")) || [];
}
let productInCard = loadProductInCard();

function getTemplateCard(index){
    return `
    <hr>
    <div class="warenElement">
     <h2 class="nameEat">${productInCard[index] && productInCard[index].name ? productInCard[index].name : 'Name nicht gefunden'} </h2>
     
     `

    
}

function showElementToCart(){
    productInCard = loadProductInCard();
    let cardListeRef = document.getElementById('basketList');
    cardListeRef.innerHTML = "";
    if(productInCard.length == 0) {
        cardListeRef.innerHTML += `<h3 class="emptyCart">Der Warenkorb ist leer</h3>`;
    }else
    {
        for(let i = 0; i < productInCard.length; i++) {
            cardListeRef.innerHTML += getTemplateCard(i);
        }
    }

}

