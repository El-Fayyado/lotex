// Service Worker for El-Fayyado Blog
const CACHE_NAME = 'el-fayyado-cache-v1';
const urlsToCache = [
    '/',
    '/index.html',
    '/404.html',
    '/all.css',
    '/Pro.css',
    '/Proo.css',
    '/Pro.js',
    'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css',
    'https://code.jquery.com/jquery-3.6.0.min.js'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(urlsToCache))
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});