// episodes.js

function showEpisodes() {
  document.getElementById('seasons-section').classList.add('hidden');
  document.getElementById('episodes-section').classList.remove('hidden');
}

function showSeasons() {
  document.getElementById('seasons-section').classList.remove('hidden');
  document.getElementById('episodes-section').classList.add('hidden');
  hideAllPlayers(); // Oculta todos los reproductores al volver a la sección de temporadas
}

function showPlayer(videoId) {
  const player = document.getElementById(videoId);
  if (player) {
    if (player.classList.contains('hidden')) {
      hideAllPlayers(); // Oculta todos los reproductores antes de mostrar el seleccionado
      player.classList.remove('hidden');
    } else {
      player.classList.add('hidden'); // Oculta el reproductor si ya está visible
    }
  }
}

function hideAllPlayers() {
  const players = document.querySelectorAll('.video-container');
  players.forEach(player => player.classList.add('hidden'));
}
