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

        // Definir usuarios y contraseñas en un objeto
        const users = {
            'VictorZT2005': {
                password: 'EDM2005yt',
                image: '/assets/img/victor-vasquez.jpg' // Ruta a la imagen del usuario
            },
            'Rosita2024': {
                password: 'rositarivera2024',
                image: '/assets/img/rosita-rivera.jpg' // Ruta a la imagen del usuario
            },
            // Puedes agregar más usuarios aquí
        };

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
});
