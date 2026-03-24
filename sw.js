const CACHE_NAME = 'islamic-encyclopedia-v13';
const urlsToCache = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './manifest.json'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil( caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)) );
});

self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  // استثناء ملفات الصوتيات (القرآن) لتوفير المساحة
  if (url.pathname.endsWith('.mp3')) return; 

  // كاش ذكي لنصوص القرآن عشان تشتغل أوفلاين
  if (url.origin === 'https://api.alquran.cloud') {
    event.respondWith(
      caches.match(req).then(cachedRes => {
        return cachedRes || fetch(req).then(fetchRes => {
          return caches.open('quran-api-cache').then(cache => {
            cache.put(req, fetchRes.clone());
            return fetchRes;
          });
        });
      })
    );
  } else {
    event.respondWith(
      caches.match(req).then(response => response || fetch(req))
    );
  }
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME, 'quran-api-cache'];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) return caches.delete(cacheName);
        })
      );
    })
  );
  self.clients.claim();
});
