
function inti() {
  renderArray();
  showElementToCart();
}

const containerhRef = document.getElementById("showListeDisch");

function renderArray() {
  containerhRef.innerHTML = "";
  for (let i = 0; i < myListe.length; i++) {
    containerhRef.innerHTML += getTemplateListe(myListe, i);
  }
  
}

function showElementToCart() {
  let cardListeRef = document.getElementById("basketList");
  cardListeRef.innerHTML = "";
  if (productInCard.length === 0) {
    cardListeRef.innerHTML = productInCardNull();
  } else {
    for (let i = 0; i < productInCard.length; i++) {
      cardListeRef.innerHTML += getTemplateCard(i);
    }
  }
  showPrice();
}

function addDisheToCard(table, index, event) { //add to Card 
  let product = myListe[index];
  const newInCard = {
    name: product.name,
    price: product.preise,
    quantity: 1,};
  let inputProduct = productInCard.find(
    (product) => product.name === newInCard.name);
  if (inputProduct) {
    inputProduct.quantity++;
  } else {
    productInCard.push(newInCard);
  }
  showElementToCart();
  event.stopPropagation();
}

totalPrice = 0;
deliveryPrice = 5;
prouductPrice = 0;

function showPrice() { // show Price
  let priceRef = document.getElementById("basketPrice");
  if (productInCard.length === 0) {
    priceRef.innerHTML = "";
  } else {
    priceRef.innerHTML = "";
    priceRef.innerHTML += templateTptalPrice(totalPrice,deliveryPrice,prouductPrice);
  }
}

function deleteFromCard(index) { //delete von Card
  productInCard.splice(index, 1);
  showElementToCart();
}

function increaseQuantity(index) { //add auf Amount 
  let addAmount = productInCard[index];
  if (addAmount) {
    addAmount.quantity++;
  }
  showElementToCart();

}


  function decincreaseQuantity(index) { //minus von Amount 
    if (productInCard[index].quantity > 1) {
        productInCard[index].quantity--;
    } else {
        productInCard.splice(index, 1);
    }
  
    showElementToCart();
}
