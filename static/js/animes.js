// assets/js/animes.js

export const animes = [
    {
        title: "Kimetsu no Yaiba",
        image: "/static/img/kimetsu-no-yaiba.png",
        link: "/anime/kimetsu-no-yaiba.html"
    },
    {
        title: "One Piece",
        image: "/static/img/one-piece.png",
        link: "/anime/one-piece.html"
    },
    {
        title: "Kaiju No. 8",
        image: "/static/img/kaiju-no.-8.png",
        link: "/anime/kaiju-no-8.html"
    },
    {
        title: "Dragon Ball Z",
        image: "/static/img/dragon-ball-z.png",
        link: "/anime/dragon-ball-z.html"
    }
];

export function loadAnimes() {
    const container = document.querySelector('.anime-list');
    
    // Verificar que el contenedor existe
    if (!container) {
        console.error('No se encontró el contenedor de animes');
        return;
    }

    // Limpiar el contenedor antes de agregar nuevos elementos
    container.innerHTML = '';

    // Crear y agregar cada anime al contenedor
    animes.forEach(anime => {
        const animeDiv = document.createElement('div');
        animeDiv.classList.add('anime');

        const animeLink = document.createElement('a');
        animeLink.href = anime.link;

        const animeImg = document.createElement('img');
        animeImg.classList.add('anime-image');
        animeImg.src = anime.image;
        animeImg.alt = anime.title;

        const animeTitle = document.createElement('p');
        animeTitle.classList.add('name');
        animeTitle.textContent = anime.title;

        animeLink.appendChild(animeImg);
        animeLink.appendChild(animeTitle);
        animeDiv.appendChild(animeLink);
        container.appendChild(animeDiv);
    });
}

document.addEventListener('DOMContentLoaded', loadAnimes);
