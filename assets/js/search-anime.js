// search.js

function searchAnime() {
    var searchText = document.getElementById("searchInput").value.toLowerCase();
    var animes = document.querySelectorAll(".anime");
    
    for (var i = 0; i < animes.length; i++) {
        var animeName = animes[i].querySelector(".name").textContent.toLowerCase();
        
        if (animeName.includes(searchText)) {
            animes[i].style.display = "block";
        } else {
            animes[i].style.display = "none";
        }
    }
}