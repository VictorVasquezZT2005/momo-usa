document.addEventListener('DOMContentLoaded', function () {
    const headerContainer = document.getElementById('header-container');
    headerContainer.innerHTML = `
        <header>
            <div class="Rectangle1">
                <a href="/index" class="Inicio">INICIO</a>
                <a href="/search" class="search-button-header"><span class="material-symbols-outlined">search</span></a>
                <a href="/manga" class="Manga">MANGA</a>
                <a href="/anime" class="Anime">ANIME</a>
                <a href="/profile" class="ProfileCircle" style="background-image: url('/static/img/profile.png');"></a>
            </div>
        </header>
    `;
});
