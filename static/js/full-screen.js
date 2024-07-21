function toggleFullscreen(elementId) {
    var element = document.getElementById(elementId);
    if (element.requestFullscreen) {
        if (document.fullscreenElement) {
            document.exitFullscreen();
        } else {
            element.requestFullscreen();
        }
    } else if (element.webkitRequestFullscreen) { // Safari
        if (document.webkitFullscreenElement) {
            document.webkitExitFullscreen();
        } else {
            element.webkitRequestFullscreen();
        }
    } else if (element.mozRequestFullScreen) { // Firefox
        if (document.mozFullScreenElement) {
            document.mozCancelFullScreen();
        } else {
            element.mozRequestFullScreen();
        }
    } else if (element.msRequestFullscreen) { // IE/Edge
        if (document.msFullscreenElement) {
            document.msExitFullscreen();
        } else {
            element.msRequestFullscreen();
        }
    }
}