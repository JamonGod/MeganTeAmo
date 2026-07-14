const CACHE_NAME = 'amor-v1';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  // Aquí debes poner las rutas de tus imágenes y canciones principales
  './img/1.jpg', 
  './audio/cancion1.mp3'
];

// Instala el Service Worker y guarda los archivos
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Intercepta las peticiones para que funcione sin internet
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) {
          return response; // Devuelve la versión guardada sin gastar datos
        }
        return fetch(event.request); // Si no está guardada, la busca en internet
      })
  );
});