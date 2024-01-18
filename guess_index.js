// Generar un número aleatorio entre 1 y 100
let randomNumber = generateRandomNumber();

// Obtener elementos del DOM
const guessInput = document.getElementById('guessInput');
const message = document.getElementById('message');

// Contadores de intentos
let attempts = 0;

// Función para generar un nuevo número aleatorio
function generateRandomNumber() {
  return Math.floor(Math.random() * 100) + 1;
}

// Función para reiniciar el juego
function resetGame() {
  randomNumber = generateRandomNumber();
  attempts = 0;
  guessInput.value = '';
  message.textContent = 'Introduce un número entre 1 y 100:';
}

// Función para verificar el número ingresado por el jugador
function checkGuess() {
  const userGuess = parseInt(guessInput.value);

  if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Por favor, ingresa un número válido entre 1 y 100.';
    return;
  }

  attempts++;

  if (userGuess === randomNumber) {
    message.textContent = `¡Felicidades! Adivinaste el número en ${attempts} intentos.`;
    setTimeout(resetGame, 2000); // Reiniciar el juego después de 2 segundos
  } else if (userGuess < randomNumber) {
    message.textContent = 'El número es demasiado bajo. Intenta nuevamente.';
  } else {
    message.textContent = 'El número es demasiado alto. Intenta nuevamente.';
  }
}

// Función para manejar la pulsación de teclas
function handleKeyPress(event) {
  if (event.key === 'Enter') {
    checkGuess();
  }
}

