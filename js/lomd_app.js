//validando si la página se está desplegando desde produccion o desarrollo

var url = window.location.href;
var swLocation = '/twittor/lomd-sw.js'

if (navigator.serviceWorker) {
    if (url.includes('localhost')) { 
        swLocation = '/lomd-sw.js'; }
    navigator.serviceWorker.register(swLocation);
}

