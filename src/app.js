function generarCarta() {
  const palos = ['heart', 'diamond', 'spade', 'club'];
  const valores = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];

  const palo = palos[Math.floor(Math.random() * 4)];
  const valor = valores[Math.floor(Math.random() * 13)];

  const cartaDiv = document.getElementById('carta');
  cartaDiv.className = `card ${palo}`;
  
  // Actualizar todos los símbolos
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
}