if (localStorage.getItem('loggedIn') !== 'true') {
    window.location.href = 'login.html';
  }

  document.getElementById('logout').addEventListener('click', function() {
    localStorage.removeItem('loggedIn');
    window.location.href = '/pages/login.html';
  });