(() => {
  "use stric";
  let deck = [];
  const tipos = ["C", "D", "H", "S"];
  co nst especiales = ["A", "J", "Q", "K"];

  //Referencia HTML
  const btnOrder = document.querySelector("#btnOrder");
  const btnNew = document.querySelector("#btnNew");
  const btnStop = document.querySelector("#btnStop");
  const players = document.querySelectorAll("small");
  const cardPlayer = document.querySelector("#jugador-carta");
  const cardPc = document.querySelector("#computadora-carta");

  const inicializarJuego = () => {
    deck = crearDeck();
  };

  //Crea un nuevo deck
  const crearDeck = () => {
    for (let i = 2; i <= 10; i++) {
      for (const tipo of tipos) {
        deck.push(i + tipo);
      }
    }
    for (const tipo of tipos) {
      for (const esp of especiales) {
        deck.push(esp + tipo);
      }
    }
    return _.shuffle(deck);
  };

  //Permite tomar una carta
  const pedirCarta = () => {
    if (deck?.length === 0) {
      throw new Error("No hay cartas en el deck");
    }
    return deck.pop();
  };

  // pedirCarta();

  const valorCarta = (carta) => {
    const valor = carta.slice(0, carta?.length - 1);
    return isNaN(valor) ? (valor === "A" ? 11 : 10) : valor * 1;
  };

  const acomularPuntos = () => {

  }

  //turno computadora
  const turnoComputadora = (puntosMinimos) => {
    do {
      const carta = pedirCarta();
      puntosPc = puntosPc + valorCarta(carta);
      players[1].innerText = puntosPc;
      const imgCard = document.createElement("img");
      imgCard.src = `assets/cartas/${carta}.png`;
      imgCard.classList.add("carta");
      cardPc.append(imgCard);
      btnStop.disabled = true;
      if (puntosMinimos > 21) {
        break;
      }
    } while (puntosPc < puntosMinimos);
    setTimeout(() => {
      if (puntosJugador === puntosPc) {
        alert("Tablas!!");
      } else if (
        (puntosJugador > puntosPc && puntosJugador <= 21) ||
        puntosPc > 21
      ) {
        alert("Ganaste!!!");
      } else if (
        (puntosJugador < puntosPc && puntosPc <= 21) ||
        puntosJugador > 21
      ) {
        alert("Perdiste!!!");
      }
    }, 100);
  };

  const valor = valorCarta(pedirCarta());

  // eventos

  btnOrder.addEventListener("click", () => {
    const carta = pedirCarta();
    puntosJugador = puntosJugador + valorCarta(carta);
    players[0].innerText = puntosJugador;
    const imgCard = document.createElement("img");
    imgCard.src = `assets/cartas/${carta}.png`;
    imgCard.classList.add("carta");
    cardPlayer.append(imgCard);

    if (puntosJugador > 21) {
      btnOrder.disabled = true;
      turnoComputadora(puntosJugador);
    } else if (puntosJugador === 21) {
      btnOrder.disabled = true;
      turnoComputadora(puntosJugador);
    }
  });

  btnStop.addEventListener("click", () => {
    btnOrder.disabled = true;
    btnStop.disabled = true;
    turnoComputadora(puntosJugador);
  });

  btnNew.addEventListener("click", () => {
    deck = [];
    deck = crearDeck();
    puntosPc = 0;
    puntosJugador = 0;
    players[0].innerText = 0;
    players[1].innerText = 0;
    cardPlayer.innerHTML = "";
    cardPc.innerHTML = "";
    btnStop.disabled = false;
    btnOrder.disabled = false;
  });
})();
