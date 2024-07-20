document.addEventListener('DOMContentLoaded', function() {
  if (localStorage.getItem('loggedIn') === 'true') {
      window.location.href = '/pages/index.html';
  }

  document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault();

      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;

      // Definir usuarios y contraseñas en un objeto
      const users = {
          'VictorZT2005': 'EDM2005yt',
          // Puedes agregar más usuarios aquí
          // 'otroUsuario': 'otraContraseña'
      };

      if (users[username] && users[username] === password) {
          localStorage.setItem('loggedIn', 'true');
          window.location.href = 'index.html';
      } else {
          document.getElementById('message').style.color = 'red';
          document.getElementById('message').textContent = 'Usuario o contraseña incorrectos';
      }
  });
});
