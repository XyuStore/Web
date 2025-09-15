let cart = [];
let total = 0;

function addToCart(product, price) {
  cart.push({ product, price });
  total += price;
  updateCart();
}

function updateCart() {
  const cartItems = document.getElementById("cart-items");
  cartItems.innerHTML = "";
  cart.forEach(item => {
    let li = document.createElement("li");
    li.textContent = `${item.product} - Rp ${item.price}`;
    cartItems.appendChild(li);
  });
  document.getElementById("total").textContent = total;
}

document.getElementById("payment-form").addEventListener("submit", function(e) {
  e.preventDefault();
  alert("Pembayaran berhasil! Terima kasih sudah belanja di Dusun Store.");
  cart = [];
  total = 0;
  updateCart();
  this.reset();
});
