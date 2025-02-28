function generarCarta() {
  const palos = ['heart', 'diamond', 'spade', 'club'];
  const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const palo = palos[Math.floor(Math.random() * palos.length)];
  const valor = valores[Math.floor(Math.random() * valores.length)];

  const cartaDiv = document.getElementById('carta');
  cartaDiv.className = `card ${palo}`;

  // Actualizar todos los símbolos, objeto literal inmediatamente accedido
  const simbolo = {
    heart: '♥',
    diamond: '♦',
    spade: '♠',
    club: '♣'
  }[palo];

  // Actualizar las cuatro esquinas
  cartaDiv.querySelectorAll('.top-left, .bottom-right')
    .forEach(corner => corner.textContent = simbolo);

  // Actualizar valor central
  cartaDiv.querySelector('.value').textContent = valor;

  // Actualizar tamaño de la carta
  const { value: ancho = 200 } = document.getElementById('ancho');
  const { value: alto = 300 } = document.getElementById('alto');
  carta.style.width = `${ancho}px`;
  carta.style.height = `${alto}px`;
}

let intervaloContador, tiempoRestante = false;
const actualizarTemporizador = () => {
  const temp = document.getElementById('temporizador');
  const activo = temporizadorActivo && tiempoRestante > 0;
  temp.textContent = activo ? `Siguiente carta en: ${tiempoRestante}s` : 'Timer detenido';
};
const iniciarTemporizador = () => {
  temporizadorActivo = true;
  tiempoRestante = 10;
  clearInterval(intervaloContador);
  intervaloContador = setInterval(() => {
    tiempoRestante--;
    actualizarTemporizador();
    if (tiempoRestante <= 0) {
      generarCarta();
      tiempoRestante = 10;
    }
  }, 1000);
  actualizarTemporizador();
};
const detenerTemporizador = () => {
  temporizadorActivo = false;
  clearInterval(intervaloContador);
  actualizarTemporizador();
};
