if ('serviceWorker' in navigator) {
    window.addEventListener('load', function () {
        navigator.serviceWorker.register('service-worker-pwa.js').then(function (reg) {
            console.log('Registered Service Worker for Alloy');
        });
    });
}

