const CACHE_NAME = 'editor-v1';
const ASSETS = [
  '/',
  '/index.html',
  '/manifest.json'
];


// Install event: Caches the app shell
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
});


// Fetch event: Serves files from cache if offline
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});