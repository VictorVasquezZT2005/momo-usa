var xhr = new XMLHttpRequest();
        
xhr.open('GET', '/partials/header.html', true);    
xhr.onload = function() {
    if (xhr.status === 200) {
        document.getElementById('header-container').innerHTML = xhr.responseText;
    }
};
xhr.send();