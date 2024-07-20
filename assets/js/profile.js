document.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');
    const userImage = localStorage.getItem('userImage');

    if (username) {
        document.querySelector('.username').textContent = username;
    }

    if (userImage) {
        document.getElementById('profile-pic').src = userImage;
    }
});
