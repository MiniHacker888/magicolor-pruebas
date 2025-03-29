
let cart = [];

function addToCart(name, price) {
    cart.push({ name, price });
    updateCart();
}

function updateCart() {
    let cartItems = document.getElementById('cart-items');
    let totalElement = document.getElementById('total');
    cartItems.innerHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price;
        let li = document.createElement('li');
        li.textContent = `${item.name} - $${item.price}`;
        let removeBtn = document.createElement('button');
        removeBtn.textContent = 'Eliminar';
        removeBtn.onclick = () => removeItem(index);
        li.appendChild(removeBtn);
        cartItems.appendChild(li);
    });
    
    totalElement.textContent = total;
}

function removeItem(index) {
    cart.splice(index, 1);
    updateCart();
}
