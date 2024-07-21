import { animes } from './animes.js';
import { mangas } from './mangas.js';

function filterItems(items, query) {
    return items.map(item => {
        return {
            ...item,
            visible: item.title.toLowerCase().includes(query.toLowerCase())
        };
    });
}

function displayItems(items, container) {
    container.innerHTML = ''; // Limpiar resultados anteriores

    items.forEach(item => {
        if (item.visible) {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('search-result');

            const itemLink = document.createElement('a');
            itemLink.href = item.link;

            const itemImg = document.createElement('img');
            itemImg.classList.add('search-image');
            itemImg.src = item.image;
            itemImg.alt = item.title;

            const itemTitle = document.createElement('p');
            itemTitle.classList.add('search-title');
            itemTitle.textContent = item.title;

            itemLink.appendChild(itemImg);
            itemLink.appendChild(itemTitle);
            itemDiv.appendChild(itemLink);
            container.appendChild(itemDiv);
        }
    });
}

function updateSearch() {
    const query = document.querySelector('.search-bar').value;
    
    const filteredAnimes = filterItems(animes, query);
    const filteredMangas = filterItems(mangas, query);
    
    const animeContainer = document.querySelector('.anime-results');
    const mangaContainer = document.querySelector('.manga-results');

    displayItems(filteredAnimes, animeContainer);
    displayItems(filteredMangas, mangaContainer);
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.querySelector('.search-bar');
    const searchButton = document.querySelector('.search-button');

    searchButton.addEventListener('click', updateSearch);
    searchInput.addEventListener('input', updateSearch);

    // Mostrar todos los items inicialmente
    updateSearch();
});
