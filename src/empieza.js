document.querySelectorAll(".accordion").forEach((container) => {
  const header = container.querySelector(".accordion-header");
  header.addEventListener("click", () => {
    container.classList.toggle("active");
  });
});
