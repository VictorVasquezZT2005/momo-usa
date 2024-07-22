// assets/js/mangas.js

export const mangas = [
    {
        title: "Kimetsu no Yaiba",
        image: "/static/img/kimetsu-no-yaiba-manga.png",
        link: "/pages/kimetsu-no-yaiba.html"
    },
    {
        title: "Dragon Ball Super",
        image: "/static/img/dragon-ball-super-manga.png",
        link: "/pages/dragon-ball-super.html"
    },
    {
        title: "Blue Lock",
        image: "/static/img/blue-lock-manga.png",
        link: "/pages/blue-lock.html"
    },
    {
        title: "Jujutsu Kaisen",
        image: "/static/img/jujutsu-kaisen-manga.png",
        link: "/pages/jujutsu-kaisen.html"
    }
];

export function loadMangas() {
    const container = document.querySelector('.manga-list');
    
    // Verificar que el contenedor existe
    if (!container) {
        console.error('No se encontró el contenedor de mangas');
        return;
    }

    // Limpiar el contenedor antes de agregar nuevos elementos
    container.innerHTML = '';

    // Crear y agregar cada manga al contenedor
    mangas.forEach(manga => {
        const mangaDiv = document.createElement('div');
        mangaDiv.classList.add('manga');

        const mangaLink = document.createElement('a');
        mangaLink.href = manga.link;

        const mangaImg = document.createElement('img');
        mangaImg.classList.add('manga-image');
        mangaImg.src = manga.image;
        mangaImg.alt = manga.title;

        const mangaTitle = document.createElement('p');
        mangaTitle.classList.add('name');
        mangaTitle.textContent = manga.title;

        mangaLink.appendChild(mangaImg);
        mangaLink.appendChild(mangaTitle);
        mangaDiv.appendChild(mangaLink);
        container.appendChild(mangaDiv);
    });
}

document.addEventListener('DOMContentLoaded', loadMangas);
