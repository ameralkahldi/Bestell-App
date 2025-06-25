let productInCard = [];

function inti() {
  renderArray();
  showElementToCart();
}

const containerhRef = document.getElementById("showListeDisch");
const containerDischRef = document.getElementById("showListeDisch2");

function renderArray() {
  containerhRef.innerHTML = "";
  for (let i = 0; i < myListe.length; i++) {
    containerhRef.innerHTML += getTemplateListe(myListe, i);
  }
  containerDischRef.innerHTML = "";
  for (let i = 0; i < myListe2.length; i++) {
    containerDischRef.innerHTML += getTemplateListe(myListe2, i);
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

function DisheToCard(table, index, event) {
  let tempListe;
  if (table === "myListe") {
    tempListe = myListe;
  } else {
    tempListe = myListe2;
  }
  const dishList = tempListe;
  let product = dishList[index];
  const newInCard = {
    name: product.name,
    price: product.preise,
    quantity: 1,
  };
  let inputProduct = productInCard.find(
    (product) => product.name === newInCard.name
  );
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

function showPrice() {
  let priceRef = document.getElementById("basketPrice");
  if (productInCard.length === 0) {
    priceRef.innerHTML = "";
  } else {
    priceRef.innerHTML = "";
    priceRef.innerHTML += templateTptalPrice(
      totalPrice,
      deliveryPrice,
      prouductPrice
    );
  }
}
