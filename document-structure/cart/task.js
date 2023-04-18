const quantityControlDec = Array.from(document.querySelectorAll(".product__quantity-control_dec"));
const quantityControlInc = Array.from(document.querySelectorAll(".product__quantity-control_inc"));
const productQuantityValue = Array.from(document.querySelectorAll(".product__quantity-value"));
const productAdd = Array.from(document.querySelectorAll(".product__add"));
const cartProducts = document.querySelector(".cart__products");
const product = Array.from(document.querySelectorAll(".product"));

for (let i = 0; i < quantityControlDec.length; i++) {
    quantityControlDec[i].addEventListener("click", () => {
        productQuantityValue[i].textContent--;
        
        if (productQuantityValue[i].textContent <= 1) {
            productQuantityValue[i].textContent = 1;
        };
    });
};

for (let i = 0; i < quantityControlInc.length; i++) {
    quantityControlInc[i].addEventListener("click", () => {
        productQuantityValue[i].textContent++; 
    });
};

for (let i = 0; i < productAdd.length; i++) {
    productAdd[i].addEventListener("click", () => {
        const productId = product[i].dataset.id;
        const cartProduct = Array.from(document.querySelectorAll('.cart__product'));
        const findProduct = cartProduct.find(item => item.dataset.id == productId);   
        
       
        if (cartProduct.find(item => item.dataset.id == productId)) {
          
            const actualityQuantity = findProduct.querySelector('.cart__product-count');
            const additionalQuantity = product[i].querySelector(".product__quantity-value");
            actualityQuantity.innerText = +actualityQuantity.innerText + +additionalQuantity.innerText;

            return false;
        };

        cartProducts.insertAdjacentHTML('beforeEnd', `
                <div class="cart__product" data-id="${productId}">
                    <img class="cart__product-image" src="${product[i].querySelector("img").src}">
                    <div class="cart__product-count">${product[i].querySelector(".product__quantity-value").textContent}</div>
                </div>`);
        
    });
};