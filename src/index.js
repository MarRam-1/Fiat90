function updateDailyContent() {
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

  //Cards con lo que toca del día-----------------------------------------------------------------------------------//
  // --- ELEMENTOS ---
  // --- FECHA Y DÍA ---
  let today = document.querySelector(".today");
  let now = new Date();
  now.setHours(0, 0, 0, 0);
  let date = now.getDate();

  let startDate = new Date(2026, 0, 5); // <-- cambia esto a tu fecha de inicio real
  startDate.setHours(0, 0, 0, 0);
  let endDate = new Date(2026, 3, 5);
  endDate.setHours(0, 0, 0, 0);

  let diffTime = now - startDate; // diferencia en milisegundos
  let fiatDay = Math.floor(diffTime / (1000 * 60 * 60 * 24)) + 1; // día actual del ciclo

  if (now < startDate || now > endDate) {
    fiatDay = 0; // fuera de los 90 días
  }

  let days = [
    "Domingo",
    "Lunes",
    "Martes",
    "Miércoles",
    "Jueves",
    "Viernes",
    "Sábado",
  ];
  let day = days[now.getDay()];

  let months = [
    "enero",
    "febrero",
    "marzo",
    "abril",
    "mayo",
    "junio",
    "julio",
    "agosto",
    "septiembre",
    "octubre",
    "noviembre",
    "diciembre",
  ];
  let month = months[now.getMonth()];

  today.innerHTML = `${day} ${date} de ${month}`;

  // --- FRASE DEL DÍA ---
  let todayQuote = document.querySelector(".frase");
  let quotes = [
    "Mi corazón espera en Dios.",
    "He aquí la sierva del Señor",
    "Alabo con alegría.",
    "Todo lo puedo en Él.",
    "El cielo me acompaña.",
    "Confío en su providencia.",
    "Esperar en Dios.",
    "Fe que transforma.",
    "Ahí tienes a tu madre.",
    "Él nunca falla.",
    "Confianza que libera.",
    "Dame la fe, Señor, la fe de Maria.",
    "Como Tú, mi corazón escuchará.",
    "Amor que no falla.",
    "Alabar aún en la espera.",
    "Fuerza en la oración.",
    "Decir sí, aquí estoy.",
    "No tengas miedo.",
    "Confío en los planes de Dios.",
    "Hagan lo que Él les dice",
    "Mi vida refleja amor.",
    "Dios lo hace posible.",
    "Hoy elijo perdonar.",
    "Al decir sí, todo tiene sentido.",
    "¿No estoy yo aquí que soy tu Madre?",
    "Te digo que sí.",
    "Yo sé que tu plan es perfecto.",
    "Confío en su misericordia.",
    "Cúbreme bajo tu manto.",
    "Valor que ilumina.",
    "Mi corazón se inclina a Dios.",
    "Humildad que ennoblece.",
    "Obediencia que da fruto.",
    "Nada te turbe.",
    "Amor que protege.",
    "Descansa en su amor.",
    "Tu plan anhelo más que el mío.",
    "Mi alma se alegra.",
    "Fidelidad que edifica.",
    "Se encuentra en las manos de Dios.",
    "La mujer que aceptó sin condición.",
    "Dios renueva fuerzas.",
    "María, quiero ser como Tú.",
    "Guía mis pasos, llévame al cielo.",
    "Para Dios nada hay imposible.",
    "Gratitud que transforma.",
    "El sí que a la humanidad cambio.",
    "Esperanza que sostiene.",
    "Servicio generoso.",
    "Se cumplirá lo prometido",
    "Como María, te quiero servir.",
    "Creer sin ver.",
    "Mi vida en sus manos.",
    "Hágase en mí según tu palabra.",
    "Lo dejo en tus manos, úsame Jesús.",
    "Mi alma alaba al Señor.",
    "Coraje en la adversidad.",
    "Confío en su palabra.",
    "Perseverancia que da fruto.",
    "No estas sola.",
    "En tu corazón me refugio.",
    "Hoy elijo servir.",
    "Hazme transparente, lléname de paz.",
    "Amor que sostiene.",
    "Humildad que abre puertas.",
    "Tus fuerzas te renovará.",
    "Derrama tu gracia hoy aquí.",
    "Grandes maravillas ha hecho en mí.",
    "Aquí estoy yo, envíame.",
    "Toma mi mano.",
    "Fuerza que no falla.",
    "¡Dichosa tú que has creído!",
    "Gracias por llevarnos a Jesús.",
    "Confío en sus caminos.",
    "Mi alma canta con alegría.",
    "Obediencia que inspira.",
    "Enséñame a confiar.",
    "Madre no, ¡no me dejes caer!",
    "Déjame ser tu Madre, déjame consolarte.",
    "Te suelto mis planes.",
    "Hazme entender y creer sin temer.",
    "Hoy quiero recibirlo en mi corazón.",
    "Mi corazón se llena de luz.",
    "Fuerza que persevera.",
    "Amor que transforma.",
    "Tu canto se oirá hasta el cielo.",
    "Fe que nunca falla.",
    "Hoy digo sí a tu voluntad.",
    "Confío en su amor.",
    "Hoy te llamo por tu nombre.",
  ];

  if (todayQuote) {
    if (fiatDay >= 1 && fiatDay <= 90) {
      // Seleccionamos la frase según el día, usando módulo por si hay menos frases que días
      let index = (fiatDay - 1) % quotes.length;
      let quoteOfTheDay = quotes[index];
      todayQuote.innerHTML = `<em>"${quoteOfTheDay}"</em>`;
    } else {
      // Mensaje fuera de los 90 días
      todayQuote.innerHTML = `<em>"¿Qué te motiva para lograr estos 90 días?"</em>`;
    }
  }

  // --- LECTURAS ---
  let lecturaTextElem = document.getElementById("lectura-text");

  let mujeresReadings = [
    "Génesis 2, 4-25",
    "Génesis 3",
    "1 Samuel 1",
    "1 Samuel 2, 1-10",
    "Rut 1",
    "Rut 2",
    "Rut 3",
    "Rut 4",
    "Tobías 1",
    "Tobías 2",
    "Tobías 3",
    "Tobías 4",
    "Tobías 5",
    "Tobías 6",
    "Tobías 7",
    "Tobías 8",
    "Tobías 9",
    "Tobías 10",
    "Tobías 11",
    "Tobías 12",
    "Tobías 13",
    "Tobías 14",
    "Judit 1",
    "Judit 2",
    "Judit 3",
    "Judit 4",
    "Judit 5",
    "Judit 6",
    "Judit 7",
    "Judit 8",
    "Judit 9",
    "Judit 10",
    "Judit 11",
    "Judit 12",
    "Judit 13",
    "Judit 14",
    "Judit 15",
    "Judit 16",
    "Ester A",
    "Ester 1",
    "Ester 2",
    "Ester 3",
    "Ester B-3",
    "Ester 4",
    "Ester C",
    "Ester D",
    "Ester 5",
    "Ester 6",
    "Ester 7",
    "Ester 8",
    "Ester E-8",
    "Ester 9",
    "Ester 10-F",
    "Cantar 1",
    "Cantar 2-3",
    "Cantar 4-5",
    "Cantar 6-7",
    "Cantar 8",
    "Proverbios 1",
    "Proverbios 2",
    "Proverbios 3",
    "Proverbios 4",
    "Proverbios 5",
    "Proverbios 8",
    "Proverbios 9",
    "Proverbios 10",
    "Proverbios 11",
    "Proverbios 12",
    "Proverbios 13",
    "Proverbios 14",
    "Proverbios 15",
    "Prov 31, 10-31",
    "Hechos 16, 11-15",
    "Lucas 1, 1-26",
    "Lucas 1, 27-80",
    "Lucas 2",
    "Juan 2, 1-12",
    "Lucas 7, 36-50",
    "Lucas 10, 38-42",
    "Mateo 9, 18-26",
    "Juan 4, 1-42",
    "Mateo 15, 21-28",
    "Juan 7, 45-8, 11",
    "Juan 11, 1-44",
    "Juan 12, 1-8",
    "Mateo 27, 11-23",
    "Lucas 23, 26-31",
    "Juan 19, 17-30",
    "Marcos 15, 33-47",
    "Juan 20, 1-18",
  ];

  let evangeliosReadings = [
    "Marcos 1",
    "Marcos 2",
    "Marcos 3",
    "Marcos 4",
    "Marcos 5",
    "Marcos 6",
    "Marcos 7",
    "Marcos 8",
    "Marcos 9",
    "Marcos 10",
    "Marcos 11",
    "Marcos 12",
    "Marcos 13",
    "Marcos 14",
    "Marcos 15",
    "Marcos 16",
    "Mateo 1",
    "Mateo 2",
    "Mateo 3",
    "Mateo 4",
    "Mateo 5",
    "Mateo 6",
    "Mateo 7",
    "Mateo 8",
    "Mateo 9",
    "Mateo 10",
    "Mateo 11",
    "Mateo 12",
    "Mateo 13",
    "Mateo 14",
    "Mateo 15",
    "Mateo 16",
    "Mateo 17",
    "Mateo 18",
    "Mateo 19",
    "Mateo 20",
    "Mateo 21",
    "Mateo 22",
    "Mateo 23",
    "Mateo 24",
    "Mateo 25",
    "Mateo 26",
    "Mateo 27",
    "Mateo 28",
    "Lucas 1",
    "Lucas 2",
    "Lucas 3",
    "Lucas 4",
    "Lucas 5",
    "Lucas 6",
    "Lucas 7",
    "Lucas 8",
    "Lucas 9",
    "Lucas 10",
    "Lucas 11",
    "Lucas 12",
    "Lucas 13",
    "Lucas 14",
    "Lucas 15",
    "Lucas 16",
    "Lucas 17",
    "Lucas 18",
    "Lucas 19",
    "Lucas 20",
    "Lucas 21",
    "Lucas 22",
    "Lucas 23",
    "Lucas 24",
    "Juan 1",
    "Juan 2",
    "Juan 3",
    "Juan 4",
    "Juan 5",
    "Juan 6",
    "Juan 7",
    "Juan 8",
    "Juan 9",
    "Juan 10",
    "Juan 11",
    "Juan 12",
    "Juan 13",
    "Juan 14",
    "Juan 15",
    "Juan 16",
    "Juan 17",
    "Juan 18",
    "Juan 19",
    "Juan 20",
    "Juan 21",
    "Día de Consagración",
  ];

  let readings = {
    mujeres: mujeresReadings,
    evangelios: evangeliosReadings,
  };

  // --- BOTONES DE LECTURA ---
  let buttons = document.querySelectorAll(".lecturas-button");

  // Revisar si hay un botón activo guardado en localStorage
  let savedType = localStorage.getItem("lectura-activa") || "mujeres";

  // Función para actualizar lectura y botón activo
  function updateLectura(type) {
    buttons.forEach(function (btn) {
      if (btn.dataset.tipo === type) {
        btn.classList.add("lectura-active");
      } else {
        btn.classList.remove("lectura-active");
      }
    });

    if (fiatDay >= 1 && fiatDay <= 90) {
      lecturaTextElem.innerHTML = readings[type][fiatDay - 1];
    } else {
      lecturaTextElem.innerHTML =
        type === "mujeres" ? "Mujeres en la Biblia" : "Los Evangelios";
    }

    // Guardar en localStorage
    localStorage.setItem("lectura-activa", type);
  }

  // Inicializamos con el botón guardado
  updateLectura(savedType);

  // Agregar evento click a los botones
  buttons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      let tipo = btn.dataset.tipo;
      updateLectura(tipo);
    });
  });

  let hoyOramosElem = document.getElementById("hoy-oramos");

  if (fiatDay >= 1 && fiatDay <= 27) {
    hoyOramosElem.innerHTML = `
    Rosario con petición:<br />
    <em>
      "Oh Reina Santa, dispensadora de las gracias de Dios, recibe mi
      humilde petición y concédeme la gracia que humildemente busco.
      Amén."
    </em>
  `;
  } else if (fiatDay >= 28 && fiatDay <= 54) {
    hoyOramosElem.innerHTML = `
    Rosario de agradecimiento:<br />
    <em>
      "Oh Reina Santa, dispensadora de las gracias de Dios, gracias por recibir
      mi humilde ofrenda. Confío en tu amor y en las gracias que me has concedido.
      Amén."
    </em>
  `;
  } else if (fiatDay === 55) {
    hoyOramosElem.innerHTML = `
    Preparación inicial a la consagración<br />
    <em>
      "María nos lleva más cerca de Cristo y nos enseña a vivir según la voluntad de Dios."
    </em><br />
    Ora y dedica tu intención para este tiempo.
  `;
  } else if (fiatDay >= 56 && fiatDay <= 88) {
    hoyOramosElem.innerHTML = `
    Camino de 33 días:<br />
    <em>
      “Ven, Espíritu Santo, ilumina mi mente y mi corazón para entregarme plenamente
      a Jesús a través de María.”
    </em><br />
    Lectura y meditación.<br />
    Ave María o Magníficat
  `;
  } else if (fiatDay === 89) {
    hoyOramosElem.innerHTML = `
    Preparación Final
    <ul>
      <li><strong>Renuncia:</strong> deja apegos y distracciones</li>
      <li><strong>Conócete:</strong> reconoce tus debilidades y tu necesidad de Dios</li>
      <li><strong>Conoce a María:</strong> contempla sus virtudes y cómo imitarlas</li>
      <li><strong>Conoce a Jesús:</strong> permite que María te acerque más a su Hijo</li>
    </ul>
  `;
  } else if (fiatDay === 90) {
    hoyOramosElem.innerHTML = `
    Consagración Total
    <ul>
      <li>
        <strong>Preparación espiritual:</strong>
        participa de la Misa y recibe la Eucaristía si puedes
      </li>
      <li>
        <strong>Oración de Consagración:</strong>
        <em>
          “Yo, [tu nombre], pecadora infiel, renuevo y ratifico hoy en tus manos,
          oh María, las promesas de mi Bautismo...”
        </em>
      </li>
      <li>
        <strong>Compromiso:</strong>
        escribe la oración y fírmala como símbolo de entrega
      </li>
      <li>
        <strong>Gratitud:</strong>
        reza el Magníficat:
        <em>“Proclama mi alma la grandeza del Señor...”</em>
      </li>
    </ul>
  `;
  } else {
    hoyOramosElem.innerHTML = `
    Rosario o consagración<br />
    <em>Que se refleje en mi alma la alegría de su amor.</em>
  `;
  }

  let spotifyLink = document.querySelector(".spotify-con-ros");

  if (spotifyLink) {
    // TODO el código de Spotify va aquí dentro
  }

  // Día de la semana (0=domingo, 1=lunes...)
  let weekDay = now.getDay();

  // ---------- DÍAS 1 AL 54 ----------
  if (fiatDay >= 1 && fiatDay <= 54) {
    if (weekDay === 1 || weekDay === 6) {
      // lunes o sábado
      spotifyLink.href =
        "https://open.spotify.com/episode/4iqbRnpgfxIhS9Y1bkzDPf?si=e43cc28222334220";
    } else if (weekDay === 2 || weekDay === 5) {
      // martes o viernes
      spotifyLink.href =
        "https://open.spotify.com/episode/0wl4XadA9UhWbLrwFBEUIv?si=fbec008062284691";
    } else if (weekDay === 4) {
      // jueves
      spotifyLink.href =
        "https://open.spotify.com/episode/0GH52D6mbrS5UBxjXkruTS?si=980082e94c084f7a";
    } else {
      // miércoles o domingo
      spotifyLink.href =
        "https://open.spotify.com/episode/04x9N3cnhbfeLwnxVM5YrN?si=52cb44011caf4153";
    }
  }

  // ---------- DÍA 55 ----------
  else if (fiatDay === 55) {
    spotifyLink.href =
      "https://open.spotify.com/playlist/4hwKj4tDLGlM4ZNm11501e?si=c6be15299ee74d43";
  }

  // ---------- DÍAS 56 AL 90 ----------
  else if (fiatDay >= 56 && fiatDay <= 90) {
    let spotifyByDay = {
      56: "https://open.spotify.com/episode/5IW4LOU6EoXthYfeSFt0l5?si=63af9bf92b594bd2",
      57: "https://open.spotify.com/episode/1R2fESp2bL1F3CQofZXSdZ?si=ec2ef7696fc04310",
      58: "https://open.spotify.com/episode/6y6VVMBpm5MrYBNMG84OFF?si=e33a8ff5dce24f12",
      59: "https://open.spotify.com/episode/76Fz6SDlD1l0rKVv1hyvnP?si=c845b1c419774f0a",
      60: "https://open.spotify.com/episode/3YrXpWfrUmChKg9iPYWEgP?si=1903a828edb54906",
      61: "https://open.spotify.com/episode/6KjyWJwd2pLOQyHbml1MJW?si=49c881fe56064061",
      62: "https://open.spotify.com/episode/39ZfKhgbrhTaDP4aVZwx84?si=3e29dec99ca546ed",
      63: "https://open.spotify.com/episode/27VCjZ93q5Q2BZruLus47Z?si=39971e8353f14287",
      64: "https://open.spotify.com/episode/4JY1t8xjvCWzBw1cv5It3q?si=889e63e024244b43",
      65: "https://open.spotify.com/episode/7GgCDYPsDolyWXzehF5z6y?si=7b83cfb8f60049c9",
      66: "https://open.spotify.com/episode/5qXDLnc4CaplDaqIiOxBLk?si=192fc4bafb024580",
      67: "https://open.spotify.com/episode/7Mdi2LDf8RpdHP7MQrnOxt?si=a84f7eb327a44bec",
      68: "https://open.spotify.com/episode/52NPkiqCQE4Y3QnI4xMhcC?si=4335abaa13b34057",
      69: "https://open.spotify.com/episode/5ED2xpuW3iZns2pz1I3mGz?si=d29c2caddcbc4f7f",
      70: "https://open.spotify.com/episode/1JyubHgTlPDSqLOSDxqO34?si=5cb752907e2f42dd",
      71: "https://open.spotify.com/episode/3DEbzQb4kayxAoH1weduq3?si=b2d7c43ae69542ce",
      72: "https://open.spotify.com/episode/5Tqk3jpUfIbDWbvqmG12ZC?si=7333f3ee26594b5c",
      73: "https://open.spotify.com/episode/4ia05vZGWD1iOveI83sTQ7?si=313438f876c746c4",
      74: "https://open.spotify.com/episode/4b6K1ejU45Mukdn1dMQyBX?si=e8558a1ac0ce4668",
      75: "https://open.spotify.com/episode/4G6t27ZVQqN2QvpD3zkePO?si=f7672e9a7eef4042",
      76: "https://open.spotify.com/episode/600qLCrmbJdAKdN0Exocnh?si=4b3024de8e324e62",
      77: "https://open.spotify.com/episode/08STkeVceIpOSTk6LwwnUS?si=245bf07a96c74fa9",
      78: "https://open.spotify.com/episode/1epIXWbq0DCRoZG20iVPx4?si=8b28217518914a9f",
      79: "https://open.spotify.com/episode/0fbdYEA5qalzToLqvdcZui?si=f9b0ebb5981e4119",
      80: "https://open.spotify.com/episode/0X2PEpZftgELlb33Hrfv7l?si=9ecff67f25484c7b",
      81: "https://open.spotify.com/episode/3Jz1GyuIio47GNHXetUJEQ?si=547f7c147def41b6",
      82: "https://open.spotify.com/episode/0OfIHXplul1MqneMf4wWMF?si=5ffef3408c54482a",
      83: "https://open.spotify.com/episode/7qLdhCnrgk1paNWL7lN0T6?si=8220d44b92d44a0e",
      84: "https://open.spotify.com/episode/4TMQDQdFXGZbWHf8rpJSIG?si=66cb3e9b4b104003",
      85: "https://open.spotify.com/episode/761XTCXvxPsXFsn2PV9GtJ?si=9d0ff722e66f4ba0",
      86: "https://open.spotify.com/episode/40pIMTrJoR517dwghsIEJT?si=38e3d9af478c48de",
      87: "https://open.spotify.com/episode/4fVJosg8ycuEZGSNuy9GZj?si=6f6af5c80d6f48ca",
      88: "https://open.spotify.com/episode/4yfls5iRVn7N0Pt6537OU8?si=158068a8fd114ecf",
      89: "https://open.spotify.com/show/1FB03zVd6AIWDCwCG2ZUSS?si=08bc957235f34a5e",
      90: "https://open.spotify.com/intl-es/track/1fWXleLEofJ4Bke423zWYR?si=21581a7f3b0342b8",
    };

    spotifyLink.href = spotifyByDay[fiatDay];
  }

  // ---------- FUERA DE TEMPORADA ----------
  else {
    spotifyLink.href =
      "https://open.spotify.com/playlist/4hwKj4tDLGlM4ZNm11501e?si=721f164cfebf4b32";
  }

  function updateHiddenClasses() {
    const now = new Date();

    const startDate = new Date("2026-01-01");
    const endDate = new Date("2026-04-05");

    const participaButtons = document.querySelectorAll(".participa-button");
    const queEsContainers = document.querySelectorAll(".que-es-container");
    const bloquesInfo = document.querySelectorAll(".bloques-info");
    const fiatActivoElems = document.querySelectorAll(".fiat-activo");

    const isInRange = now >= startDate && now <= endDate;

    // --- Clases que deben ocultarse dentro del rango ---
    participaButtons.forEach((el) => {
      if (isInRange) el.classList.add("hidden");
      else el.classList.remove("hidden");
    });

    queEsContainers.forEach((el) => {
      if (isInRange) el.classList.add("hidden");
      else el.classList.remove("hidden");
    });

    bloquesInfo.forEach((el) => {
      if (isInRange) el.classList.add("hidden");
      else el.classList.remove("hidden");
    });
    // --- Clases que deben ocultarse fuera del rango ---
    fiatActivoElems.forEach((el) => {
      if (!isInRange) el.classList.add("hidden");
      else el.classList.remove("hidden");
    });
  }

  updateHiddenClasses();

  function triggerConfetti() {
    if (fiatDay === 1 || fiatDay === 90) {
      const canvas = document.getElementById("confetti");
      const ctx = canvas.getContext("2d");

      // Asegurar tamaño del canvas
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;

      class Confetti {
        constructor() {
          this.x = Math.random() * canvas.width;
          this.y = Math.random() * canvas.height - canvas.height;
          this.size = Math.random() * 10 + 5;
          this.speed = Math.random() * 5 + 2;
          this.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
          this.angle = Math.random() * 2 * Math.PI;
          this.rotationSpeed = Math.random() * 0.1 - 0.05;
        }

        fall() {
          this.y += this.speed;
          this.x += Math.sin(this.angle) * 2;
          this.angle += this.rotationSpeed;
          if (this.y > canvas.height) {
            this.y = -this.size;
            this.x = Math.random() * canvas.width;
          }
          ctx.fillStyle = this.color;
          ctx.fillRect(this.x, this.y, this.size, this.size);
        }
      }

      const confettis = [];
      for (let i = 0; i < 150; i++) {
        confettis.push(new Confetti());
      }

      function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        confettis.forEach((c) => c.fall());
        requestAnimationFrame(animate);
      }

      animate();

      // Opcional: eliminar el canvas después de 10 segundos
      setTimeout(() => {
        canvas.style.display = "none";
      }, 10000);
    }
  }

  triggerConfetti();

  function triggerStars() {
    if (fiatDay !== 45) return;

    const canvas = document.getElementById("stars");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Star {
      constructor() {
        this.reset();
      }

      reset() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * -canvas.height; // empiezan arriba
        this.size = Math.random() * 3 + 1;
        this.speed = Math.random() * 3 + 1;
        this.opacity = Math.random() * 0.8 + 0.2;
      }

      fall() {
        this.y += this.speed;
        if (this.y > canvas.height) {
          this.reset();
        }
        ctx.fillStyle = `rgba(255, 255, 255, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const stars = [];
    for (let i = 0; i < 150; i++) {
      stars.push(new Star());
    }

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      stars.forEach((star) => star.fall());
      requestAnimationFrame(animate);
    }

    animate();

    // Opcional: eliminar el canvas después de 10 segundos
    setTimeout(() => {
      canvas.style.display = "none";
    }, 10000);
  }

  // Llamar a la animación
  triggerStars();
}

function scheduleDailyUpdate(hour = 2, minute = 0, second = 0) {
  const now = new Date();
  let nextUpdate = new Date(
    now.getFullYear(),
    now.getMonth(),
    now.getDate(),
    hour,
    minute,
    second
  );

  // Si ya pasó la hora de hoy, programar para mañana
  if (now >= nextUpdate) {
    nextUpdate.setDate(nextUpdate.getDate() + 1);
  }

  const timeout = nextUpdate - now; // diferencia en milisegundos

  setTimeout(() => {
    updateDailyContent(); // tu función para actualizar toda la página
    scheduleDailyUpdate(hour, minute, second); // programar la siguiente actualización
  }, timeout);
}

updateDailyContent(); // actualizar inmediatamente al abrir la página
scheduleDailyUpdate(2, 0, 0); // programar actualización diaria a las 2 AM
