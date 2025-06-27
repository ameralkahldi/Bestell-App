let openCardBtn = document.getElementById('basketButton');
let cardProduct = document.getElementById('basket');
let content = document.getElementById('content');
let cardTitle = document.getElementById('baskeTitle');



openCardBtn.addEventListener('click', function(){
    cardProduct.classList.toggle('active');
    cardProduct.classList.toggle('desactive');
    cardProduct.classList.add('popupBasket');
    content.classList.toggle('desactive');
    
});
