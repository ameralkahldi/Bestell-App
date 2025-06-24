function loadProductInCard() {
  return JSON.parse(localStorage.getItem("ProductInCard")) || [];
}

let productInCard = loadProductInCard();

function saveProductInCard(list) {
  localStorage.setItem("ProductInCard", JSON.stringify(list));
}

function inti() {
  renderArray();
  showElementToCart();
  showPrice();
}

function renderArray() {
  const containerhRef = document.getElementById("showListe");
  containerhRef.innerHTML = "";

  for (let i = 0; i < myListe.length; i++) {
    const eatListe = myListe[i];
    containerhRef.innerHTML += getTemplateListe(eatListe, i);
  }
}

function showElementToCart() {
  productInCard = loadProductInCard();
  let cardListeRef = document.getElementById("basketList");
  cardListeRef.innerHTML = "";
  if (productInCard.length == 0) {
    cardListeRef.innerHTML = productInCardNull();
  } else {
    for (let i = 0; i < productInCard.length; i++) {
      cardListeRef.innerHTML += getTemplateCard(i);
    }
  }
  showPrice();
}

totalPrice = 0;
deliveryPrice = 0;
prouductPrice = 0;

function showPrice() {
  productInCard = loadProductInCard();
  let priceRef = document.getElementById("basketPrice");
  if (productInCard.length === 0) {
    priceRef.classList.add("emptyCart");
    priceRef.innerHTML = "";
  } else {
    priceRef.classList.remove("emptyCart");
    priceRef.innerHTML = "";
    priceRef.innerHTML += templateTptalPrice(
      totalPrice,
      deliveryPrice,
      prouductPrice
    );
  }
}

function DisheToCard(index) {
  const eatListe = myListe[index];
  const sarcheProduct = productInCard.find(
    (item) => item.name === eatListe.name
  );

  if (sarcheProduct) {
    sarcheProduct.quantity += 1;
  } else {
    const newProduct = { eatListe, quantity: 1 };
    productInCard.push(newProduct);
  }

  productInCard = loadProductInCard();
  showElementToCart();
  showPrice();
}
