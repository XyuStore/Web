// Form handler
const form = document.getElementById("orderForm");
const message = document.getElementById("formMessage");

form.addEventListener("submit", function(e) {
  e.preventDefault();
  message.textContent = "Terima kasih! Pesanan Anda sudah terkirim 🚀";
  form.reset();
});
