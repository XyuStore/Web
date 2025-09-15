// Animasi sederhana: muncul pelan saat scroll
document.addEventListener("scroll", () => {
  const elements = document.querySelectorAll("section, .card, form");
  elements.forEach(el => {
    const pos = el.getBoundingClientRect().top;
    if (pos < window.innerHeight - 50) {
      el.style.opacity = "1";
      el.style.transform = "translateY(0)";
    }
  });
});

// Atur style awal (sembunyi dulu)
window.onload = () => {
  const elements = document.querySelectorAll("section, .card, form");
  elements.forEach(el => {
    el.style.opacity = "0";
    el.style.transform = "translateY(40px)";
    el.style.transition = "all 0.8s ease";
  });
};
