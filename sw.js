const CACHE_NAME = 'encyclopedia-v29';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) =>
      Promise.all(
        urlsToCache.map((url) =>
          cache.add(url).catch(() => null)
        )
      )
    )
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return;

  const url = new URL(req.url);

  if (url.pathname.endsWith('.mp3')) return;

  const apiHosts = [
    'https://api.alquran.cloud',
    'https://mp3quran.net',
    'https://www.mp3quran.net',
    'https://api.aladhan.com'
  ];

  if (apiHosts.some((h) => url.origin === new URL(h).origin)) {
    event.respondWith(
      caches.match(req).then((cachedRes) => {
        return (
          cachedRes ||
          fetch(req).then((fetchRes) => {
            return caches.open('quran-api-cache').then((cache) => {
              cache.put(req, fetchRes.clone());
              return fetchRes;
            });
          })
        );
      })
    );
  } else {
    event.respondWith(caches.match(req).then((response) => response || fetch(req)));
  }
});

self.addEventListener('activate', (event) => {
  const cacheWhitelist = [CACHE_NAME, 'quran-api-cache'];
  event.waitUntil(
    caches.keys().then((cacheNames) =>
      Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheWhitelist.indexOf(cacheName) === -1) return caches.delete(cacheName);
        })
      )
    )
  );
  self.clients.claim();
});
