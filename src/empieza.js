const countdowns = [
  {
    date: "2026-01-05T00:00:00",
    container: ".countdown-container",
    finished: "#finished-message",
    ids: { days: "days", hours: "hours", minutes: "minutes" },
  },
  {
    date: "2025-12-27T00:00:00",
    container: ".countdown-container1",
    finished: "#finished-message1",
    ids: { days: "days1", hours: "hours1", minutes: "minutes1" },
  },
];

countdowns.forEach((c) => {
  const target = new Date(c.date).getTime();

  const interval = setInterval(() => {
    const now = Date.now();
    const distance = target - now;

    const daysEl = document.getElementById(c.ids.days);
    const hoursEl = document.getElementById(c.ids.hours);
    const minutesEl = document.getElementById(c.ids.minutes);
    const containerEl = document.querySelector(c.container);
    const finishedEl = document.querySelector(c.finished);

    // Si no existen los elementos, saltamos este countdown
    if (!daysEl || !hoursEl || !minutesEl || !containerEl || !finishedEl) {
      clearInterval(interval); // detiene el interval, no hay nada que actualizar
      return;
    }

    if (distance <= 0) {
      clearInterval(interval);
      containerEl.style.display = "none";
      finishedEl.style.display = "block";
      return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = minutes;
  }, 1000);
});
