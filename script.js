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



totalPrice = 0;
deliveryPrice = 0;
prouductPrice = 0;


function showPrice(){
  productInCard = loadProductInCard();
  let priceRef =document.getElementById('basketPrice');
  if (productInCard.length === 0) {
    priceRef.classList.add('hidden');
    priceRef.innerHTML = "";
    
  }else{
    priceRef.classList.remove('hidden');
    priceRef.innerHTML = "";
    priceRef.innerHTML += templateTptalPrice(totalPrice, deliveryPrice, prouductPrice);
    
  }
}
