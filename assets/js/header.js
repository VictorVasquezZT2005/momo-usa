document.addEventListener('DOMContentLoaded', function() {
    // Cargar el contenido del header
    var xhr = new XMLHttpRequest();
    xhr.open('GET', '/partials/header.html', true);    
    xhr.onload = function() {
        if (xhr.status === 200) {
            document.getElementById('header-container').innerHTML = xhr.responseText;

            // Aplicar imagen de perfil desde localStorage
            var profileImage = localStorage.getItem('userImage');
            if (profileImage) {
                var profileCircle = document.querySelector('.ProfileCircle');
                profileCircle.style.backgroundImage = `url('${profileImage}')`;
            }
        }
    };
    xhr.send();
});
