const CACHE_NAME = 'encyclopedia-v20'; // غيرنا الرقم هنا عشان نمسح القديم إجبارياً
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

  // استثناء ملفات الصوتيات (القرآن) لتوفير مساحة الموبايل وعدم التحميل العشوائي
  if (url.pathname.endsWith('.mp3')) return; 

  // كاش ذكي لنصوص القرآن وتطبيقات الـ API
  if (url.origin === 'https://api.alquran.cloud' || url.origin === 'https://mp3quran.net') {
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
    // باقي ملفات التطبيق (HTML, CSS, JS)
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
          // مسح أي كاش قديم من النسخ السابقة
          if (cacheWhitelist.indexOf(cacheName) === -1) return caches.delete(cacheName);
        })
      );
    })
  );
  self.clients.claim();
});
