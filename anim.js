// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
// var lyricsData = [
//   { text: "¡Qué infinito es este instante!", time: 7 },
//   { text: "¡Qué sagrado este momento!", time: 12 },
//   { text: "De mirarnos frente a frente", time: 15 },
//   { text: "Y escucharnos en silencio", time: 17 },
  
//   // verse 2
//   { text: "Siento que lo más profundo", time: 20 },
//   { text: "Y en lo inmenso de esta calma", time: 23 },
//   { text: "Se resuelven para siempre", time: 28 },
//   { text: "Nuestra pena, nuestros dramas", time: 0 },
  
//   // verse 3
//   { text: "Más allá del placer y el dolor", time: 0 },
//   { text: "O del bien y del mal", time: 0 },
//   { text: "Que trajimos cargados", time: 0 },
//   { text: "A este punto del camino", time: 0 },
  
//   // verse 4
//   { text: "He dejado mi equipaje", time: 0 },
//   { text: "He vaciado mis bolsillos", time: 0 },
//   { text: "He llegado hasta tu puerta", time: 0 },
//   { text: "Para continuar contigo", time: 0 },
  
//   // chorus 1
//   { text: "Por el resto de mi vida", time: 0 },
//   { text: "Y en el tiempo que me quede", time: 0 },
//   { text: "Viajaré sin rumbo fijo", time: 0 },
//   { text: "A donde nuestro amor nos lleve", time: 0 },
  
//   // chorus 2
//   { text: "Desde el cielo más sublime", time: 0 },
//   { text: "Hasta el abismo de los días", time: 0 },
//   { text: "Voy a amarte intensamente", time: 0 },
//   { text: "Por el resto de mi vida", time: 0 },
  
//   // chorus 3
//   { text: "Si tu corazón me guarda", time: 0 },
//   { text: "No habrá fuerza que me aleje", time: 0 },
//   { text: "No sé que nos traiga el mundo", time: 0 },
//   { text: "Ni el destino, ni la muerte", time: 0 },
  
//   // chorus 4
//   { text: "Sólo sé que desde tu alma", time: 0 },
//   { text: "Una música me invita", time: 0 },
//   { text: "A navegar entre tus manos", time: 0 },
//   { text: "Por el resto de mi vida", time: 0 },
  
//   // verse 5
//   { text: "Cambiaremos sin remedio", time: 0 },
//   { text: "Uno cambia todo el tiempo", time: 0 },
//   { text: "Va mudando de horizonte", time: 0 },
//   { text: "De certezas y de miedos", time: 0 },
  
//   // verse 6
//   { text: "Todo gira en esta rueda", time: 0 },
//   { text: "Todo cambia en un instante", time: 0 },
//   { text: "A mí me cambió la vida", time: 0 },
//   { text: "Por ejemplo, cuando llegaste", time: 0 },
  
//   // verse 7
//   { text: "Pero existe en los dos", time: 0 },
//   { text: "Una esencia que no cambiará", time: 0 },
//   { text: "Sé que tu alma y la mía", time: 0 },
//   { text: "Se buscaron desde siempre", time: 0 }
// ];
 

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);