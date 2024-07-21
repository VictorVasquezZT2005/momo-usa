document.addEventListener('DOMContentLoaded', function() {
    // Redirige al usuario a la página de perfil si ya está logueado
    if (localStorage.getItem('loggedIn') === 'true') {
        window.location.href = '/pages/profile.html';
    }

    // Maneja el envío del formulario de inicio de sesión
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault();

        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Verifica si el usuario y la contraseña son correctos
        if (users[username] && users[username].password === password) {
            // Guarda la información en localStorage
            localStorage.setItem('loggedIn', 'true');
            localStorage.setItem('username', username);
            localStorage.setItem('userImage', users[username].image);
            // Redirige al perfil
            window.location.href = '/pages/profile.html';
        } else {
            // Muestra un mensaje de error si las credenciales son incorrectas
            document.getElementById('message').style.color = 'red';
            document.getElementById('message').textContent = 'Usuario o contraseña incorrectos';
        }
    });

    // Maneja la redirección al registro
    document.getElementById('register-button').addEventListener('click', function() {
        window.location.href = '/pages/register.html';
    });
});