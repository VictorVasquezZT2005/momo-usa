// assets/js/mangas.js

export const mangas = [
    {
        title: "One Piece",
        image: "/assets/img/one-piece.png",
        link: "/pages/one-piece.html"
    },
    // Puedes agregar más mangas aquí
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
