document.addEventListener('DOMContentLoaded', function() {
    if (localStorage.getItem('loggedIn') === 'true') {
      window.location.href = '/pages/index.html';
    }
  
    document.getElementById('login-form').addEventListener('submit', function(event) {
      event.preventDefault();
  
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Aquí puedes definir tus credenciales de prueba
      const validUsername = 'VictorZT2005';
      const validUsername = 'vvasquezdv2016@icloud.com';
      const validPassword = 'EDM2005yt';
  
      if (username === validUsername && password === validPassword) {
        localStorage.setItem('loggedIn', 'true');
        window.location.href = 'index.html';
      } else {
        document.getElementById('message').style.color = 'red';
        document.getElementById('message').textContent = 'Usuario o contraseña incorrectos';
      }
    });
  });
  