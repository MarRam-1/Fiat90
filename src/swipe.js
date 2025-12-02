let startX = 0;
let endX = 0;
const page = document.body; // animaremos todo el body

document.addEventListener("touchstart", (e) => {
  startX = e.changedTouches[0].clientX;
});

document.addEventListener("touchend", (e) => {
  endX = e.changedTouches[0].clientX;
  const diff = endX - startX;

  if (Math.abs(diff) > 80) {
    // sensibilidad del swipe
    if (diff > 0) {
      // Swipe izquierda → derecha: Back
      page.classList.add("slide-fade-right");
      setTimeout(() => history.back(), 300); // espera a que termine la animación
    } else {
      // Swipe derecha → izquierda: Forward
      page.classList.add("slide-fade-left");
      setTimeout(() => history.forward(), 300);
    }
  }
});
