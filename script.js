function inti() {
  renderArray();
  showElementToCart();
  showPrice();
}


function renderArray() {
  const containerhRef = document.getElementById("showListeDisch");
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



function addDisheToCard(table, index, event) {
  //add to Card
  let product = myListe[index];
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



const deliveryPrice = 5;
let = prouductTotalPrice = 0;
let = totalPrice = 0;



function showPrice() {
  // show Price
  let priceRef = document.getElementById("basketPrice");
  if (productInCard.length === 0) {
    priceRef.classList.add("desactive");
    priceRef.innerHTML = "";
  } else {
    priceRef.classList.remove("desactive");
    priceRef.innerHTML = "";
    calculateTotalPrice();
    priceRef.innerHTML += templateTptalPrice(
      totalPrice,
      deliveryPrice,
      prouductTotalPrice
    );
  }
}



function calculateTotalPrice() {
  prouductTotalPrice = 0;
  for (let index = 0; index < productInCard.length; index++) {
    prouductTotalPrice +=
      productInCard[index].price * productInCard[index].quantity;
  }
  totalPrice = prouductTotalPrice + deliveryPrice;
}

function deleteFromCard(index) {
  productInCard.splice(index, 1);
  showElementToCart();
}



function increaseQuantity(index) {
  //add auf Amount
  let addAmount = productInCard[index];
  if (addAmount) {
    addAmount.quantity++;
  }
  showElementToCart();
}



function decincreaseQuantity(index) {
  //minus von Amount
  let amoutDes = productInCard[index];
  if (amoutDes.quantity === 1) {
    deleteFromCard();
    console.log(productInCard[index].name);
  } else {
    amoutDes.quantity--;
  }
  showElementToCart();
}




