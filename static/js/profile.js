document.addEventListener('DOMContentLoaded', function() {
    // Configurar el evento de clic para el botón de logout
    document.getElementById('logout').addEventListener('click', function(event) {
      event.preventDefault(); // Evita el comportamiento por defecto del formulario
      
      // Realizar una solicitud POST para cerrar sesión en el servidor
      fetch('/logout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        credentials: 'include' // Incluir cookies para la autenticación
      }).then(response => {
        if (response.ok) {
          // Elimina la información de sesión del localStorage
          localStorage.removeItem('loggedIn');
          // Redirige a la página de inicio de sesión
          window.location.href = '/login'; 
        } else {
          // Manejo de errores si la solicitud falla
          console.error('Error al cerrar sesión');
        }
      });
    });
});
